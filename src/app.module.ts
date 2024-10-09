import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailModule } from './modules/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import dotenvOptions from './config/dotenvConfig';
import { createRateLimiter } from './middlewares/rateLimit/rate-limiter.factory';

@Module({
  imports: [
    EventsModule,
    AuthModule,
    UsersModule,
    MailModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: dotenvOptions.JWT_TOKEN_EXPIRED },
      secret: dotenvOptions.JWT_SECRET,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // // (Aplica rate limit para 'auth/register' (5 peticiones cada 30 minutos))
    // consumer
    //   .apply(createRateLimiter({ windowMs: 30 * 60 * 1000, max: 5 }))
    //   .forRoutes('auth/register');

    // consumer
    //   .apply(createRateLimiter({ windowMs: 15 * 60 * 1000, max: 10 }))
    //   .forRoutes('auth/login');
  }
}
