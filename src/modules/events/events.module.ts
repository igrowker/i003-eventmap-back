import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { LoggerMiddleware } from 'src/middlewares/logger/logger.middleware';
import { MetricsMiddleware } from 'src/middlewares/metrics.middleware'; // Importa el MetricsMiddleware
import { MetricsModule } from 'src/metrics/metrics.module'; // Importa el MetricsModule
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
    imports: [AuthModule, MetricsModule],
    controllers: [EventsController],
    providers: [EventsService, CloudinaryService, PrismaService],
    exports: [EventsService]
})
export class EventsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware, MetricsMiddleware)
            .forRoutes('events');
    }
}