import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
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
        enabled: false, // Desactivamos las métricas por defecto
      },
    }),
  ],
  controllers: [MetricsController],
  providers: [
    MetricsService,
    httpRequestCounterProvider,
    httpRequestDurationHistogramProvider,
    httpErrorCounterProvider,
  ],
  exports: [
    MetricsService,
    httpRequestCounterProvider,
    httpRequestDurationHistogramProvider,
    httpErrorCounterProvider,
  ],
})
export class MetricsModule {}