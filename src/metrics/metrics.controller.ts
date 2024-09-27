import { Controller, Get, Req, Res, Next } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Request, Response } from 'express';

@Controller()
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response, @Next() next: Function): void {
    const start = process.hrtime(); // Captura el tiempo de inicio

    // Envolver la respuesta para capturar el código de estado
    const originalSend = res.send.bind(res);
    res.send = (body?: any): Response => {
      // Llamar a la respuesta original
      const response = originalSend(body);
      
      // Captura el tiempo transcurrido al final de la solicitud
      const [seconds, nanoseconds] = process.hrtime(start);
      const durationInSeconds = seconds + nanoseconds / 1e9;

      // Registro de métricas
      this.metricsService.incrementHttpRequests(req.method, req.path, response.statusCode.toString());
      this.metricsService.observeHttpRequestDuration(req.method, req.path, durationInSeconds);

      return response; // Retornar la respuesta
    };

    // Enviar la respuesta
    res.send('Hello, Prometheus!');
  }
}