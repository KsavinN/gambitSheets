import express, { Request, Response } from 'express';
import cors from 'cors';
import { createApiResponse } from './types/response';
import dotenv from 'dotenv';


dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  serviceName: 'Gambit Sheets API'
}

const app = express();

// Setup middleware
app.use(cors());
app.use(express.json());

// Setup health check
app.get('/health', (_req: Request, res: Response) => {
  res.json(createApiResponse({ status: 'ok', service: config.serviceName }));
});



app.listen(config.port, () => {
  console.log(`${config.serviceName} running on port ${config.port}`);
});

