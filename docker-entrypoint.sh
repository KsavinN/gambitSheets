#!/bin/sh
set -e

# Run database initialization script
echo "Running database initialization..."
sh /app/scripts/init-db.sh

# Start the application
echo "Starting application..."
exec "$@"