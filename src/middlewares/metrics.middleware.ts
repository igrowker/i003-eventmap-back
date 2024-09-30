import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MetricsService } from '../metrics/metrics.service';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(private readonly metricsService: MetricsService) {}

  use(req: Request, res: Response, next: Function) {
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
        // Aquí puedes incrementar un contador de errores (si deseas llevar una métrica aparte)
        this.metricsService.incrementHttpErrors(req.method, req.path, statusCode);
      }

      return response; // Retornar la respuesta
    };

    next(); // Llama al siguiente middleware o controlador
  }
}