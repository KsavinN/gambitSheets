import axios from 'axios';
import { Sport, SportsResponse } from '../types/sports';
import dotenv from 'dotenv';
import prisma from '../db'; // Import Prisma client

dotenv.config();

const API_BASE_URL = 'https://api.the-odds-api.com/v4';
const API_KEY = process.env.ODDS_API_KEY;

if (!API_KEY) {
  throw new Error('ODDS_API_KEY environment variable is required');
}

export class SportsService {
  private static instance: SportsService;
  private apiKey: string;

  private constructor() {
    this.apiKey = API_KEY as string;
  }

  public static getInstance(): SportsService {
    if (!SportsService.instance) {
      SportsService.instance = new SportsService();
    }
    return SportsService.instance;
  }

  async getSports(): Promise<Sport[]> {
    try {
      const response = await axios.get<SportsResponse>(`${API_BASE_URL}/sports`, {
        params: {
          apiKey: this.apiKey
        }
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to fetch sports: ${error.message}`);
      }
      throw error;
    }
  }

  async syncSportsWithDb(): Promise<void> {
    try {
      const sportsFromApi = await this.getSports();

      if (!sportsFromApi || sportsFromApi.length === 0) {
        console.log('No sports fetched from API to sync.');
        return;
      }

      for (const sport of sportsFromApi) {
        await prisma.sport.upsert({
          where: { key: sport.key }, // Unique identifier
          update: { // Fields to update if sport exists
            active: sport.active,
            group: sport.group,
            description: sport.description,
            title: sport.title,
            hasOutrights: sport.has_outrights, // Ensure field name matches schema
          },
          create: { // Fields to create if sport doesn't exist
            key: sport.key,
            active: sport.active,
            group: sport.group,
            description: sport.description,
            title: sport.title,
            hasOutrights: sport.has_outrights, // Ensure field name matches schema
          },
        });
      }
      console.log('Sports have been successfully synced with the database.');
    } catch (error) {
      console.error('Error syncing sports with database:', error);
      throw new Error('Failed to sync sports with database.');
    }
  }
}





