import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';


@Injectable()
export class AdminCheckGuard implements CanActivate {
  constructor(private jwtService : JwtService, private reflector : Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //fijate q esta parte salvo el el if del final es lo mismo para role.guard y auth.guard capaz hacer una funcion q haga las comprobaciones
    const request = context.switchToHttp().getRequest();
    const header = request.headers["authorization"];

    if (!header) {
      throw new UnauthorizedException("No se proporciono ningun token");
    }

    const headersBearer = header.split(" ");

    if (headersBearer.length !== 2 && headersBearer[0] !== "Bearer") {
      throw new UnauthorizedException("El formato del header no es el correcto");
    }

    const token = headersBearer[1];

    try {
      const decodedToken = this.jwtService.verify(token) as {id : number, email : string, rol : string};

      request["user"] = decodedToken;

      if (decodedToken.rol !== "Admin") {
        return false
      }

      return true;

    } catch (error) {
      throw new UnauthorizedException("El token proporcionado no es valido");
    }
  }
}
