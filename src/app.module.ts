import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import dotenvOptions from './config/dotenvConfig';

@Module({
  imports: [
    EventsModule, 
    AuthModule, 
    UsersModule,
    JwtModule.register({
      global : true,
      signOptions : {expiresIn : dotenvOptions.JWT_TOKEN_EXPIRED},
      secret : dotenvOptions.JWT_SECRET,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
