import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidatorConstraintInterface } from "class-validator";
// import { QueryEvents, UserInfo } from "./types";
import dotenvOptions from '../config/dotenvConfig';
import cloudinary from "src/config/cloudinary.config";
import { resolve } from "path";
import { ImgExtension } from "./enum";

export class TimeValidator implements ValidatorConstraintInterface {
    validate(value: any) {
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        return timeRegex.test(value as string);
    }
}

// export function filterEventsUserRequest(events: any, query: QueryEvents) {
//     //hacer validacion de q array es un array de objetos

//     const arrayEventsRequested = [];
//     const startDate = new Date(query.startDate);
//     const endDate = new Date(query.endDate);

//     for (let index = 0; index < events.length; index++) {
//         const event = events[index];
//         const dateEvent = new Date(event.date);

//         if (event.type === query.type && dateEvent >= startDate && dateEvent <= endDate) {
//             arrayEventsRequested.push(event);
//         }
//     }

//     return arrayEventsRequested;
// }

export function filterEventsRadius(events: any, userLat: string, userLon: string) {
    const arrayFilterEventsRadius = [];

    const radiusParse = parseFloat(dotenvOptions.RADIUS.toString());
    const latUserParse = parseFloat(userLat.toString());
    const lonUserParse = parseFloat(userLon.toString());

    for (let index = 0; index < events.length; index++) {
        const event = events[index];
        const lat = event.location.lat;
        const lon = event.location.lon;

        const firstEquation = Math.pow((lat - (latUserParse)), 2);
        const secondEquation = Math.pow((lon - (lonUserParse)), 2);
        const thirdEquation = firstEquation + secondEquation;
        const fourthEquation = Math.sqrt(thirdEquation);

        if (fourthEquation <= radiusParse) {
            console.log("dentro del if");
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

export function checkSizeImages(files : Express.Multer.File[]){
    const MAX_SIZE = dotenvOptions.MAX_SIZE_IMAGE;

    for (const file of files) {
        const size = file.size / 1024
        console.log(size > parseInt(MAX_SIZE));
        if (size > parseInt(MAX_SIZE)) {
            return false;
        }
    }

    return true
}

export function checkFormatImages(files : Express.Multer.File[]){
    const arrayImgExtension = Object.values(ImgExtension);

    console.log(arrayImgExtension);

    for (const file of files) {
        const extension = file.originalname.split(".").pop() as ImgExtension;
        
        if (!arrayImgExtension.includes(extension)) {
            return false;
        }
    }

    return true;
}

async function uploadFile(files: Express.Multer.File[]) {
    const photoUrls: string[] = [];

    for (const file of files) {
        await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    console.log(result);
                    console.log(result.format);
                    console.log(result.height);
                    console.log(result.public_id);
                    photoUrls.push(result.secure_url) //si da error al intentar acceder desde render proba url en ves de secure_url
                    resolve(result.secure_url);
                }
            }).end(file.buffer);
        });
    }

    return photoUrls;
}

export const uploadFilesToCloudinary = async (files: Express.Multer.File[]): Promise<string[]> => {
    let photoUrls: string[] = [];

    try {
        const urls = await uploadFile(files);
        photoUrls = urls;

    } catch (error) {
        console.error('Error al subir el archivo a Cloudinary:', error);
    }

    return photoUrls;
}