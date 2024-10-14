import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidatorConstraintInterface } from "class-validator";
import dotenvOptions from '../config/dotenvConfig';

export class TimeValidator implements ValidatorConstraintInterface {
    validate(value: any) {
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        return timeRegex.test(value as string);
    }
}

export function filterEventsRadius(events: any, userLat: string, userLon: string) {
    const RADIUS_EARTH = 6371; // Radio de la Tierra en kilómetros
    // const radiusLimit = 5; // Radio de 5 kilómetros
    const radiusLimit = parseFloat(dotenvOptions.RADIUS.toString()); // Radio de 5 kilómetros
    const latUserParse = parseFloat(userLat.toString());
    const lonUserParse = parseFloat(userLon.toString());

    return events.filter((event: any) => {
        const latEvent = event.location.lat;
        const lonEvent = event.location.lon;

        // Conversión de grados a radianes
        const latUserRad = (latUserParse * Math.PI) / 180;
        const lonUserRad = (lonUserParse * Math.PI) / 180;
        const latEventRad = (latEvent * Math.PI) / 180;
        const lonEventRad = (lonEvent * Math.PI) / 180;

        // Diferencias de latitud y longitud
        const dLat = latEventRad - latUserRad;
        const dLon = lonEventRad - lonUserRad;

        // Fórmula de Haversine
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(latUserRad) * Math.cos(latEventRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Distancia entre el evento y el usuario en kilómetros
        const distance = RADIUS_EARTH * c;

        return distance <= radiusLimit;
    });
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
        throw new HttpException('La fecha ingresada no es correcta', HttpStatus.BAD_REQUEST);
    }

    return true;
}