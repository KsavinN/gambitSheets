import { ExpressServer, createApiResponse } from '@gambitsheets/common';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { SportsService } from './services/sports.service';
import { EventService } from './services/event.service';
import { GetEventsOptions } from './api/oddsAPI';
import { GoogleSheetService } from './api/googleSheetService';

dotenv.config();

const port = parseInt(process.env.PORT || '3001', 10);
const server = new ExpressServer({
  port,
  serviceName: 'odds-service'
});

const app = server.getApp();

const sportsService = SportsService.getInstance();
const eventService = EventService.getInstance();
const googleSheetService = GoogleSheetService.getInstance();

async function syncGoogleSheet() {
  try {
    await googleSheetService.syncSheet();
    console.log('Google Sheet synced successfully');
  } catch (error) {
    console.error('Failed to sync Google Sheet:', error);
  }
}

app.get('/sync-sports', async (_req: Request, res: Response) => {
  await sportsService.syncSportsWithDb();
  await syncGoogleSheet();
  res.json(createApiResponse({ message: 'Sports synced successfully' }));
});

app.get('/sports', async (_req: Request, res: Response) => {
  try {
    const sports = await sportsService.getSportsFromDb();
    res.json(createApiResponse(sports));
  } catch (error) {
    console.error("Failed to fetch sports from DB", error);
    res.status(500).json({ error: 'Failed to fetch sports from database' });
  }
});

app.get('/sync-events', async (_req: Request, res: Response) => {
  try {
    const sports = await sportsService.getSportsFromDb();
    const activeSports = sports.filter(sport => sport.active);

    for (const sport of activeSports) {
      try {
        const options: GetEventsOptions = {
          markets: 'h2h,spreads',
          regions: 'us',
          commenceTimeFrom: new Date().toISOString().slice(0, 19) + 'Z',
          commenceTimeTo: new Date(new Date().getFullYear(), 11, 31).toISOString().slice(0, 19) + 'Z'
        }
        await eventService.syncEventsWithDb(sport.key, options);
        console.log(`Successfully synced events for sport: ${sport.key}`);
      } catch (error) {
        console.error(`Error syncing events for sport ${sport.key}:`, error);
        // Continue with next sport even if one fails
      }
    }

    // Sync Google Sheet after all sports are synced
    await syncGoogleSheet();

    res.json(createApiResponse({
      message: 'Event sync completed for all active sports',
      syncedSports: activeSports.map(s => s.key)
    }));
  } catch (error) {
    console.error('Error during full event sync:', error);
    res.status(500).json({ error: 'Failed to complete full event sync' });
  }
});

app.get('/sync-events/:sportKey', async (req: Request, res: Response) => {
  try {
    const { sportKey } = req.params;
    const options: GetEventsOptions = {
      commenceTimeFrom: new Date().toISOString().slice(0, 19) + 'Z',
      commenceTimeTo: new Date(new Date().getFullYear(), 11, 31).toISOString().slice(0, 19) + 'Z'
    }
    await eventService.syncEventsWithDb(sportKey, options);

    // Sync Google Sheet after the sport is synced
    await syncGoogleSheet();

    res.json(createApiResponse({ message: `Event sync initiated for sport: ${sportKey}` }));
  } catch (error) {
    console.error(`Error triggering event sync for ${req.params.sportKey}`, error);
    res.status(500).json({ error: `Failed to trigger event sync for ${req.params.sportKey}` });
  }
});

app.get('/events/:sportKey', async (req: Request, res: Response) => {
  try {
    const { sportKey } = req.params;
    const events = await eventService.getEventsBySportKey(sportKey);
    res.json(createApiResponse(events));
  } catch (error) {
    console.error(`Error fetching events for ${req.params.sportKey}`, error);
    res.status(500).json({ error: `Failed to fetch events for ${req.params.sportKey}` });
  }
});

app.get('/events', async (_req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(createApiResponse(events));
  } catch (error) {
    console.error('Error fetching all events', error);
    res.status(500).json({ error: 'Failed to fetch all events' });
  }
});

server.start(); 