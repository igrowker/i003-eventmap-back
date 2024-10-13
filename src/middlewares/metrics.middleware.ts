import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MetricsService } from 'src/metrics/metrics.service';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(private readonly metricsService: MetricsService) {}

  private monitoredRoutes = [
    '/events/crearEvents',
    '/events/all',
    '/events',
    '/events/event/:id',
    '/events/:id',
  ];

  use(req: Request, res: Response, next: Function) {
    // Usa req.originalUrl para capturar la ruta completa
    let originalUrl = req.originalUrl;

    // Normaliza la URL para eliminar barras inclinadas finales
    originalUrl = originalUrl.replace(/\/+$/, '');

    // Normaliza solo rutas que contienen un ID numérico al final
    const normalizedPath = originalUrl.replace(/\/\d+$/, '/:id');

    // Verifica si la ruta actual está en la lista de rutas monitoreadas
    if (this.monitoredRoutes.includes(normalizedPath)) {
      const start = process.hrtime();

      res.on('finish', () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const durationInSeconds = seconds + nanoseconds / 1e9;
        const statusCode = res.statusCode.toString();

        // Registra las métricas usando la ruta normalizada
        this.metricsService.incrementHttpRequests(req.method, normalizedPath, statusCode);
        this.metricsService.observeHttpRequestDuration(req.method, normalizedPath, durationInSeconds);

        // Si el statusCode es 4xx o 5xx, registra como error
        if (statusCode.startsWith('4') || statusCode.startsWith('5')) {
          this.metricsService.incrementHttpErrors(req.method, normalizedPath, statusCode);
        }
      });
    }

    next();
  }
}