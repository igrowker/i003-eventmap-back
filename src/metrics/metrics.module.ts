	import { Module } from '@nestjs/common';
	import { MetricsService } from './metrics.service';
	import { MetricsController } from './metrics.controller';
	import { PrometheusModule } from '@willsoto/nestjs-prometheus';
	import { httpErrorCounterProvider, httpRequestCounterProvider, httpRequestDurationHistogramProvider } from './metrics.injector';

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
			httpErrorCounterProvider,
		],
		exports: [
			MetricsService,
			httpRequestDurationHistogramProvider, // Asegúrate de que también se exporte
    		httpRequestCounterProvider, // Asegúrate de que también se exporte
    		httpErrorCounterProvider, // Asegúrate de que también se exporte
		],
	})
	export class PrometheusCustomModule {}