import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { EventsService } from '../../modules/events/events.service';

@Injectable()
export class userSelf implements CanActivate {
  constructor(private readonly eventsService: EventsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    const userIdFromToken = request.user?.sub;
    console.log('User ID from Token:', userIdFromToken);

    const userId = request.params.id;
    console.log('Event ID from Params:', userId);

    if( userId !== userIdFromToken ) {
      throw new HttpException('error', HttpStatus.FORBIDDEN)
    }
    console.log('IDs coinciden. Acceso permitido.');
    return true;
  }
}

// verificar que el id del usuario que llega por params coincida con el id del token.
