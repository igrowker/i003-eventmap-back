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

    console.log('Authorization Header:', authHeader); // Verifica si el header de autorización está presente

    if (!authHeader) {
      throw new UnauthorizedException('Token de autorización no proporcionado.');
    }

    const tokenBearer = authHeader.split(' ');

    console.log('Token Bearer Parts:', tokenBearer); // Verifica el formato del token

    if (tokenBearer.length !== 2 || tokenBearer[0] !== 'Bearer') {
      throw new UnauthorizedException('Formato de token incorrecto.');
    }

    const token = tokenBearer[1];
    const secret = process.env.JWT_SECRET;

    try {
      console.log('Verifying Token...'); // Verificación del token
      const decodedToken = jwt.verify(token, secret) as { id: number; email: string; rol: string };

      console.log('Decoded Token:', decodedToken); // Verificar si el token se decodifica correctamente

      request['user'] = decodedToken;
      console.log('Request User:', request['user']); // Verifica que el usuario haya sido asignado correctamente al request

      return true;
    } catch (error) {
      console.log('JWT Error:', error); // Mostrar el error si ocurre

      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('El token ha expirado.');
      } else {
        throw new UnauthorizedException('Token inválido.');
      }
    }
  }
}
