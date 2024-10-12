# Etapa 1: Instalación de dependencias y construcción de la aplicación
FROM node:20.4-alpine AS builder
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias de desarrollo y producción
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servidor de producción
FROM node:20.4-alpine AS runner
WORKDIR /app

# Copiar archivos de la etapa de construcción
COPY --from=builder /app/package.json ./ 
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Instalar solo las dependencias de producción y limpiar la caché
RUN npm ci --omit=dev && npm cache clean --force

# Copiar el script de despliegue
COPY --from=builder /app/deploy.sh ./deploy.sh

# Asegurarse de que el script sea ejecutable y ejecutar Prisma generate en el contenedor de producción
RUN chmod 700 deploy.sh && npx prisma generate --schema ./prisma/schema.prisma

CMD ["./deploy.sh"]