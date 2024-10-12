import { Controller, Get, Header, Logger } from '@nestjs/common';
import { register } from 'prom-client';


@Controller('metrics')
export class MetricsController {
  private readonly logger = new Logger(MetricsController.name);

  @Get()
  @Header('Content-Type', 'text/plain; version=0.0.4')
  async getMetrics(): Promise<string> {
    this.logger.log('Solicitud recibida en /metrics');
    try {
      const metrics = await register.metrics();
      this.logger.log('Métricas obtenidas correctamente');
      return metrics;
    } catch (error) {
      this.logger.error('Error al obtener métricas', error.stack);
      throw error;
    }
  }
}
