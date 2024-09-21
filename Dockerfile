
# Etapa 1: Instalación de dependencias
FROM node:alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Etapa 2: Construcción de la aplicación
FROM deps AS builder
WORKDIR /app
COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma && npm run build

# Etapa 3: Servidor de producción
FROM node:alpine AS runner
WORKDIR /usr/src/app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
RUN npm ci --omit=dev

# Crear un usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["npm", "run", "start"]