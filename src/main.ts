import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import dotenvOptions, { dotenvFun } from './config/dotenvConfig';
import { MetricsController } from './metrics/metrics.controller';

dotenv.config();
dotenvFun();

async function bootstrap() {
  console.log(dotenvOptions.PRUEBA);
  const app = await NestFactory.create(AppModule);
  
  // Habilitar middleware de métricas
  const metricsController = app.get(MetricsController);
  app.use(metricsController.use.bind(metricsController));

  app.enableCors();
  app.use(cookieParser());
  app.use(new LoggerMiddleware().use);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen(3000);
}
bootstrap();