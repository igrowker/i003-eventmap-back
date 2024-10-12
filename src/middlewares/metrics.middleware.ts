import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MetricsService } from '../metrics/metrics.service';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(private readonly metricsService: MetricsService) {}

  // Lista de rutas que deseas monitorear
  private monitoredRoutes = [
    '/',
    '/events/crearEvents',
    '/events/all',
    '/events',
    '/events/event/:id',
    '/events/:id',
  ];

  use(req: Request, res: Response, next: Function) {
    // Normaliza la ruta reemplazando parámetros numéricos por ':id'
    const normalizedPath = req.path.replace(/\/\d+/g, '/:id');

    // Verifica si la ruta actual está en la lista de rutas monitoreadas
    if (this.monitoredRoutes.includes(normalizedPath)) {
      const start = process.hrtime();

      res.on('finish', () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const durationInSeconds = seconds + nanoseconds / 1e9;
        const statusCode = res.statusCode.toString();

        // Registra las métricas
        this.metricsService.incrementHttpRequests(req.method, normalizedPath, statusCode);
        this.metricsService.observeHttpRequestDuration(req.method, normalizedPath, durationInSeconds);

        if (statusCode.startsWith('4') || statusCode.startsWith('5')) {
          this.metricsService.incrementHttpErrors(req.method, normalizedPath, statusCode);
        }
      });
    }

    next();
  }
}