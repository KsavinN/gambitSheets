import { ExpressServer } from '@gambitsheets/common';
import dotenv from 'dotenv';
import { GoogleSheetsClient } from './services/googleSheet.service';
import { Request, Response, RequestHandler } from 'express';
import { prisma } from '@gambitsheets/database';

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

app.get('/hello', (req: Request, res: Response) => {
  console.log('Hello World');
  res.json({ message: 'Hello World' });
});

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

    // Create a new sheet after successful authentication
    const sheet = await googleSheetsClient.createSheet();
    if (sheet.spreadsheetId) {
      sessionStore['sheet'] = sheet.spreadsheetId;
    }

    if (sheet.spreadsheetUrl) {
      if (process.env.WITH_BET_POLLING === 'true') {
        await googleSheetsClient.startBetPolling();
      }
      res.redirect(sheet.spreadsheetUrl);
    } else {
      res.status(500).json({ error: 'Failed to create sheet' });
    }
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
    res.status(400).json({ error: 'Spreadsheet ID is required' });
    return;
  }

  if (!sessionStore['access_token']) {
    res.status(401).json({ error: 'No active session. Please authenticate first.' });
    return;
  }

  try {
    // Set the spreadsheet ID in the client
    googleSheetsClient.setSpreadsheetId(spreadsheetId);

    // Get data from all three tabs
    const [oddsData, betsData, resultsData] = await Promise.all([
      googleSheetsClient.getSheetData(spreadsheetId, 'Odds!A1:H'),
      googleSheetsClient.getSheetData(spreadsheetId, 'Bets!A1:A'),
      googleSheetsClient.getSheetData(spreadsheetId, 'Results!A1:A')
    ]);

    res.json({
      odds: oddsData,
      bets: betsData,
      results: resultsData
    });
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    res.status(500).json({ error: 'Failed to fetch sheet data' });
  }
});

// Endpoint to sync sheet with latest database data
app.get('/sheets-sync', async (req: Request, res: Response) => {
  if (!sessionStore['access_token']) {
    res.status(401).json({ error: 'No active session. Please authenticate first.' });
    return;
  }

  try {
    const result = await googleSheetsClient.syncSheet();
    res.json(result);
  } catch (error) {
    console.error('Error syncing sheet:', error);
    res.status(500).json({
      error: 'Failed to sync sheet',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
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

app.get('/stop-bet-polling', async (req: Request, res: Response) => {
  await googleSheetsClient.stopBetPolling();
  res.json({ message: 'Bet polling stopped' });
});

app.get('/start-bet-polling', async (req: Request, res: Response) => {
  await googleSheetsClient.startBetPolling();
  res.json({ message: 'Bet polling started' });
});


app.get('/check-all-bets', async (req: Request, res: Response) => {
  await googleSheetsClient.checkAllBets();
  res.json({ message: 'All bets checked' });
});

server.start();