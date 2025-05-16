// import { google } from 'googleapis';
// import { OAuth2Client } from 'google-auth-library';
// import { Event, BookmakerEntry, Market, Outcome } from '@gambitsheets/database';
// import { prisma } from '@gambitsheets/database';
// import { GameResultSimulationService, MatchOdds, MatchResult } from './gameResultSimulation.service';

// interface OddsRow {
//   eventId: string;
//   eventName: string;
//   sportName: string;
//   sportGroup: string;
//   commenceTime: Date;
//   homeTeam: string;
//   awayTeam: string;
//   marketKey: string;
//   bookmaker: string;
//   homeTeamPrice: number;
//   awayTeamPrice: number;
//   points?: number;  // Optional points for spread/total markets
// }

// type MarketType = 'h2h' | 'spreads' | 'totals';
// type TotalSelection = 'Over' | 'Under';

// interface BetData {
//   eventId: string;
//   event: string;
//   sport: string;
//   market: MarketType;
//   selection: string;
//   totalSelection?: TotalSelection;  // Updated to use TotalSelection type
//   oddsHome: number;
//   oddsAway: number;
//   points?: number;
//   bet: number;
//   potentialWin: number;
//   estimatedProfit: number;
//   impliedWinPercentage: number;
//   status: 'Pending' | 'Betted' | 'Finished';
// }

// interface BetRow {
//   event: string;
//   sport: string;
//   market: MarketType;
//   selection: string;
//   totalSelection: string;
//   oddsHome: string;
//   oddsAway: string;
//   points: string;
//   bet: string;
//   potentialWin: string;
//   estimatedProfit: string;
//   impliedWinPercentage: string;
//   status: string;
// }

// const MOCK_googleSheetId = null;

// type GoogleSheetsValue = string | number | boolean | null;

// interface GoogleSheetsUpdateResponse {
//   spreadsheetId?: string | null;
//   updatedRange?: string | null;
//   updatedRows?: number | null;
//   updatedColumns?: number | null;
//   updatedCells?: number | null;
// }

// export class GoogleSheetsClient {
//   private auth: OAuth2Client;
//   private sheets;
//   private spreadsheetId: string | null;
//   private stopBetPollingID: NodeJS.Timeout | null;

//   scopes = ['https://www.googleapis.com/auth/spreadsheets'];

//   constructor() {
//     this.auth = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       process.env.GOOGLE_REDIRECT_URL
//     );

//     this.stopBetPollingID = null;
//     this.spreadsheetId = MOCK_googleSheetId;
//     this.sheets = google.sheets({ version: 'v4', auth: this.auth });
//   }

//   /**
//    * Checks if the spreadsheet exists
//    * @param spreadsheetId The ID of the spreadsheet to check
//    * @returns true if the spreadsheet exists, false otherwise
//    */
//   private async checkSpreadsheetExists(spreadsheetId: string): Promise<boolean> {
//     try {
//       await this.sheets.spreadsheets.get({
//         spreadsheetId,
//         ranges: [], // We don't need any specific ranges
//         includeGridData: false // We don't need the actual data
//       });
//       return true;
//     } catch (error) {
//       if (error instanceof Error && error.message.includes('404')) {
//         return false;
//       }
//       throw error; // Re-throw other errors
//     }
//   }

//   /**
//    * Checks if spreadsheetId is set and the spreadsheet exists
//    * @throws Error if spreadsheetId is null or spreadsheet doesn't exist
//    */
//   private async checkSpreadsheetId(): Promise<string> {
//     if (!this.spreadsheetId) {
//       throw new Error('Spreadsheet ID is not set');
//     }

//     const exists = await this.checkSpreadsheetExists(this.spreadsheetId);
//     if (!exists) {
//       throw new Error(`Spreadsheet with ID ${this.spreadsheetId} does not exist`);
//     }

//     return this.spreadsheetId;
//   }

//   setSpreadsheetId(spreadsheetId: string) {
//     this.spreadsheetId = spreadsheetId;
//   }

//   getSpreadsheetId(): string | null {
//     return this.spreadsheetId;
//   }

//   getAuthUrl(): string {
//     return this.auth.generateAuthUrl({
//       access_type: 'offline',
//       scope: this.scopes
//     });
//   }

//   /**
//    * Creates the Odds tab with headers and initial data
//    */
//   private async createOddsTab(events: (Event & {
//     sport: {
//       group: string;
//     };
//     bookmakerEntries: (BookmakerEntry & {
//       markets: (Market & {
//         outcomes: Outcome[];
//       })[];
//     })[];
//   })[]) {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();

//       // Get spreadsheet metadata to find the Odds sheet ID
//       const spreadsheet = await this.sheets.spreadsheets.get({
//         spreadsheetId
//       });

//       const oddsSheet = spreadsheet.data.sheets?.find(sheet =>
//         sheet.properties?.title === 'Odds'
//       );

//       if (!oddsSheet?.properties?.sheetId) {
//         throw new Error('Could not find Odds sheet in the spreadsheet');
//       }

//       // Prepare headers
//       const headers = [
//         'Event ID',        // A
//         'Event Name',      // B
//         'Sport Name',      // C
//         'Sport Group',     // D
//         'Commence Time',   // E
//         'Home Team',       // F
//         'Away Team',       // G
//         'Bookmaker',       // H
//         'Market Key',      // I
//         'Home Team Price', // J
//         'Away Team Price', // K
//         'Points'          // L
//       ];

//       // Prepare data rows
//       const rows: OddsRow[] = events.flatMap(event => {
//         return event.bookmakerEntries.flatMap(bookmaker => {
//           return bookmaker.markets.flatMap(market => {
//             // Only process markets with exactly 2 outcomes (like h2h)
//             if (market.outcomes.length !== 2) return [];

//             // Find home and away team outcomes
//             const homeTeamOutcome = market.outcomes.find(o => o.name === event.homeTeam);
//             const awayTeamOutcome = market.outcomes.find(o => o.name === event.awayTeam);

//             if (!homeTeamOutcome || !awayTeamOutcome) return [];

//             return [{
//               eventId: event.id,
//               eventName: `${event.homeTeam} vs ${event.awayTeam}`,
//               sportName: event.sportTitle,
//               sportGroup: event.sport.group,
//               commenceTime: event.commenceTime,
//               homeTeam: event.homeTeam,
//               awayTeam: event.awayTeam,
//               bookmaker: bookmaker.title,
//               marketKey: market.key,
//               homeTeamPrice: homeTeamOutcome.price,
//               awayTeamPrice: awayTeamOutcome.price,
//               points: homeTeamOutcome.point || undefined
//             }];
//           });
//         });
//       });

//       // Convert rows to array format for Google Sheets
//       const values = [
//         headers,
//         ...rows.map(row => [
//           row.eventId,
//           row.eventName,
//           row.sportName,
//           row.sportGroup,
//           row.commenceTime.toISOString(),
//           row.homeTeam,
//           row.awayTeam,
//           row.bookmaker,
//           row.marketKey,
//           row.homeTeamPrice,
//           row.awayTeamPrice,
//           row.points || (row.marketKey === 'h2h' ? '-' : '')  // Show '-' for h2h markets, empty for others without points
//         ])
//       ];

//       // Update the Odds tab
//       await this.sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range: 'Odds!A1',
//         valueInputOption: 'RAW',
//         requestBody: {
//           values,
//         },
//       });

//       // Add header formatting
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             repeatCell: {
//               range: {
//                 sheetId: oddsSheet.properties.sheetId,
//                 startRowIndex: 0,
//                 endRowIndex: 1,
//                 startColumnIndex: 0,
//                 endColumnIndex: headers.length
//               },
//               cell: {
//                 userEnteredFormat: {
//                   backgroundColor: {
//                     red: 0.2,
//                     green: 0.4,
//                     blue: 0.8
//                   },
//                   textFormat: {
//                     bold: true,
//                     foregroundColor: {
//                       red: 1,
//                       green: 1,
//                       blue: 1
//                     }
//                   },
//                   horizontalAlignment: 'CENTER'
//                 }
//               },
//               fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
//             }
//           }]
//         }
//       });

//       return values.length;
//     } catch (error) {
//       throw new Error(`Failed to create Odds tab: ${error}`);
//     }
//   }

//   /**
//    * Creates the Bets tab with headers and formulas
//    */
//   private async createBetsTab(eventsRows: number) {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();

//       // Get spreadsheet metadata to find the Bets sheet ID
//       const spreadsheet = await this.sheets.spreadsheets.get({
//         spreadsheetId
//       });

//       const betsSheet = spreadsheet.data.sheets?.find(sheet =>
//         sheet.properties?.title === 'Bets'
//       );

//       if (!betsSheet?.properties?.sheetId) {
//         throw new Error('Could not find Bets sheet in the spreadsheet');
//       }

//       // Headers
//       const headers = [
//         'Event ID',            // A
//         'Event',               // B
//         'Sport',               // C
//         'Market',              // D
//         'Home Team Odd',       // E
//         'Away Team Odd',       // F
//         'Points',              // G
//         'Potential Win',       // H
//         'Bet Price',           // I
//         'Select Winner Team',  // J
//         'Select For Total bets', // K
//         'Estimated Profit',    // L
//         "Implied Win %",       // M
//         'Status',              // N
//         'Profit'              // O
//       ];

//       // Formula to get event ID
//       const eventIdFormula = '=Odds!A2';
//       // Formula to get unique events
//       const eventFormula = '=Odds!B2';
//       // Formula to get sport based on selected event
//       const sportFormula = '=Odds!C2';
//       // Formula to get available markets for the event
//       const marketFormula = '=Odds!I2';
//       // Formula to get home team odds
//       const homeTeamOddFormula = '=Odds!J2';
//       // Formula to get away team odds
//       const awayTeamOddFormula = '=Odds!K2';
//       // Points formula - will be '-' for h2h markets
//       const pointsFormula = '=IF(D2="h2h"; "-"; Odds!L2)';
//       // Formula to calculate potential win with decimal odds conversion
//       const potentialWinFormula = '=I2 * IF(D2="totals"; IF(K2="Over"; E2; IF(K2="Under"; F2; "")); IF(J2="Home"; E2; IF(J2="Away"; F2; "")))';
//       // Formula to calculate estimated profit
//       const estimatedProfitFormula = '=H2 - I2';
//       // Formula to calculate implied win percentage
//       const impliedWinPercentageFormula = '=IF(AND(E2>0;F2>0); 100 - (100 / (E2 + F2)); "")';
//       // Formula to calculate actual profit based on Results tab
//       const profitFormula = '=Results!K2';

//       const rowValues = [
//         eventIdFormula,        // A: Event ID
//         eventFormula,          // B: Event
//         sportFormula,          // C: Sport
//         marketFormula,         // D: Market
//         homeTeamOddFormula,    // E: Home Team Odd
//         awayTeamOddFormula,    // F: Away Team Odd
//         pointsFormula,         // G: Points
//         potentialWinFormula,   // H: Potential Win
//         '',                    // I: Bet Price (empty for user input)
//         '',                    // J: Select Winner Team (empty for user input)
//         '',                    // K: Select For Total bets (empty for user input)
//         estimatedProfitFormula,// L: Estimated Profit
//         impliedWinPercentageFormula, // M: Implied Win %
//         'Pending',            // N: Status
//         profitFormula         // O: Profit
//       ];

//       // Create array of row values for all rows
//       const allRows = [headers];
//       for (let i = 0; i < eventsRows; i++) {
//         allRows.push(rowValues.map(formula =>
//           formula.replace(/2/g, (i + 2).toString())
//         ));
//       }

//       // Update the Bets tab with all rows
//       await this.sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range: 'Bets!A1',
//         valueInputOption: 'USER_ENTERED', // Important for formulas
//         requestBody: {
//           values: allRows,
//         },
//       });

//       // Add data validation for Select Winner Team column
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             setDataValidation: {
//               range: {
//                 sheetId: betsSheet.properties.sheetId,
//                 startRowIndex: 1,
//                 endRowIndex: eventsRows + 1000,
//                 startColumnIndex: 9, // Select Winner Team column (J)
//                 endColumnIndex: 10
//               },
//               rule: {
//                 condition: {
//                   type: 'ONE_OF_LIST',
//                   values: [
//                     { userEnteredValue: 'Home' },
//                     { userEnteredValue: 'Away' }
//                   ]
//                 },
//                 showCustomUi: true,
//                 strict: true
//               }
//             }
//           }]
//         }
//       });

//       // Add data validation for Select For Total bets column
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             setDataValidation: {
//               range: {
//                 sheetId: betsSheet.properties.sheetId,
//                 startRowIndex: 1,
//                 endRowIndex: eventsRows + 1000,
//                 startColumnIndex: 10, // Select For Total bets column (K)
//                 endColumnIndex: 11
//               },
//               rule: {
//                 condition: {
//                   type: 'ONE_OF_LIST',
//                   values: [
//                     { userEnteredValue: 'Over' },
//                     { userEnteredValue: 'Under' }
//                   ]
//                 },
//                 showCustomUi: true,
//                 strict: true
//               }
//             }
//           }]
//         }
//       });

//       // Add data validation for Status column
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             setDataValidation: {
//               range: {
//                 sheetId: betsSheet.properties.sheetId,
//                 startRowIndex: 1,
//                 endRowIndex: eventsRows + 1000,
//                 startColumnIndex: 13, // Status column (N)
//                 endColumnIndex: 14
//               },
//               rule: {
//                 condition: {
//                   type: 'ONE_OF_LIST',
//                   values: [
//                     { userEnteredValue: 'Pending' },
//                     { userEnteredValue: 'Betted' },
//                     { userEnteredValue: 'Finished' },
//                   ]
//                 },
//                 showCustomUi: true,
//                 strict: true
//               }
//             }
//           }]
//         }
//       });

//       // Add header formatting
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             repeatCell: {
//               range: {
//                 sheetId: betsSheet.properties.sheetId,
//                 startRowIndex: 0,
//                 endRowIndex: 1,
//                 startColumnIndex: 0,
//                 endColumnIndex: headers.length
//               },
//               cell: {
//                 userEnteredFormat: {
//                   backgroundColor: {
//                     red: 0.2,
//                     green: 0.4,
//                     blue: 0.8
//                   },
//                   textFormat: {
//                     bold: true,
//                     foregroundColor: {
//                       red: 1,
//                       green: 1,
//                       blue: 1
//                     }
//                   },
//                   horizontalAlignment: 'CENTER'
//                 }
//               },
//               fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
//             }
//           }]
//         }
//       });

//       return headers.length;
//     } catch (error) {
//       throw new Error(`Failed to create Bets tab: ${error}`);
//     }
//   }

//   /**
//    * Creates the Results tab with headers and data validation
//    */
//   private async createResultsTab() {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();

//       // Get spreadsheet metadata to find the Results sheet ID
//       const spreadsheet = await this.sheets.spreadsheets.get({
//         spreadsheetId
//       });

//       const resultsSheet = spreadsheet.data.sheets?.find(sheet =>
//         sheet.properties?.title === 'Results'
//       );

//       if (!resultsSheet?.properties?.sheetId) {
//         throw new Error('Could not find Results sheet in the spreadsheet');
//       }

//       const headers = [
//         'Event ID',      // A
//         'Event',         // B
//         'Sport',         // C
//         'Date',          // D
//         'Home Team',     // E
//         'Away Team',     // F
//         'Home Score',    // G
//         'Away Score',    // H
//         'Winner',        // I
//         'Bets Affected', // J
//         'Profit/Loss'    // K
//       ];

//       // Update the Results tab with headers
//       await this.sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range: 'Results!A1',
//         valueInputOption: 'RAW',
//         requestBody: {
//           values: [headers],
//         },
//       });

//       // Add data validation for Winner column
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             setDataValidation: {
//               range: {
//                 sheetId: resultsSheet.properties.sheetId,
//                 startRowIndex: 1,
//                 endRowIndex: 1000,
//                 startColumnIndex: 8, // Winner column (I)
//                 endColumnIndex: 9
//               },
//               rule: {
//                 condition: {
//                   type: 'ONE_OF_LIST',
//                   values: [
//                     { userEnteredValue: 'Home' },
//                     { userEnteredValue: 'Away' },
//                     { userEnteredValue: 'Draw' },
//                     { userEnteredValue: 'Void' }
//                   ]
//                 },
//                 showCustomUi: true,
//                 strict: true
//               }
//             }
//           }]
//         }
//       });

//       // Add header formatting
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             repeatCell: {
//               range: {
//                 sheetId: resultsSheet.properties.sheetId,
//                 startRowIndex: 0,
//                 endRowIndex: 1,
//                 startColumnIndex: 0,
//                 endColumnIndex: headers.length
//               },
//               cell: {
//                 userEnteredFormat: {
//                   backgroundColor: {
//                     red: 0.2,
//                     green: 0.4,
//                     blue: 0.8
//                   },
//                   textFormat: {
//                     bold: true,
//                     foregroundColor: {
//                       red: 1,
//                       green: 1,
//                       blue: 1
//                     }
//                   },
//                   horizontalAlignment: 'CENTER'
//                 }
//               },
//               fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
//             }
//           }]
//         }
//       });

//       // Add conditional formatting for Profit/Loss column
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             addConditionalFormatRule: {
//               rule: {
//                 ranges: [{
//                   sheetId: resultsSheet.properties.sheetId,
//                   startRowIndex: 1,
//                   endRowIndex: 1000,
//                   startColumnIndex: 10, // Profit/Loss column (K)
//                   endColumnIndex: 11
//                 }],
//                 booleanRule: {
//                   condition: {
//                     type: 'NUMBER_GREATER',
//                     values: [{ userEnteredValue: '0' }]
//                   },
//                   format: {
//                     textFormat: {
//                       foregroundColor: { red: 0, green: 0.7, blue: 0 }
//                     }
//                   }
//                 }
//               }
//             }
//           }, {
//             addConditionalFormatRule: {
//               rule: {
//                 ranges: [{
//                   sheetId: resultsSheet.properties.sheetId,
//                   startRowIndex: 1,
//                   endRowIndex: 1000,
//                   startColumnIndex: 10, // Profit/Loss column (K)
//                   endColumnIndex: 11
//                 }],
//                 booleanRule: {
//                   condition: {
//                     type: 'NUMBER_LESS',
//                     values: [{ userEnteredValue: '0' }]
//                   },
//                   format: {
//                     textFormat: {
//                       foregroundColor: { red: 0.7, green: 0, blue: 0 }
//                     }
//                   }
//                 }
//               }
//             }
//           }]
//         }
//       });

//       return headers.length;
//     } catch (error) {
//       throw new Error(`Failed to create Results tab: ${error}`);
//     }
//   }

//   /**
//    * Creates a new Google Sheet and populates it with existing odds data
//    * @returns The created spreadsheet data
//    */
//   async createSheet() {
//     try {
//       // If spreadsheetId is set, check if it exists
//       if (this.spreadsheetId) {
//         const exists = await this.checkSpreadsheetExists(this.spreadsheetId);
//         if (exists) {
//           return {
//             success: true,
//             message: 'Sheet already exists',
//             spreadsheetId: this.spreadsheetId,
//             spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}/edit?usp=sharing`
//           };
//         }
//       }

//       // Create new spreadsheet with three sheets
//       const response = await this.sheets.spreadsheets.create({
//         requestBody: {
//           properties: {
//             title: 'Gambit Sheets'
//           },
//           sheets: [
//             {
//               properties: {
//                 title: 'Odds',
//                 index: 0
//               }
//             },
//             {
//               properties: {
//                 title: 'Bets',
//                 index: 1
//               }
//             },
//             {
//               properties: {
//                 title: 'Results',
//                 index: 2
//               }
//             }
//           ]
//         }
//       });

//       // Set the spreadsheet ID for future operations
//       const spreadsheetId = response.data.spreadsheetId;
//       if (!spreadsheetId) {
//         throw new Error('Failed to get spreadsheet ID from creation response');
//       }
//       this.setSpreadsheetId(spreadsheetId);

//       // Get all events directly from the database
//       const events = await prisma.event.findMany({
//         include: {
//           sport: true,
//           bookmakerEntries: {
//             include: {
//               markets: {
//                 include: {
//                   outcomes: true
//                 }
//               }
//             }
//           }
//         }
//       });

//       // Create each tab
//       const [oddsRows, betsCols, resultsCols] = await Promise.all([
//         this.createOddsTab(events),
//         this.createBetsTab(events?.length ?? 0),
//         this.createResultsTab()
//       ]);

//       return {
//         ...response.data,
//         tabStats: {
//           odds: { rows: oddsRows },
//           bets: { columns: betsCols },
//           results: { columns: resultsCols }
//         }
//       };
//     } catch (error) {
//       throw new Error(`Failed to create and populate sheet: ${error}`);
//     }
//   }

//   async getTokens(code: string) {
//     const { tokens } = await this.auth.getToken(code);
//     this.auth.setCredentials(tokens);
//     return tokens;
//   }

//   async getSheetData(spreadsheetId: string, range: string = 'A1:D10') {
//     try {
//       const response = await this.sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range
//       });
//       return response.data.values;
//     } catch (error) {
//       throw new Error(`Failed to fetch sheet data: ${error}`);
//     }
//   }

//   /**
//    * Updates data in a Google Sheet
//    * @param spreadsheetId The ID of the spreadsheet to update
//    * @param range The range to update (e.g., 'Sheet1!A1:B2')
//    * @param values 2D array of values to update
//    * @returns Response data from the update operation
//    */
//   async updateSheetData(
//     spreadsheetId: string,
//     range: string,
//     values: GoogleSheetsValue[][]
//   ): Promise<GoogleSheetsUpdateResponse> {
//     try {
//       const response = await this.sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range,
//         valueInputOption: 'RAW',
//         requestBody: {
//           values,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(`Failed to update sheet data: ${error}`);
//     }
//   }

//   /**
//    * Pushes odds data to the Odds tab of the spreadsheet
//    * @param events Array of events with their odds data
//    */
//   async pushOddsToSheet(events: (Event & {
//     sport: {
//       group: string;
//     };
//     bookmakerEntries: (BookmakerEntry & {
//       markets: (Market & {
//         outcomes: Outcome[];
//       })[];
//     })[];
//   })[]) {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();
//       // Get spreadsheet metadata to find the Odds sheet ID
//       const spreadsheet = await this.sheets.spreadsheets.get({
//         spreadsheetId
//       });

//       const oddsSheet = spreadsheet.data.sheets?.find(sheet =>
//         sheet.properties?.title === 'Odds'
//       );

//       if (!oddsSheet?.properties?.sheetId) {
//         throw new Error('Could not find Odds sheet in the spreadsheet');
//       }

//       // Prepare headers
//       const headers = [
//         'Event Name',
//         'Sport Name',
//         'Sport Group',
//         'Commence Time',
//         'Home Team',
//         'Away Team',
//         'Bookmaker',
//         'Market Key',
//         'Home Team Price',
//         'Away Team Price'
//       ];

//       // Prepare data rows
//       const rows: OddsRow[] = events.flatMap(event => {
//         return event.bookmakerEntries.flatMap(bookmaker => {
//           return bookmaker.markets.flatMap(market => {
//             // Only process markets with exactly 2 outcomes (like h2h)
//             if (market.outcomes.length !== 2) return [];

//             // Find home and away team outcomes
//             const homeTeamOutcome = market.outcomes.find(o => o.name === event.homeTeam);
//             const awayTeamOutcome = market.outcomes.find(o => o.name === event.awayTeam);

//             if (!homeTeamOutcome || !awayTeamOutcome) return [];

//             return [{
//               eventId: event.id,
//               eventName: `${event.homeTeam} vs ${event.awayTeam}`,
//               sportName: event.sportTitle,
//               sportGroup: event.sport.group,
//               commenceTime: event.commenceTime,
//               homeTeam: event.homeTeam,
//               awayTeam: event.awayTeam,
//               bookmaker: bookmaker.title,
//               marketKey: market.key,
//               homeTeamPrice: homeTeamOutcome.price,
//               awayTeamPrice: awayTeamOutcome.price
//             }];
//           });
//         });
//       });

//       // Convert rows to array format for Google Sheets
//       const values = [
//         headers,
//         ...rows.map(row => [
//           row.eventName,
//           row.sportName,
//           row.sportGroup,
//           row.commenceTime.toISOString(),
//           row.homeTeam,
//           row.awayTeam,
//           row.bookmaker,
//           row.marketKey,
//           row.homeTeamPrice,
//           row.awayTeamPrice
//         ])
//       ];

//       // First, resize the sheet to accommodate the data
//       await this.sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         requestBody: {
//           requests: [{
//             updateSheetProperties: {
//               properties: {
//                 sheetId: oddsSheet.properties.sheetId,
//                 gridProperties: {
//                   rowCount: Math.max(values.length + 1, 1000), // Add some buffer rows
//                   columnCount: 9 // We need 9 columns now
//                 }
//               },
//               fields: 'gridProperties(rowCount,columnCount)'
//             }
//           }]
//         }
//       });

//       // Update the Odds tab
//       const response = await this.sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range: 'Odds!A1', // Use Odds tab
//         valueInputOption: 'RAW',
//         requestBody: {
//           values,
//         },
//       });

//       // Clear any existing data beyond our new data in the Odds tab
//       // Only clear if we have data to clear
//       if (values.length > 0) {
//         const clearRange = `Odds!A${values.length + 1}:I`; // Updated to column I
//         await this.sheets.spreadsheets.values.clear({
//           spreadsheetId,
//           range: clearRange,
//         });
//       }

//       return response.data;
//     } catch (error) {
//       throw new Error(`Failed to push odds to sheet: ${error}`);
//     }
//   }

//   /**
//    * Syncs the current sheet with the latest data from the database
//    * @returns Object containing sync status and details
//    */
//   async syncSheet() {
//     try {
//       const spreadsheetId = this.getSpreadsheetId();
//       if (!spreadsheetId) {
//         throw new Error('Spreadsheet ID is not set');
//       }

//       // Get latest events from database
//       const events = await prisma.event.findMany({
//         include: {
//           sport: true,
//           bookmakerEntries: {
//             include: {
//               markets: {
//                 include: {
//                   outcomes: true
//                 }
//               }
//             }
//           }
//         }
//       });

//       // Update the Odds tab with latest data
//       await this.pushOddsToSheet(events);

//       return {
//         success: true,
//         message: 'Sheet synchronized successfully',
//         spreadsheetId,
//         updatedAt: new Date().toISOString()
//       };
//     } catch (error) {
//       throw new Error(`Failed to sync sheet: ${error instanceof Error ? error.message : 'Unknown error'}`);
//     }
//   }

//   /**
//    * Polls the Bets tab for new bet entries
//    * @param interval Polling interval in milliseconds
//    * @param callback Function to call when new bet is found
//    */
//   async createBetPolling(interval: number = 5000, callback: (bet: BetData) => void) {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();

//       const pollBets = async () => {
//         console.log('Polling bets');
//         // Get all values from Bets tab
//         const response = await this.sheets.spreadsheets.values.get({
//           spreadsheetId,
//           range: 'Bets!A:M'
//         });
//         const values = response.data.values || [];

//         // Get valid bets using the helper function
//         const validBets = this.processBetsRows(values);

//         // Process each valid bet
//         for (const bet of validBets) {
//           await callback(bet);
//         }
//       };

//       // Start polling
//       const pollInterval = setInterval(pollBets, interval);

//       // Return function to stop polling
//       return pollInterval
//     } catch (error) {
//       throw new Error(`Failed to start bet polling: ${error}`);
//     }
//   }

//   async stopBetPolling() {
//     if (this.stopBetPollingID) {
//       clearInterval(this.stopBetPollingID);
//     }
//   }

//   async startBetPolling(interval: number = 10000) {
//     if (this.stopBetPollingID) {
//       clearInterval(this.stopBetPollingID);
//     }
//     this.stopBetPollingID = await this.createBetPolling(interval, this.simulateAndPushResult);
//   }

//   /**
//    * Helper function to process Bets rows and return valid bets with Betted status
//    * @param values Array of rows from the Bets sheet
//    * @returns Array of valid BetData objects
//    */
//   private processBetsRows(values: any[][]): BetData[] {
//     const validBets: BetData[] = [];

//     // Skip header row
//     for (let i = 1; i < values.length; i++) {
//       const row = values[i];
//       if (!row) continue; // Skip empty rows

//       // Skip if status is not Betted
//       if (row[13] !== 'Betted') continue; // Status is in column N (index 13)

//       // Check if this is a valid bet (has event, bet price, and appropriate selection)
//       if (row[1] && row[8]) { // Event and Bet Price
//         const market = row[3] as MarketType; // Market type in column D (index 3)
//         const hasValidSelection =
//           (market === 'totals' && (row[10] === 'Over' || row[10] === 'Under')) || // For totals, need valid totalSelection in column K (index 10)
//           ((market === 'h2h' || market === 'spreads') && (row[9] === 'Home' || row[9] === 'Away')); // For h2h/spreads, need valid selection in column J (index 9)

//         if (!hasValidSelection) continue;

//         const betRow: BetRow = {
//           event: row[1],      // Event in column B (index 1)
//           sport: row[2],      // Sport in column C (index 2)
//           market: market,     // Market in column D (index 3)
//           selection: row[9],  // Select Winner Team in column J (index 9)
//           totalSelection: row[10], // Select For Total bets in column K (index 10)
//           oddsHome: row[4],   // Home Team Odd in column E (index 4)
//           oddsAway: row[5],   // Away Team Odd in column F (index 5)
//           points: row[6],     // Points in column G (index 6)
//           bet: row[8],        // Bet Price in column I (index 8)
//           potentialWin: row[7], // Potential Win in column H (index 7)
//           estimatedProfit: row[11], // Estimated Profit in column L (index 11)
//           impliedWinPercentage: row[12], // Implied Win % in column M (index 12)
//           status: row[13]     // Status in column N (index 13)
//         };

//         const bet: BetData = {
//           ...betRow,
//           eventId: row[0],
//           oddsHome: parseFloat(betRow.oddsHome) || 0,
//           oddsAway: parseFloat(betRow.oddsAway) || 0,
//           points: betRow.points === '-' ? undefined : parseFloat(betRow.points) || undefined,
//           bet: parseFloat(betRow.bet) || 0,
//           potentialWin: parseFloat(betRow.potentialWin) || 0,
//           estimatedProfit: parseFloat(betRow.estimatedProfit) || 0,
//           impliedWinPercentage: parseFloat(betRow.impliedWinPercentage) || 0,
//           status: betRow.status as BetData['status'],
//           totalSelection: betRow.market === 'totals' ? (betRow.totalSelection as TotalSelection) : undefined
//         };

//         validBets.push(bet);
//       }
//     }

//     return validBets;
//   }

//   async checkAllBets() {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();
//       const response = await this.sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range: 'Bets!A:O'  // Include all columns including Profit
//       });
//       const values = response.data.values || [];

//       // Process all bets and get valid ones with Betted status
//       const validBets = this.processBetsRows(values);

//       // Process each valid bet
//       for (const bet of validBets) {
//         await this.simulateAndPushResult(bet);
//       }

//       return {
//         success: true,
//         message: `Processed ${validBets.length} bets`,
//         bets: validBets
//       };
//     } catch (error) {
//       throw new Error(`Failed to check all bets: ${error}`);
//     }
//   }

//   private calculateBetResult(bet: BetData, result: MatchResult): boolean {
//     switch (bet.market) {
//       case 'h2h':
//         return bet.selection === result.winner;

//       case 'spreads':
//         if (!bet.points) return false;
//         const pointDiff = result.homeScore - result.awayScore;
//         if (bet.selection === 'Home') {
//           // Home team with spread
//           return pointDiff > -bet.points;
//         } else {
//           // Away team with spread
//           return pointDiff < bet.points;
//         }

//       case 'totals':
//         if (!bet.points || !bet.totalSelection) return false;
//         const totalScore = result.homeScore + result.awayScore;
//         return bet.totalSelection === 'Over' ? totalScore > bet.points : totalScore < bet.points;

//       default:
//         return false;
//     }
//   }

//   /**
//    * Simulates and pushes results to the Results tab based on bet data
//    * @param bet The bet data to simulate results for
//    */
//   async simulateAndPushResult(bet: BetData) {
//     try {
//       const spreadsheetId = await this.checkSpreadsheetId();
//       const simulationService = new GameResultSimulationService();

//       // Create match odds from bet data
//       const matchOdds: MatchOdds = {
//         homeTeam: bet.event.split(' vs ')[0].trim(),
//         awayTeam: bet.event.split(' vs ')[1].trim(),
//         homeOdds: bet.oddsHome,
//         awayOdds: bet.oddsAway
//       };

//       // Simulate the match result
//       const result = simulationService.simulateMatchResult(matchOdds);

//       // Get the current results
//       const response = await this.sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range: 'Results!A:K'
//       });

//       const values = response.data.values || [];
//       const nextRow = values.length + 1;

//       // Calculate bets affected and profit/loss
//       const betsAffected = 1; // This bet
//       const isWin = this.calculateBetResult(bet, result);
//       const profitLoss = isWin ? bet.potentialWin - bet.bet : -bet.bet;

//       // Prepare the result row
//       const resultRow = [
//         bet.eventId,           // Event ID
//         bet.event,           // Event
//         bet.sport,           // Sport
//         new Date().toISOString(), // Date
//         result.homeTeam,     // Home Team
//         result.awayTeam,     // Away Team
//         result.homeScore,    // Home Score
//         result.awayScore,    // Away Score
//         result.winner,       // Winner
//         betsAffected,        // Bets Affected
//         profitLoss          // Profit/Loss
//       ];

//       // Append the new result
//       await this.sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range: `Results!A${nextRow}`,
//         valueInputOption: 'RAW',
//         requestBody: {
//           values: [resultRow]
//         }
//       });

//       // Update the bet status to Finished
//       const betResponse = await this.sheets.spreadsheets.values.get({
//         spreadsheetId,
//         range: 'Bets!A:M'
//       });

//       const betValues = betResponse.data.values || [];
//       for (let i = 1; i < betValues.length; i++) {
//         const row = betValues[i];
//         if (row && row[1] === bet.event && row[8] === bet.bet.toString() && row[9] === bet.selection) {
//           await this.sheets.spreadsheets.values.update({
//             spreadsheetId,
//             range: `Bets!L${i + 1}`, // Update Status column
//             valueInputOption: 'RAW',
//             requestBody: {
//               values: [['Finished']]
//             }
//           });
//           break;
//         }
//       }

//       return {
//         success: true,
//         message: 'Result simulated and pushed successfully',
//         result,
//         isWin,
//         profitLoss
//       };
//     } catch (error) {
//       throw new Error(`Failed to simulate and push result: ${error}`);
//     }
//   }
// }