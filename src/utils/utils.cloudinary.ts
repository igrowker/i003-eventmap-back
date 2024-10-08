import { HttpException, HttpStatus } from "@nestjs/common";
import cloudinary from "src/config/cloudinary.config";
import dotenvOptions from "src/config/dotenvConfig";
import { ImgExtension } from "./enum";

export function checkSizeImages(files: Express.Multer.File[]) {
    const MAX_SIZE = dotenvOptions.MAX_SIZE_IMAGE;

    for (const file of files) {
        const size = file.size / 1024

        if (size > parseInt(MAX_SIZE)) {
            return false;
        }
    }

    return true
}

export function checkFormatImages(files: Express.Multer.File[]) {
    const arrayImgExtension = Object.values(ImgExtension);

    for (const file of files) {
        const extension = file.originalname.split(".").pop() as ImgExtension;

        if (!arrayImgExtension.includes(extension)) {
            return false;
        }
    }

    return true;
}

export function checkValidImages(files: Express.Multer.File[]) {

    if (!checkSizeImages(files)) {
        return new HttpException('El tamaño de las imagenes para el evento no puede superar el tamañno de 300kb', HttpStatus.BAD_REQUEST);
    }

    if (!checkFormatImages(files)) {
        return new HttpException('El formato de las imagenes tiene que ser una de estas opciones: .jpg | .png | .jpeg | .web', HttpStatus.BAD_REQUEST);
    }

    return true;
}

async function uploadFile(files: Express.Multer.File[]) {
    const photoUrls: string[] = [];
    try {

        if (files.length === 0) {
            photoUrls.push(dotenvOptions.DEFAULT_IMG_EVENT_CLOUDINARY);

            return photoUrls;
        }

        for (const file of files) {
            await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        photoUrls.push(result.secure_url)
                        resolve(result.secure_url);
                    }
                }).end(file.buffer);
            });
        }


    } catch (error) {
        console.log(error);
        throw new HttpException('Error al intentar subir las fotos', HttpStatus.BAD_REQUEST);
    }

    return photoUrls;
}

export const uploadFilesToCloudinary = async (files: Express.Multer.File[]): Promise<string[]> => {
    let photoUrls: string[] = [];

    try {
        if (checkValidImages(files)) {
            photoUrls = await uploadFile(files);
        }

    } catch (error) {
        console.error('Error al subir el archivo a Cloudinary:', error);
        throw new HttpException('Error al subir el archivo a Cloudinary:', HttpStatus.BAD_REQUEST);
    }

    return photoUrls;
}

export const deleteImgCloudinary = async (photos: string[]) => {
    try {
        for (let i = 0; i < photos.length; i++) {
            const photoUrl = photos[i];

            const secureImageUrl = cloudinary.url(photoUrl, {
                secure: true
            });

            const publicId = secureImageUrl.split('/').pop().split('.')[0];
            let response = {};

            if (secureImageUrl !== dotenvOptions.DEFAULT_IMG_EVENT_CLOUDINARY) {
                response = await cloudinary.uploader.destroy(publicId, (error, result) => {
                });
            }
        }

    } catch (error) {
        console.log(error);
        throw new HttpException('Error al borrar el archivo de Cloudinary:', HttpStatus.BAD_REQUEST);
    }

    return true;
}

export const getImgByIdCloudinary = async (id: string) => {
    let imageById: any;
    try {
        imageById = await cloudinary.api.resource(
            `${id}`,
            {
                type: 'upload',
                resource_type: 'image'
            },
            (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(result.resources); // Array de objetos que representan cada imagen
                }
            }
        )
    } catch (error) {
        console.log(error);
        throw new HttpException(`Error al intentar obtener la imagen con el id ${id}`, HttpStatus.BAD_REQUEST);
    }

    return imageById;
}

export const getAllImagesCloudinary = async () => {
    let images : any;
    try {
        images = await cloudinary.api.resource(
            "",
            {
                type: 'upload',
                resource_type: 'image'
            },
            (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                }
            }
        )
    } catch (error) {
        console.log(error);
        throw new HttpException(`Error al intentar obtener las imagenes`, HttpStatus.BAD_REQUEST);
    }

    return images;
}