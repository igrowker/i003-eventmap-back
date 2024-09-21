# Etapa 1: Instalación de dependencias
FROM node:20-alpine AS deps
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias e instalación de dependencias
COPY package*.json ./ 
COPY prisma ./prisma
RUN npm ci && npm install @prisma/client
RUN npm outdated --exit 0 || true && npm update --save || true

# Etapa 2: Construcción de la aplicación
FROM deps AS builder
COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma && npm run build

# Etapa 3: Servidor de producción
FROM node:20-alpine AS runner
WORKDIR /app

# Crear un usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copiar artefactos compilados y dependencias necesarias
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Exponer puerto y ejecutar en producción o desarrollo
EXPOSE 3000
CMD ["npm", "run", "start"]