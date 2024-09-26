import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [EventsModule, AuthModule, UsersModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}