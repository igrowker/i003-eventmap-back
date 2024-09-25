import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {EventsController} from './events.controller';
import { EventsService } from './events.service';
import { LoggerMiddleware } from 'src/middlewares/logger/logger.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers : [EventsController],
    providers: [EventsService, PrismaService],
})
export class EventsModule implements NestModule{
    
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('events') //ahora todos los events controller se les va a aplicar este middleware
        // .apply(AuthMiddleware).forRoutes('events')
    }
}

