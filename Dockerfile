# Stage 1: Install dependencies and build the app
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Run the app with a smaller image
FROM builder AS runner

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port on which the app runs
EXPOSE 3000

# Set environment variables (optional)
ENV NODE_ENV=production

# Run the app
CMD ["yarn", "start"]
