import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MetricsService } from '../metrics/metrics.service';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(private readonly metricsService: MetricsService) {}

  // Lista de endpoints que quieres monitorear
  private monitoredRoutes = [
    '/api/users',
    '/api/products',
    '/events/crearEvents',
    '/events/all',
    '/events/',           // Para obtener todos los eventos
    '/events/event/:id',  // Para obtener un evento específico
    '/events/',           // Para crear un evento
    '/events/:id',        // Para actualizar un evento
    '/events/:id',        // Para actualizar el estado de un evento
    '/events/:id'         // Para eliminar un evento
  ];

  use(req: Request, res: Response, next: Function) {
    // Verifica si la ruta está en los endpoints monitoreados
    if (!this.monitoredRoutes.includes(req.path)) {
      return next(); // Si no está monitoreada, pasa al siguiente middleware
    }

    const start = process.hrtime(); // Captura el tiempo de inicio

    // Intercepta el método send para capturar el código de estado
    const originalSend = res.send.bind(res);
    res.send = (body?: any): Response => {
      // Llamar a la respuesta original
      const response = originalSend(body);

      // Captura el tiempo transcurrido al final de la solicitud
      const [seconds, nanoseconds] = process.hrtime(start);
      const durationInSeconds = seconds + nanoseconds / 1e9;

      const statusCode = response.statusCode.toString();

      // Registro de métricas
      this.metricsService.incrementHttpRequests(req.method, req.path, response.statusCode.toString());
      this.metricsService.observeHttpRequestDuration(req.method, req.path, durationInSeconds);

      // Si el estado es 4xx o 5xx, se considera un error
      if (statusCode.startsWith('4') || statusCode.startsWith('5')) {
        this.metricsService.incrementHttpErrors(req.method, req.path, statusCode);
      }

      return response;
    };

    next();
  }
}
