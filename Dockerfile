# Etapa 1: Instalación de dependencias
FROM node:alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile
RUN npm outdated --exit 0 || true && npm update --save || true

# Etapa 2: Construcción de la aplicación
FROM deps AS builder
COPY . . 
RUN npx prisma generate
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

# Establecer la variable de entorno para el modo
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Exponer puerto y ejecutar en producción o desarrollo
EXPOSE 3000
# Ejecutar el script adecuado dependiendo del entorno
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm run start; fi"]