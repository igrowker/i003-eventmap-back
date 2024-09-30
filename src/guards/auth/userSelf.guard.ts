import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class UserOwnershipGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Agregar logs para ver los datos que se están manejando
    console.log('UserOwnershipGuard: Revisando propiedad del recurso.');

    // Obtener el userId del token que fue decodificado en JwtAuthGuard
    const userIdFromToken = request.user?.id; 
    console.log('User ID from Token:', userIdFromToken);

    // Obtener el userId que viene de los parámetros de la URL
    const userIdFromParams = +request.params.id;
    console.log('User ID from Params:', userIdFromParams);

    // Verificamos si el userId del token coincide con el userId del recurso que se está intentando modificar
    if (userIdFromToken !== userIdFromParams) {
      console.log('User IDs do not match. Access denied.');
      throw new ForbiddenException('No tienes permiso para modificar esta información');
    }

    console.log('User IDs match. Access granted.');
    return true;
  }
}
