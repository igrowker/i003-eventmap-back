import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/utils/enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService : JwtService, private reflector : Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    console.log(request.user);

    // return true;

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

      const roles : Role[] = Object.values(Role);

      if (!roles.includes(decodedToken.rol as Role)) {
        return false
      }

      return true;

    } catch (error) {
      throw new UnauthorizedException("El token proporcionado no es valido");
    }
  }
}
