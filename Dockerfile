# --- Base ---
FROM node:24-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# --- Development env ---
FROM base AS development
ARG ENVIRONMENT=development
ENV NODE_ENV=${ENVIRONMENT}
EXPOSE 3000
CMD ["npm", "run", "dev"]

# --- Production build ---
FROM base AS build
ARG ENVIRONMENT=production
ENV NODE_ENV=${ENVIRONMENT}
RUN npm run build

# --- Production env ---
FROM node:24-alpine AS production
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]