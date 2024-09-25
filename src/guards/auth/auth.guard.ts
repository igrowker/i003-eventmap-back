import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Token de autorización no proporcionado.');
    }

    const tokenBearer = authHeader.split(' ');

    if (tokenBearer.length !== 2 || tokenBearer[0] !== 'Bearer') {
      throw new UnauthorizedException('Formato de token incorrecto.');
    }

    const token = tokenBearer[1];
    const secret = process.env.JWT_SECRET;

    try {
      const decodedToken = jwt.verify(token, secret) as { email: string; rol: string };
      request['user'] = decodedToken;
      return true;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('El token ha expirado.');
      } else {
        throw new UnauthorizedException('Token inválido.');
      }
    }
  }
}
