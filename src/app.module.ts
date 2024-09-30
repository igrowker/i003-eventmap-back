import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PrometheusCustomModule } from './metrics/metrics.module';
import { MetricsMiddleware } from './middlewares/metrics.middleware';
import dotenvOptions from './config/dotenvConfig';

@Module({
  imports: [
    EventsModule, 
    AuthModule, 
    UsersModule,
    PrometheusCustomModule,
    JwtModule.register({
      global : true,
      signOptions : {expiresIn : dotenvOptions.JWT_TOKEN_EXPIRED},
      secret : dotenvOptions.JWT_SECRET,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MetricsMiddleware).forRoutes('*'); // Aplica el middleware a todas las rutas
  }
}