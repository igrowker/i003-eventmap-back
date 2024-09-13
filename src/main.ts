import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true //esto es para q cuando haga las validaciones tambien chekee q no te lleguen mas props de las q estan declaradas, con esto nest toma el body q le llega pero lo ignora
  }))
  await app.listen(3000); //cambiar numero de puerto xq el front corren en el mismo
}
bootstrap();
