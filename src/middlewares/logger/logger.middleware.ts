import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request,Response} from 'express';

//esto lo tendrias q injectar en el modulo q quieras usar, para este ejem en event.module.ts
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const aux = {
      url : req.originalUrl
    }

    console.log(aux);

    next();
  }
}
