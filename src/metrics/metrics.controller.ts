import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics') // Cambiar el endpoint a '/metrics' para acceder a las métricas
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  getMetrics() {
    return this.metricsService.getMetrics(); // Método que devolverá tus métricas personalizadas
  }
}