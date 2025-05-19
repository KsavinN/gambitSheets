FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

WORKDIR /app

# Install OpenSSL 3.0.x
RUN apk add --no-cache openssl3


# Copy Prisma schema first
COPY prisma ./prisma/

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install


# Copy the rest of the application
COPY . .

# Build the application with increased memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"] 