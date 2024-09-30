import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class MetricsController {
  @Get()
  getHello(@Res() res: Response): void {
    // Enviar la respuesta
    res.send('Hello, Prometheus!');
  }
}