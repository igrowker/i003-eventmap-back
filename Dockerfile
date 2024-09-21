# Etapa 1: Instalación de dependencias
FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./

# Install and update dependencies
RUN npm ci --frozen-lockfile && npm outdated --exit 0 || true && npm update --save || true

# Etapa 2: Construcción de la aplicación
FROM deps AS builder
COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma && npm run build

# Etapa 3: Servidor de producción
FROM node:16-alpine AS runner
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=builder /app ./
CMD [ "npm", "start" ]