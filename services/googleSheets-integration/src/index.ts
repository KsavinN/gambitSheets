import { ExpressServer } from '@gambitsheets/common';
import dotenv from 'dotenv';
import { GoogleSheetsClient } from './services';
import { Request, Response, RequestHandler } from 'express';


dotenv.config();

// Simple in-memory session storage
const sessionStore: { [key: string]: string } = {};

const server = new ExpressServer({
  port: parseInt(process.env.PORT || '3002'),
  serviceName: 'google-sheets-integration-service'
});

// Initialize Google Sheets client with credentials from env
const googleSheetsClient = new GoogleSheetsClient();

// Get the Express app instance
const app = server.getApp();

// Endpoint to start OAuth flow
app.get('/auth/google', (req: Request, res: Response) => {
  const authUrl = googleSheetsClient.getAuthUrl();
  res.redirect(authUrl);
});

// OAuth callback endpoint
const oauthCallback: RequestHandler = async (req, res, next) => {
  const { code } = req.query;

  if (!code) {
    res.status(400).json({ error: 'Authorization code is required' });
    return;
  }

  try {
    const tokens = await googleSheetsClient.getTokens(code as string);
    // Store access token in session
    if (tokens.access_token) {
      sessionStore['access_token'] = tokens.access_token;
    }

    res.send('Authentication successful! You can close this window and return to the application.');
  } catch (error) {
    next(error);
  }
};

app.get('/oauth2callback', oauthCallback);


app.get('/create-sheet', async (req: Request, res: Response) => {
  const sheet = await googleSheetsClient.createSheet();
  if (sheet.spreadsheetUrl) {
    if (sheet.spreadsheetId) {
      sessionStore['sheet'] = sheet.spreadsheetId;
    }
    res.redirect(sheet.spreadsheetUrl);
  } else {
    res.status(500).json({ error: 'Failed to create sheet' });
  }

});

app.get('/sheets/:spreadsheetId', async (req: Request, res: Response) => {
  const { spreadsheetId } = req.params;

  if (!spreadsheetId) {
    res.status(400).json({ error: 'Spreadsheet ID and range are required' });
    return;
  }

  if (!sessionStore['access_token']) {
    res.status(401).json({ error: 'No active session. Please authenticate first.' });
    return;
  }

  try {
    const data = await googleSheetsClient.getSheetData(spreadsheetId);
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch sheet data' });
  }
});


// Endpoint to get current session token
app.get('/session/token', (req: Request, res: Response) => {
  const token = sessionStore['access_token'];
  if (!token) {
    res.status(401).json({ error: 'No active session' });
    return;
  }
  res.json({ access_token: token });
});

server.start();