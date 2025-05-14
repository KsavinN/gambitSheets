import { ExpressServer, createApiResponse } from '@gambitsheets/common';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { SportsService } from './services/sports.service';
import prisma from './db';

dotenv.config();

const port = parseInt(process.env.PORT || '3001', 10);
const server = new ExpressServer({
  port,
  serviceName: 'odds-service'
});

const app = server.getApp();

app.get('/sync-sports', async (_req: Request, res: Response) => {
  const sportsService = SportsService.getInstance();
  await sportsService.syncSportsWithDb();
  res.json(createApiResponse({ message: 'Sports synced successfully' }));
});


app.get('/sports', async (_req: Request, res: Response) => {
  try {
    const sports = await prisma.sport.findMany();
    res.json(createApiResponse(sports));
  } catch (error) {
    console.error("Failed to fetch sports from DB", error);
    res.status(500).json({ error: 'Failed to fetch sports from database' });
  }
});

server.start(); 