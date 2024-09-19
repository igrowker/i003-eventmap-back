import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import dotenvOptions, {dotenvFun}  from './config/dotenvConfig';

// dotenv.config();

//1- probar si la db funciona sin la necesidad de dotenvFun(); o dotenv.config();
//2- si 1- falla probar solo con dotenvFun();
//3- si 2- falla dejar la opcion anterior dotenv.config();
// dotenvFun();

async function bootstrap() {
  console.log(dotenvOptions.PRUEBA);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.use(new LoggerMiddleware().use);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true //esto es para q cuando haga las validaciones tambien chekee q no te lleguen mas props de las q estan declaradas, con esto nest toma el body q le llega pero lo ignorar
  }))
  await app.listen(3000); //cambiar numero de puerto xq el front corren en el mismo.
}
bootstrap();
