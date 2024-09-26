import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import dotenvOptions, {dotenvFun}  from './config/dotenvConfig';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';

dotenv.config();

dotenvFun();

async function bootstrap() {
  console.log(dotenvOptions.PRUEBA);
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(cookieParser());
  app.use(new LoggerMiddleware().use);
  app.useGlobalPipes(new ValidationPipe({

    whitelist : true, 
    // transform : true
  }))
  await app.listen(dotenvOptions.PORT);
}
bootstrap();