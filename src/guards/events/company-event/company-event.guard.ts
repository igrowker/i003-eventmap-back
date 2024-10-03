import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { EventsService } from '../../../modules/events/events.service';

@Injectable()
export class CompanyEventGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private eventsService: EventsService,
    private jwtService: JwtService,  // Inyección de JwtService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Obtenemos el token del header
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new ForbiddenException('No token provided');
    }

    // Verificamos el token y decodificamos la información
    let decoded: any;
    try {
      decoded = this.jwtService.verify(token); // Verificamos el token
    } catch (error) {
      throw new ForbiddenException('Invalid token');
    }

    // Obtenemos el ID del usuario desde el token
    const userId = decoded.sub; //1

    // Obtenemos el evento que se está intentando actualizar

    const eventId = request.params.id; //4

    const event = await this.eventsService.getEvent((eventId));

    if (!event) {
      throw new ForbiddenException('Event not found');
    }

    // Validamos que el usuario sea el propietario del evento
    if (event.userId !== userId) {
      throw new ForbiddenException('You are not allowed to update this event');
    }

    return true;  // Permitir acceso si todas las validaciones pasan
  }
}