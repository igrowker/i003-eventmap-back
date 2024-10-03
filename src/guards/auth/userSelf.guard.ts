import { Injectable, CanActivate, ExecutionContext, ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { EventsService } from '../../modules/events/events.service'; // Importar el servicio de eventos
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserSelf implements CanActivate {
  // constructor(private readonly eventsService: EventsService) {} // Inyectar el servicio de eventos

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Obtener el userId desde el token JWT
    const userIdFromToken = request.user?.sub;
    console.log('User ID from Token:', userIdFromToken);

    // Obtener el eventId desde los parámetros de la URL
    const userId = request.params.id;
    console.log('Event ID from Params:', userId);

    if( userId !== userIdFromToken ) {
      throw new HttpException('error', HttpStatus.FORBIDDEN)
    }

    console.log('IDs coinciden. Acceso permitido.');
    return true; // Si los IDs coinciden, permitir la solicitud
  }
}

// verificar que el id del usuario que llega por params coincida con el id del token.
