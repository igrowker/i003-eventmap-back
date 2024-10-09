import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { EventsService } from '../../modules/events/events.service';

@Injectable()
export class userSelf implements CanActivate {
  constructor(private readonly eventsService: EventsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    const userIdFromToken = request.user?.sub;

    const userId = request.params.id;
    
    if( userId !== userIdFromToken ) {
      throw new HttpException('error', HttpStatus.FORBIDDEN)
    }
    console.log('Acceso permitido.');
    return true;
  }
}

// verificar que el id del usuario que llega por params coincida con el id del token.
