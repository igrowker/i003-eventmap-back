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

    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!request.user) {
      throw new UnauthorizedException('No existe el token.');
    }

    try {
      if (!requiredRoles.includes(request.user.rol as Role)) {
        return false
      }

      return true;

    } catch (error) {
      throw new UnauthorizedException("El token proporcionado no es valido");
    }
  }
}
