FROM node:20-alpine

# Install pnpm and PostgreSQL client
RUN corepack enable && corepack prepare pnpm@10.10.0 --activate && \
    apk add --no-cache openssl3 postgresql-client

WORKDIR /app

# Copy Prisma schema first
COPY prisma ./prisma/

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy initialization scripts
COPY scripts/init-db.sh ./scripts/
COPY start.sh ./
RUN chmod 755 ./scripts/init-db.sh ./start.sh

# Copy the rest of the application
COPY . .

# Build the application with increased memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Use the start script
CMD ["/bin/sh", "./start.sh"]