#!/bin/sh
set -e

# Wait for database and run migrations
/app/scripts/init-db.sh

# Build the application
echo "Building the application..."
pnpm build

# Start the application
echo "Starting the application..."
exec pnpm start