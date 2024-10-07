![EventMap](https://i.ibb.co/0ZrrLLc/Captura-de-pantalla-2024-10-04-090452.png)

## Tecnologías utilizadas

<div style="text-align: center; padding: 20px;">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" style="margin: 10px;">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" style="margin: 10px;">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" style="margin: 10px;">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens" alt="JWT" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Nodemailer-0072C6?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" style="margin: 10px;">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" style="margin: 10px;">
  <img src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script" style="margin: 10px;">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" style="margin: 10px;">
</div>



## Problema que se Intenta Resolver en EventMap (Proyecto BackEnd)

1. **Para los Conductores de Aplicaciones (Uber, Didi, etc.)**: Optimizar el tiempo y recursos es un desafío constante. La falta de información en tiempo real sobre eventos importantes en la ciudad les obliga a circular sin un destino concreto, lo que genera pérdidas económicas, aumenta el consumo de combustible y contribuye a la congestión vehicular. Esta ineficiencia impacta negativamente tanto a los conductores como a la ciudad en general.

2. **Para los Organizadores de Eventos**: Promover eventos y atraer asistentes puede ser complicado sin una conexión directa con los servicios de transporte. La falta de visibilidad de los eventos en plataformas que usan los conductores puede limitar la asistencia, lo que afecta el éxito del evento y las experiencias de los asistentes.

---

## Solución Propuesta

- **Optimización para Conductores**: EventMap ofrece una plataforma que proporciona información en tiempo real sobre eventos próximos, permitiendo a los conductores optimizar sus rutas, ahorrar combustible y maximizar sus ganancias al dirigirse a áreas con mayor demanda de transporte.

- **Mayor Visibilidad para Organizadores**: Los eventos se promueven directamente a los conductores de aplicaciones, lo que facilita una mayor asistencia y mejora la experiencia de los asistentes. Los organizadores pueden asegurarse de que sus eventos sean visibles para quienes prestan servicios de transporte, maximizando la afluencia.

- **Beneficios Medioambientales**: Al reducir los tiempos de conducción innecesarios, EventMap contribuye a disminuir la congestión vehicular y las emisiones de carbono, mejorando la sostenibilidad en las ciudades.


## Configuración del Proyecto (Local)

### Paso 1: Instalar PostgreSQL
- Descarga e instala PostgreSQL en tu máquina local desde el siguiente enlace:  
  [PostgreSQL Download](https://www.postgresql.org/download/)

### Paso 2: Instalar Dependencias

```bash
$ npm install
```

### Paso 3: Configurar Prisma ORM
```bash
# Instalar globalmente
$ npm install -g @nestjs/cli
```
```bash
# Dentro de carpeta del proyecto
$ npm install prisma --save-dev

$ npm install @prisma/client
```

### Paso 4: Configurar el archivo .env
Crea un archivo .env en la raíz del proyecto para almacenar las credenciales de la base de datos. La configuración debe incluir lo siguiente:
```bash

# Varibales Postgres
1.  USER 
2.  PASSWORD 
3.  HOST
4.  PORT
5.  DATABASE

Example:
DATABASE_URL="postgresql://postgres:1234@localhost:5432/eventmap?schema=SCHEMA"

## Variables de Cloudinary
6.  CLOUDINARY_UR
7.  CLOUDINARY_API_KEY
8.  CLOUDINARY_API_KEY_SECRET
9.  CLOUDINARY_API_KEY_NAME


##  Variables para Nodemailer
10. EMAIL_USER
11. EMAIL_PASSWORD
12. FRONTEND_UR

```

### Paso 5: Migrar y Sincronizar la Base de Datos
```bash
# Migrar DB
$ npx prisma migrate dev
```

```bash
# Sincronizar DB
$ npx prisma db push
```

## Paso 6:Compilar y ejecutar proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Paso 7:Ejecutar Test (Opcional)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<div style="text-align: center;">
  <h2>Integrantes del proyecto BackEnd</h2>
</div>

<div style="text-align: center; padding: 20px;">
  <a href="https://www.linkedin.com/in/ulises-rodriguez-desarrolloweb-fullstack/" target="_blank" style="margin: 10px;">
    <img src="https://img.shields.io/badge/Ulises Rodriguez%20-stackedit?style=for-the-badge&logo=rocket&logoColor=%23000000&logoSize=auto&color=%235bca1b" alt="Santiago Balbarrey Badge">
  </a>
  <a href="http://linkedin.com/in/santiagobalbarrey" target="_blank" style="margin: 10px;">
    <img src="https://img.shields.io/badge/Ulises Rodriguez%20-stackedit?style=for-the-badge&logo=rocket&logoColor=%23000000&logoSize=auto&color=%235bca1b" alt="Santiago Balbarrey Badge">
  </a>
  <a href="https://github.com/octa-quintero" target="_blank" style="margin: 10px;">
    <img src="https://img.shields.io/badge/Octavio%20Quintero-stackedit?style=for-the-badge&logo=rocket&logoColor=%23000000&logoSize=auto&color=%235bca1b" alt="Octavio Quintero Badge">
  </a>
</div>




![EventMap](https://i.ibb.co/dtCqRzD/4688bb3888c033b886921ae5c59216b5.png)