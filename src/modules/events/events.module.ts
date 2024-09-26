import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {EventsController} from './events.controller';
import { EventsService } from './events.service';
import { LoggerMiddleware } from 'src/middlewares/logger/logger.middleware';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers : [EventsController],
    providers: [EventsService, PrismaService],
})
export class EventsModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('events')
    }
}

