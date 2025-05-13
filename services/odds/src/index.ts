import { ExpressServer, createApiResponse } from '@gambitsheets/common';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { SportsService } from './services/sports.service';

dotenv.config();

const port = parseInt(process.env.PORT || '3001', 10);
const server = new ExpressServer({
  port,
  serviceName: 'odds-service'
});

const app = server.getApp();

// Get sports endpoint
app.get('/sports', async (_req: Request, res: Response) => {
  try {
    const sportsService = SportsService.getInstance();
    const sports = await sportsService.getSports();
    res.json(createApiResponse(sports));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sports' });
  }
});

server.start(); 