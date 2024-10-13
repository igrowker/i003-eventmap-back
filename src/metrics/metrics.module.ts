import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsService } from './metrics.service';
import { MetricsMiddleware } from 'src/middlewares/metrics.middleware';
import {
  httpRequestCounterProvider,
  httpRequestDurationHistogramProvider,
  httpErrorCounterProvider,
} from './metrics.injector';

@Module({
  imports: [
    PrometheusModule.register({
      defaultMetrics: {
        enabled: false, //metricas por defecto
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