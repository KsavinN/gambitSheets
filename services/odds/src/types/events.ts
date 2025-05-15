export interface Outcome {
  name: string;
  price: number;
  bet_limit?: number;
}

export interface Market {
  key: string;
  last_update: string; // Consider converting to DateTime object
  outcomes: Outcome[];
  link?: string;
  sid?: string;
}

export interface Bookmaker {
  key: string;
  title: string;
  last_update: string; // Consider converting to DateTime object
  markets: Market[];
  link?: string;
  sid?: string;
}

export interface EventFromApi {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string; // Consider converting to DateTime object
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
}

export interface Event {
  id: string;
  sportKey: string;
  sportTitle: string;
  commenceTime: Date;
  homeTeam: string;
  awayTeam: string;
}


// The API likely returns an array of events
export type EventsApiResponse = EventFromApi[]; 