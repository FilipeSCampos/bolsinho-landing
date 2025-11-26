# Multi-stage Dockerfile for bolsinho-landing
# Builder stage: install deps and build both client and server
FROM node:20-slim AS builder

WORKDIR /app

# Install pnpm matching project expectations
RUN npm install -g pnpm@10

# Copy lockfile and package manifest first for better layer caching
COPY package.json pnpm-lock.yaml ./
# Include patches folder (pnpm patchedDependencies uses this)
COPY patches ./patches

# Install all dependencies (dev deps needed for build)
RUN pnpm install --frozen-lockfile

# Copy the rest of the source and build
COPY . .
RUN pnpm run build


# Runtime image: only production files + node_modules
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built server & static files
COPY --from=builder /app/dist ./dist
# Copy node_modules from builder so external deps are available
COPY --from=builder /app/node_modules ./node_modules
# Copy package.json for metadata
COPY --from=builder /app/package.json ./package.json

# Expose the port the server listens on (default 3000)
EXPOSE 3000

# Use a non-root user for best practice (optional)
# RUN addgroup --system app && adduser --system --ingroup app app
# USER app

CMD ["node", "dist/index.js"]
