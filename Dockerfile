# Etapa 1: Instalación de dependencias y construcción de la aplicación
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar los archivos de Prisma
COPY package.json package-lock.json ./
COPY ./prisma ./prisma

# Instalar dependencias
RUN npm ci --frozen-lockfile

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servidor de producción
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar archivos de la etapa de construcción
COPY --from=builder /app/package.json ./ 
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Ejecutar Prisma generate en el contenedor de producción
RUN npx prisma generate --schema ./prisma/schema.prisma

RUN chmod 755 deploy.sh

CMD ["./deploy.sh"]