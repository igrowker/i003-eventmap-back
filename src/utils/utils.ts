import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidatorConstraintInterface } from "class-validator";
import { QueryEvents } from "./types";
import dotenvOptions from '../config/dotenvConfig';

export class TimeValidator implements ValidatorConstraintInterface {
    validate(value: any) {
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        return timeRegex.test(value as string);
    }
}

export function filterEventsUserRequest(events: any, query: QueryEvents) {
    //hacer validacion de q array es un array de objetos

    const arrayEventsRequested = [];
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);

    for (let index = 0; index < events.length; index++) {
        const event = events[index];
        const dateEvent = new Date(event.date);

        if (event.type === query.type && dateEvent >= startDate && dateEvent <= endDate) {
            arrayEventsRequested.push(event);
        }
    }

    return arrayEventsRequested;
}

export function filterEventsRadius(events: any, userLat: string, userLon: string) {
    const arrayFilterEventsRadius = [];
    
    const radiusParse = parseFloat(dotenvOptions.RADIUS.toString());
    const latUserParse = parseFloat(userLat.toString());
    const lonUserParse = parseFloat(userLon.toString());

    for (let index = 0; index < events.length; index++) {
        const event = events[index];
        const lat = event.location.lat;
        const lon = event.location.lon;

        const firstEquation = Math.pow((lat - (latUserParse)), 2); //(x-xc)2 --- xc y yc posicion usuario -- x y y coordenas evento
        const secondEquation = Math.pow((lon - (lonUserParse)), 2); //(y-yc)2
        const thirdEquation = firstEquation + secondEquation;
        const fourthEquation = Math.sqrt(thirdEquation);

        console.log(fourthEquation);

        if (fourthEquation <= radiusParse) {
            arrayFilterEventsRadius.push(event);
        }
    }

    return arrayFilterEventsRadius;
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