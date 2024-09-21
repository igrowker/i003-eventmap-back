# Etapa 1: Instalación de dependencias
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile

# Check for outdated dependencies
# Use npm outdated with --exit 0 to avoid failure on non-zero exit code
RUN npm outdated --exit 0 || true

# Update dependencies
RUN npm update --save || true

# Etapa 2: Construcción de la aplicación
FROM deps AS builder
COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma && npm run build

# Etapa 3: Servidor de producción
FROM node:alpine AS runner
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=builder /app .
CMD [ "npm", "start" ]