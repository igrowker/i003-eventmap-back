import { Controller, Get, Response, NestMiddleware } from '@nestjs/common';
import { Request, Response as Res, NextFunction } from 'express';
import { Registry, Histogram } from 'prom-client';

@Controller('metrics')
export class MetricsController implements NestMiddleware {
  private register: Registry;
  private httpRequestDurationMicroseconds: Histogram<string>;

  constructor() {
    this.register = new Registry();
    this.httpRequestDurationMicroseconds = new Histogram({
      name: 'http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'code'],
      registers: [this.register],
    });
  }

  @Get()
  async getMetrics(@Response() res: Res) {
    res.set('Content-Type', this.register.contentType);
    res.end(await this.register.metrics());
  }

  use(req: any, res: any, next: () => void) {
    const end = this.httpRequestDurationMicroseconds.startTimer();
    res.on('finish', () => {
      end({ method: req.method, route: req.route ? req.route.path : req.path, code: res.statusCode });
    });
    next();
  }
}