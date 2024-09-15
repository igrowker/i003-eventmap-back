import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const ip = req.ip;

    const startTime = Date.now(); // Marca el tiempo de inicio

    // Cuando la respuesta se haya enviado, calculamos el tiempo y mostramos el código de estado
    res.on('finish', () => {
      const statusCode = res.statusCode;
      const endTime = Date.now();
      const duration = endTime - startTime;

      console.log(
        `[Request] Method: ${method}, URL: ${originalUrl}, IP: ${ip}, Status: ${statusCode}, Duration: ${duration}ms`
      );
    });

    next();
  }
}
