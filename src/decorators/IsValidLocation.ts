import { BadRequestException, Injectable } from '@nestjs/common';
import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsValisLocation', async: false })
@Injectable()
export class IsValisLocation implements ValidatorConstraintInterface {
    validate(value: any) {
        console.log(value);
        if (!value || typeof value !== 'object' || Object.keys(value).length !== 2) {
            throw new BadRequestException('location debe tener exactamente dos propiedades: lat y lon');
        }

        if (!('lat' in value && 'lon' in value)) {
            throw new BadRequestException('location debe tener las propiedades lat y lon');
        }

        const lat = parseFloat(value.lat.toString());
        const lon = parseFloat(value.lon.toString());

        if (isNaN(lat) || isNaN(lon)) {
            throw new BadRequestException('Las coordenadas deben ser números de tipo float');
        }

        console.log("ANTES DEW RETURN");
        return true;
    }

    defaultMessage() {
        return 'El numero de teléfono fijo ingresado debe ser positivo';
    }
}