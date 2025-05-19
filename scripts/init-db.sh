#!/bin/sh
set -e

echo "Waiting for database to be ready..."
MAX_RETRIES=30
RETRIES=0

# Wait for database connection
until pg_isready -h postgres -U gambit_user -d gambit_sheets || [ $RETRIES -eq $MAX_RETRIES ]; do
  echo "Waiting for database connection... ($(($MAX_RETRIES-$RETRIES)) attempts left)"
  RETRIES=$((RETRIES+1))
  sleep 2
done

if [ $RETRIES -eq $MAX_RETRIES ]; then
  echo "Could not connect to database after $MAX_RETRIES attempts. Exiting."
  exit 1
fi

echo "Database connection successful!"

# Check if migrations exist
if [ -d "/app/prisma/migrations" ] && [ "$(ls -A /app/prisma/migrations)" ]; then
  echo "Running migrations..."
  npx prisma migrate deploy
else
  echo "No migrations found. Creating initial migration..."
  npx prisma db push
fi

# Generate Prisma client
echo "Generating Prisma client..."
npx prisma generate

echo "Database initialization complete!"