import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import oddsRouter from './routes/odds';
import googleSheetsRouter from './routes/googleSheets';
import { SportsService } from './services/odds/sports.service';
import { EventService } from './services/odds/event.service';
import { prisma } from './database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/odds', oddsRouter);
app.use('/google', googleSheetsRouter);


app.get('/', (_req, res) => {
  res.redirect('/google/auth');
});

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Gambit Sheets API' });
});

// Initialize database and sync data
async function initializeDatabase() {
  try {
    // Check if we have any sports in the database
    const sportsCount = await prisma.sport.count();
    const eventsCount = await prisma.event.count();

    console.log(`Current database state - Sports: ${sportsCount}, Events: ${eventsCount}`);

    if (sportsCount === 0) {
      console.log('No sports found in database. Starting initial sync...');
      const sportsService = SportsService.getInstance();
      await sportsService.syncSportsWithDb();
    }

    if (eventsCount === 0) {
      console.log('No events found in database. Starting initial sync...');
      const eventService = EventService.getInstance();
      const sports = await prisma.sport.findMany({ where: { active: true } });

      for (const sport of sports) {
        const options = {
          markets: 'h2h,spreads',
          regions: 'us',
          commenceTimeFrom: new Date().toISOString().slice(0, 19) + 'Z',
          commenceTimeTo: new Date(new Date().getFullYear(), 11, 31).toISOString().slice(0, 19) + 'Z'
        };
        await eventService.syncEventsWithDb(sport.key, options);
        console.log(`Synced events for sport: ${sport.key}`);
      }
    }

    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error during database initialization:', error);
    throw error;
  }
}

// Start server
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await initializeDatabase();
});

