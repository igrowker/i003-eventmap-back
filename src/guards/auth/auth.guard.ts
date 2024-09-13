import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

//como es un injectable tenemos q agregarlo en la ruta q queresmos q ejecute
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    //context es la info de toda la peticion
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {


    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    // if (request.url !== '/events/1') return false
    //ejem analizar el token le va a proivir avanzar
    if (!request.headers['authorization']) return false;

    return true;
  }
}
