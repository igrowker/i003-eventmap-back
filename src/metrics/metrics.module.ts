import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
	imports: [
		PrometheusModule.register({
			defaultMetrics: {
				enabled: true,
			},
		}),
	],
	controllers: [MetricsController],
	providers: [
		MetricsService,
		httpRequestDurationHistogramProvider,
		httpRequestCounterProvider,
	],
	exports: [MetricsService],
})
export class PrometheusCustomModule {}