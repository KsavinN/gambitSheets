import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export class GoogleSheetsClient {
  private auth: OAuth2Client;
  private sheets;


  scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  constructor() {
    console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);
    this.auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URL
    );


    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
  }

  getAuthUrl(): string {
    return this.auth.generateAuthUrl({
      access_type: 'offline',
      scope: this.scopes
    });
  }

  async createSheet() {
    const response = await this.sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title: 'My Gaming Odds'
        }
      }
    });
    return response.data;
  }



  async getTokens(code: string) {
    const { tokens } = await this.auth.getToken(code);
    this.auth.setCredentials(tokens);
    return tokens;
  }

  async getSheetData(spreadsheetId: string) {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'A1:D10'
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
} 