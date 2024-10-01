import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { EventsService } from '../../modules/events/events.service'; // Importar el servicio de eventos

@Injectable()
export class UserOwnershipGuard implements CanActivate {
  constructor(private readonly eventsService: EventsService) {} // Inyectar el servicio de eventos

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    // Obtener el userId desde el token JWT
    const userIdFromToken = request.user?.id;
    console.log('User ID from Token:', userIdFromToken);

    // Obtener el eventId desde los parámetros de la URL
    const eventId = request.params.id;
    console.log('Event ID from Params:', eventId);

    // Obtener el evento desde la base de datos
    const event = await this.eventsService.getEvent(eventId);
    console.log('Event from DB:', event);

    if (!event) {
      console.log('Evento no encontrado');
      throw new ForbiddenException('Evento no encontrado.');
    }

    // Verificar si el userId del token coincide con el userId del evento
    if (event.userId !== userIdFromToken) {
      console.log('IDs no coinciden. Usuario no autorizado.');
      throw new ForbiddenException('No tienes permiso para modificar este evento.');
    }

    console.log('IDs coinciden. Acceso permitido.');
    return true; // Si los IDs coinciden, permitir la solicitud
  }
}
