// metrics.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { MetricsMiddleware } from '../middlewares/metrics.middleware';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import {
  httpRequestCounterProvider,
  httpRequestDurationHistogramProvider,
  httpErrorCounterProvider,
} from './metrics.injector';

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: {
        enabled: false, //desactivar metricas por defecto
      },
    }),
  ],
  controllers: [MetricsController],
  providers: [
    MetricsService,
    MetricsMiddleware,
    httpRequestCounterProvider,
    httpRequestDurationHistogramProvider,
    httpErrorCounterProvider,
  ],
  exports: [
    MetricsService,
    MetricsMiddleware,
    httpRequestCounterProvider,
    httpRequestDurationHistogramProvider,
    httpErrorCounterProvider,
  ],
})
export class MetricsModule {}