import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidatorConstraintInterface } from "class-validator";
import { Location } from "./types";

export class TimeValidator implements ValidatorConstraintInterface {
    validate(value: any) {
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        return timeRegex.test(value as string);
    }
}


//esto pasarlo a middleware o guard
export function locationValidation(location: Location) {
    if (typeof location !== "object") {
        throw new HttpException('El campo location debe ser un array', HttpStatus.BAD_REQUEST);
    }

    //fijate q si se modifica el schema.prisma como dice el comentario algunas de estas validaciones cambian o no te hacen falta ya q ahora no tenes un array sino un objeto solo
    if (location.location.length > 1) {
        throw new HttpException('El campo location solo puede contener un solo objeto', HttpStatus.BAD_REQUEST);
    }

    if (Object.keys(location.location[0]).length !== 2) {
        throw new HttpException('El campo location debe contener 2 propiedades', HttpStatus.BAD_REQUEST);
    }

    if (!location.location[0].hasOwnProperty("lat") || !location.location[0].hasOwnProperty("lon")) {
        throw new HttpException('El campo location debe contener una propiedad lat y una propiedad lon', HttpStatus.BAD_REQUEST);
    }

    //el toString() es necesario para garantizar q parseFloat recive un string
    const lat = parseFloat(location.location[0].lat.toString());
    const lon = parseFloat(location.location[0].lon.toString());

    if (isNaN(lat) || isNaN(lon)) {
        throw new HttpException('Las coordenas deben ser numeros de tipo float', HttpStatus.BAD_REQUEST);
    }

    return true
}

export function isString(type: any) {
    if (typeof type !== 'string') return false;

    return true;
}

export function isValidDate(date: any) {

    if (!isString(date)) {
        throw new HttpException('La fecha del evento debe de tener el formato : yyyy-mm-dd', HttpStatus.BAD_REQUEST);
    }

    if (!date.match("^\d{4}-\d{2}-\d{2}$")) {
        throw new HttpException('El tipo de evento debe ser : Deportivo, Gastronomico, Artistico', HttpStatus.BAD_REQUEST);
    }

    return true;
}

export function checkTypeQuery(type: string) {
    if (!isString(type)) {
        throw new HttpException('El tipo de evento debe ser : Deportivo, Gastronomico, Artistico', HttpStatus.BAD_REQUEST);
    }

    return true;
}

export function checkDateFormatQuery(date: string) {
    if (!isValidDate(date)) {
        throw new HttpException('La fehca ingresada no es correcta', HttpStatus.BAD_REQUEST);
    }

    return true;
}