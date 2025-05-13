# GambitSheets

A monorepo containing microservices for odds tracking and betting integration with Google Sheets.

## Project Structure

```
├── services/
│   ├── odds-service/
│   ├── betting-service/
│   └── sheets-integration/
├── packages/
│   ├── common/
│   ├── db/
│   └── google-api-client/
```

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env` in each service and package directory
   - Update the values according to your environment

3. Database setup:
   - Create a PostgreSQL database
   - Copy `packages/db/.env.example` to `packages/db/.env`
   - Update the DATABASE_URL in the .env file
   - Generate Prisma client:
     ```bash
     pnpm prisma:generate
     ```

4. Start development:
```bash
pnpm dev
```

## Services

### Odds Service (Port 3001)
- Handles odds fetching and processing

### Betting Service (Port 3002)
- Manages betting operations

### Sheets Integration (Port 3003)
- Integrates with Google Sheets

## Development

- `pnpm dev` - Start all services in development mode
- `pnpm build` - Build all packages and services
- `pnpm lint` - Run linting
- `pnpm format` - Format code
