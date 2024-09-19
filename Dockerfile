# Etapa 1: Instalación de dependencias
FROM node:alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile
RUN npm outdated --exit 0 || true && npm update --save || true

# Etapa 2: Construcción de la aplicación
FROM deps AS builder
COPY . . 
RUN npm run build

# Etapa 3: Servidor de producción
FROM node:alpine AS runner
WORKDIR /usr/src/app

# Crear un usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copiar artefactos compilados y dependencias necesarias
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exponer puerto y ejecutar en producción
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]