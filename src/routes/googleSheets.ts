import { Router, Request, Response, RequestHandler } from 'express';
import { GoogleSheetsClient } from '../services/googleSheets-integration/googleSheet.service';

const router = Router();
const googleSheetsClient = new GoogleSheetsClient();

// Simple in-memory session storage
const sessionStore: { [key: string]: string } = {};

// Endpoint to start OAuth flow
router.get('/auth', (req: Request, res: Response) => {
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
    if (tokens.access_token) {
      sessionStore['access_token'] = tokens.access_token;
    }

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

router.get('/oauth2callback', oauthCallback);

router.get('/create-sheet', async (req: Request, res: Response) => {
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

router.get('/sheets/:spreadsheetId', async (req: Request, res: Response) => {
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
    googleSheetsClient.setSpreadsheetId(spreadsheetId);
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

router.get('/sheets-sync', async (req: Request, res: Response) => {
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

router.get('/session/token', (req: Request, res: Response) => {
  const token = sessionStore['access_token'];
  if (!token) {
    res.status(401).json({ error: 'No active session' });
    return;
  }
  res.json({ access_token: token });
});

router.get('/stop-bet-polling', async (req: Request, res: Response) => {
  await googleSheetsClient.stopBetPolling();
  console.log('Bet polling stopped');
  res.json({ message: 'Bet polling stopped' });
});

router.get('/start-bet-polling', async (req: Request, res: Response) => {
  await googleSheetsClient.startBetPolling();
  console.log('Bet polling started');
  res.json({ message: 'Bet polling started' });
});

router.get('/check-all-bets', async (req: Request, res: Response) => {
  await googleSheetsClient.checkAllBets();
  res.json({ message: 'All bets checked' });
});

export default router; 