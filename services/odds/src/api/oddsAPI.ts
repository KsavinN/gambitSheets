import axios, { AxiosInstance } from "axios";
import { EventFromApi, EventsApiResponse } from "src/types/events";
import { Sport, SportsResponse } from "src/types/sports";
import dotenv from 'dotenv';


dotenv.config();


const API_BASE_URL = 'https://api.the-odds-api.com/v4';
const API_KEY = process.env.ODDS_API_KEY;

if (!API_KEY) {
  throw new Error('ODDS_API_KEY environment variable is required for oddsAPI');
}

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export async function getSports(): Promise<Sport[]> {
  try {
    const response = await apiClient.get<SportsResponse>("/sports");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch sports: ${error.message}`);
    }
    throw error;
  }
}

// Interface for the optional query parameters for getEventsBySportKey
export interface GetEventsOptions {
  regions?: string;        // Default: 'us' (as per our previous setting, API doc doesn't specify a strict default but 'us' is an example)
  markets?: string;        // Default: 'h2h'
  dateFormat?: 'iso' | 'unix'; // Default: 'iso'
  oddsFormat?: 'decimal' | 'american'; // Default: 'decimal'
  eventIds?: string;       // Comma-separated string
  bookmakers?: string;     // Comma-separated string
  commenceTimeFrom?: string; // ISO8601 string
  commenceTimeTo?: string;   // ISO8601 string
  includeLinks?: boolean;  // Default: false
  includeSids?: boolean;   // Default: false
  includeBetLimits?: boolean; // Default: false
}

/**
  * Fetches events (including odds) for a specific sport_key from The Odds API.
  * @param sportKey The key of the sport (e.g., 'americanfootball_nfl')
  * @param options Optional parameters for the API call.
  * @returns A promise that resolves to an array of events.
  */
export async function getEventsBySportKey(
  sportKey: string,
  options: GetEventsOptions = {}
): Promise<EventFromApi[]> {
  try {
    // Prepare params, applying defaults if not provided in options
    const params = {
      regions: options.regions || 'us',
      markets: options.markets || 'h2h',
      dateFormat: options.dateFormat || 'iso',
      oddsFormat: options.oddsFormat || 'decimal',
      ...(options.eventIds && { eventIds: options.eventIds }),
      ...(options.bookmakers && { bookmakers: options.bookmakers }),
      ...(options.commenceTimeFrom && { commenceTimeFrom: options.commenceTimeFrom }),
      ...(options.commenceTimeTo && { commenceTimeTo: options.commenceTimeTo }),
      ...(options.includeLinks !== undefined && { includeLinks: options.includeLinks }),
      ...(options.includeSids !== undefined && { includeSids: options.includeSids }),
      ...(options.includeBetLimits !== undefined && { includeBetLimits: options.includeBetLimits }),
    };

    const response = await apiClient.get<EventsApiResponse>(
      `/sports/${sportKey}/odds`,
      { params } // Pass the constructed params object
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        `Failed to fetch events for sport ${sportKey}: ${error.message}`,
        error.response?.data
      );
      throw new Error(
        `Failed to fetch events for sport ${sportKey}: ${error.message}`
      );
    }
    console.error(
      `An unexpected error occurred while fetching events for sport ${sportKey}:`,
      error
    );
    throw error;
  }
}