import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidatorConstraintInterface } from "class-validator";
// import { QueryEvents, UserInfo } from "./types";
import dotenvOptions from '../config/dotenvConfig';
import cloudinary from "src/config/cloudinary.config";
import { resolve } from "path";

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

async function uploadFile(files: Express.Multer.File[]) {
    const photoUrls: string[] = [];

    for (const file of files) {
        await new Promise((resolve, reject) => {
            //esta fun no es bloquentate pero te permite usar el buffer sin la necesidad de almacenar la foto de forma local primero,
            //el problema q si bien hace lo mismo q la opcion 1 al no ser bloquente la ejeucucion del programa sigue y hace q el aux.push se ejecute cuando esta operacion termine pero mientras sigue con otras intrucciones
            //por lo caul es necesario meterla dentro de una promesa para asi volver toda la operacion bloquente y q esepere
            //esto xq sino cuando intentemos crear el evento, puede pasar q el array de url llegue vacio
            cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    //el return no devueve todo las url en el array, capaz el for aca adentro
                    photoUrls.push(result.secure_url)
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
        // necesitas tener el archivo almacenado localmente. Esta función espera como argumento la ruta completa al archivo en tu sistema de archivos.
        //esta opcion tendriamos q usar multer pero la ventaja q tiene es q es sincronica osea pausa la ejecuion del programa y espera hasta q se resulva la fun
        //por lo cual no hay problemas para almacenar la url dentro del array photos
        // const uploadResult = await cloudinary.uploader.upload(file.path, {
        //     folder: 'events', // Opcional: Especifica una carpeta para organizar
        //     resource_type: 'auto' // Detecta automáticamente el tipo de recurso
        // });

        // photoUrls.push(uploadResult.secure_url);

        //opcion 2 mirar la fun uploadFile
        const urls = await uploadFile(files);
        photoUrls = urls;

        // console.log(photoUrls);

    } catch (error) {
        console.error('Error al subir el archivo a Cloudinary:', error);
    }

    return photoUrls;
}