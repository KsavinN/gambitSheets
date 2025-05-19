# GambitSheets

A service that tracks sports odds and integrates with Google Sheets for betting analysis.

## Features

- Real-time sports odds tracking
- Google Sheets integration for data analysis
- Automatic odds synchronization
- RESTful API for odds and betting data

## Tech Stack

- Node.js with TypeScript
- Express.js for API
- PostgreSQL with Prisma ORM
- Google Sheets API
- Docker for containerization

## Fast Setup with Docker

The quickest way to get started is using Docker. You only need to set up your `.env` file:

1. Copy `.env.example` to `.env` and fill in your values:

   - `DATABASE_URL`: Your PostgreSQL connection string
   - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret
   - `GOOGLE_REDIRECT_URI`: OAuth callback URL
   - `ODDS_API_KEY`: Your API key for the odds provider
   - `SPREADSHEET_ID`: Your Google Spreadsheet ID

2. Run with Docker:

```bash
docker build -t gambitsheets .
docker run -p 3000:3000 --env-file .env gambitsheets
```

That's it! The service will be available at http://localhost:3000

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Update the values according to your environment:
     - `DATABASE_URL`: PostgreSQL connection string (e.g., "postgresql://gambit_user:gambit_password@localhost:5432/gambit_sheets")
     - `GOOGLE_SHEETS_CREDENTIALS`: Google service account credentials
     - `SPREADSHEET_ID`: Your Google Spreadsheet ID
     - `PORT`: Server port (default: 3000)
     - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
     - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret
     - `GOOGLE_REDIRECT_URI`: OAuth callback URL (e.g., "http://localhost:3000/oauth2callback")
     - `ODDS_API_KEY`: Your API key for the odds provider

3. Database setup:

   - Create a PostgreSQL database
   - Update the DATABASE_URL in the .env file
   - Generate Prisma client:
     ```bash
     pnpm prisma generate
     ```

4. Start development:

```bash
pnpm dev
```

## How to Use

### Initial Setup

1. When you first start the application, it will automatically:

   - Check if the database is empty
   - If empty, sync with the Odds API to populate sports and events data
   - Create necessary database tables and relationships

2. Access the application:
   - Open http://localhost:3000 in your browser
   - You'll be redirected to Google login
   - After authentication, a new Google Sheet will be automatically created for you

### Application Interface

The application has three main tabs:

1. **Events Tab** (Read-only)

   - View all available sports events
   - See event details, teams, and schedules
   - Filter and search through events

2. **Odds Tab** (Interactive)

   - Select bet prices and outcomes
   - Choose winners and bet amounts
   - Mark bets as "Betted" to prepare for simulation
   - Track your betting selections

3. **Results Tab**
   - View simulation results
   - See betting outcomes and performance
   - Analyze betting strategies

### Running Simulations

You can run simulations in two ways:

1. **Manual Simulation**

   - Use the endpoint: `GET /google/check-all-bets`
   - This will run a one-time simulation of all marked bets

2. **Automatic Polling**
   - Start the polling service: `GET /google/start-bet-polling`
   - This will check for changes every 10 seconds
   - Automatically calculates and simulates games when changes are detected
   - Updates results in real-time

## API Endpoints

### Odds

- `GET /odds/sports` - Get all available sports
- `GET /odds/events` - Get all events
- `GET /odds/sync-events` - Manually trigger events sync

### Google Sheets

- `GET /google/sheets` - Get sheets data
- `POST /google/sheets/sync` - Sync data with Google Sheets
- `GET /google/check-all-bets` - Run one-time simulation
- `GET /google/start-bet-polling` - Start automatic polling

### Health

- `GET /health` - Check service health

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting
- `pnpm format` - Format code

## Docker

Build and run with Docker:

```bash
docker build -t gambitsheets .
docker run -p 3000:3000 gambitsheets
```

## Environment Variables

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string (e.g., "postgresql://gambit_user:gambit_password@localhost:5432/gambit_sheets")
- `GOOGLE_SHEETS_CREDENTIALS`: Google service account credentials
- `SPREADSHEET_ID`: Google Spreadsheet ID
- `PORT`: Server port (default: 3000)
- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret
- `GOOGLE_REDIRECT_URI`: OAuth callback URL (e.g., "http://localhost:3000/oauth2callback")
- `ODDS_API_KEY`: Your API key for the odds provider

Optional environment variables:

- `NODE_ENV`: Environment (development/production)
- `LOG_LEVEL`: Logging level (debug/info/warn/error)
