import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { Event, BookmakerEntry, Market, Outcome } from '@gambitsheets/database';
import { prisma } from '@gambitsheets/database';

interface OddsRow {
  eventName: string;
  sportName: string;
  sportGroup: string;
  commenceTime: Date;
  homeTeam: string;
  awayTeam: string;
  marketKey: string;
  homeTeamPrice: number;
  awayTeamPrice: number;
}

const MOCK_googleSheetId = "1c0VPOBaXTYlABiiILFUEHZPGOf66MlYZH7gWSg-bzM4"

export class GoogleSheetsClient {
  private auth: OAuth2Client;
  private sheets;
  private spreadsheetId: string;

  scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  constructor() {
    this.auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URL
    );

    this.spreadsheetId = MOCK_googleSheetId;
    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
  }

  setSpreadsheetId(spreadsheetId: string) {
    this.spreadsheetId = spreadsheetId;
  }

  getSpreadsheetId(): string {
    return this.spreadsheetId;
  }

  getAuthUrl(): string {
    return this.auth.generateAuthUrl({
      access_type: 'offline',
      scope: this.scopes
    });
  }

  /**
   * Creates a new Google Sheet and populates it with existing odds data
   * @returns The created spreadsheet data
   */
  async createSheet() {
    try {
      // Create new spreadsheet with three sheets

      if (this.spreadsheetId === MOCK_googleSheetId) {
        return {
          success: true,
          message: 'Sheet already exists',
          spreadsheetId: this.spreadsheetId,
          spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/edit?usp=sharing`
        };
      }

      const response = await this.sheets.spreadsheets.create({
        requestBody: {
          properties: {
            title: 'Gambit Sheets'
          },
          sheets: [
            {
              properties: {
                title: 'Odds',
                index: 0
              }
            },
            {
              properties: {
                title: 'Bets',
                index: 1
              }
            },
            {
              properties: {
                title: 'Results',
                index: 2
              }
            }
          ]
        }
      });

      // Set the spreadsheet ID for future operations
      const spreadsheetId = response.data.spreadsheetId;
      if (!spreadsheetId) {
        throw new Error('Failed to get spreadsheet ID from creation response');
      }
      this.setSpreadsheetId(spreadsheetId);

      // Get all events directly from the database
      const events = await prisma.event.findMany({
        include: {
          sport: true,
          bookmakerEntries: {
            include: {
              markets: {
                include: {
                  outcomes: true
                }
              }
            }
          }
        }
      });

      // Push the odds data to the Odds tab
      await this.pushOddsToSheet(events);

      return response.data;
    } catch (error) {
      throw new Error(`Failed to create and populate sheet: ${error}`);
    }
  }

  async getTokens(code: string) {
    const { tokens } = await this.auth.getToken(code);
    this.auth.setCredentials(tokens);
    return tokens;
  }

  async getSheetData(spreadsheetId: string, range: string = 'A1:D10') {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range
      });
      return response.data.values;
    } catch (error) {
      throw new Error(`Failed to fetch sheet data: ${error}`);
    }
  }

  async updateSheetData(spreadsheetId: string, range: string, values: any[][]) {
    try {
      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update sheet data: ${error}`);
    }
  }

  /**
   * Pushes odds data to the Odds tab of the spreadsheet
   * @param events Array of events with their odds data
   */
  async pushOddsToSheet(events: (Event & {
    sport: {
      group: string;
    };
    bookmakerEntries: (BookmakerEntry & {
      markets: (Market & {
        outcomes: Outcome[];
      })[];
    })[];
  })[]) {
    try {
      // Get spreadsheet metadata to find the Odds sheet ID
      const spreadsheet = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId
      });

      const oddsSheet = spreadsheet.data.sheets?.find(sheet =>
        sheet.properties?.title === 'Odds'
      );

      if (!oddsSheet?.properties?.sheetId) {
        throw new Error('Could not find Odds sheet in the spreadsheet');
      }

      // Prepare headers
      const headers = [
        'Event Name',
        'Sport Name',
        'Sport Group',
        'Commence Time',
        'Home Team',
        'Away Team',
        'Market Key',
        'Home Team Price',
        'Away Team Price'
      ];

      // Prepare data rows
      const rows: OddsRow[] = events.flatMap(event => {
        return event.bookmakerEntries.flatMap(bookmaker => {
          return bookmaker.markets.flatMap(market => {
            // Only process markets with exactly 2 outcomes (like h2h)
            if (market.outcomes.length !== 2) return [];

            // Find home and away team outcomes
            const homeTeamOutcome = market.outcomes.find(o => o.name === event.homeTeam);
            const awayTeamOutcome = market.outcomes.find(o => o.name === event.awayTeam);

            if (!homeTeamOutcome || !awayTeamOutcome) return [];

            return [{
              eventName: `${event.homeTeam} vs ${event.awayTeam}`,
              sportName: event.sportTitle,
              sportGroup: event.sport.group,
              commenceTime: event.commenceTime,
              homeTeam: event.homeTeam,
              awayTeam: event.awayTeam,
              marketKey: market.key,
              homeTeamPrice: homeTeamOutcome.price,
              awayTeamPrice: awayTeamOutcome.price
            }];
          });
        });
      });

      // Convert rows to array format for Google Sheets
      const values = [
        headers,
        ...rows.map(row => [
          row.eventName,
          row.sportName,
          row.sportGroup,
          row.commenceTime.toISOString(),
          row.homeTeam,
          row.awayTeam,
          row.marketKey,
          row.homeTeamPrice,
          row.awayTeamPrice
        ])
      ];

      // First, resize the sheet to accommodate the data
      await this.sheets.spreadsheets.batchUpdate({
        spreadsheetId: this.spreadsheetId,
        requestBody: {
          requests: [{
            updateSheetProperties: {
              properties: {
                sheetId: oddsSheet.properties.sheetId,
                gridProperties: {
                  rowCount: Math.max(values.length + 1, 1000), // Add some buffer rows
                  columnCount: 9 // We need 9 columns now
                }
              },
              fields: 'gridProperties(rowCount,columnCount)'
            }
          }]
        }
      });

      // Update the Odds tab
      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'Odds!A1', // Use Odds tab
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });

      // Clear any existing data beyond our new data in the Odds tab
      // Only clear if we have data to clear
      if (values.length > 0) {
        const clearRange = `Odds!A${values.length + 1}:I`; // Updated to column I
        await this.sheets.spreadsheets.values.clear({
          spreadsheetId: this.spreadsheetId,
          range: clearRange,
        });
      }

      return response.data;
    } catch (error) {
      throw new Error(`Failed to push odds to sheet: ${error}`);
    }
  }

  /**
   * Syncs the current sheet with the latest data from the database
   * @returns Object containing sync status and details
   */
  async syncSheet() {
    try {
      const spreadsheetId = this.getSpreadsheetId();
      if (!spreadsheetId) {
        throw new Error('Spreadsheet ID is not set');
      }

      // Get latest events from database
      const events = await prisma.event.findMany({
        include: {
          sport: true,
          bookmakerEntries: {
            include: {
              markets: {
                include: {
                  outcomes: true
                }
              }
            }
          }
        }
      });

      // Update the Odds tab with latest data
      await this.pushOddsToSheet(events);

      return {
        success: true,
        message: 'Sheet synchronized successfully',
        spreadsheetId,
        updatedAt: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to sync sheet: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
} 