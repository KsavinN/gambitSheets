import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { createApiResponse } from './index';

export interface ServerConfig {
  port: number;
  serviceName: string;
}

export class ExpressServer {
  private app: Express;
  private port: number;
  private serviceName: string;

  constructor(config: ServerConfig) {
    this.app = express();
    this.port = config.port;
    this.serviceName = config.serviceName;

    this.setupMiddleware();
    this.setupHealthCheck();
  }

  private setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private setupHealthCheck() {
    this.app.get('/health', (_req: Request, res: Response) => {
      res.json(createApiResponse({ status: 'ok', service: this.serviceName }));
    });
  }

  public getApp(): Express {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`${this.serviceName} running on port ${this.port}`);
    });
  }
} 