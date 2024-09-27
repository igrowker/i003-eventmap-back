	import { Module } from '@nestjs/common';
	import { MetricsService } from './metrics.service';
	import { MetricsController } from './metrics.controller';
	import { PrometheusModule } from '@willsoto/nestjs-prometheus';
	import { httpRequestCounterProvider, httpRequestDurationHistogramProvider } from './metrics.injector';

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