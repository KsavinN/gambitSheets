import axios from 'axios';
import { Sport, SportsResponse } from '../types/sports';
import dotenv from 'dotenv';

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
} 