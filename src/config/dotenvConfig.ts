import * as dotenv from 'dotenv';

export const dotenvFun = ()=>{
    dotenv.config();
}

const PRUEBA = process.env.PRUEBA;
const DATABASE_URL_LOCAL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const RADIUS = process.env.RADIUS;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_TOKEN_EXPIRED = process.env.JWT_TOKEN_EXPIRED;
const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_KEY_SECRET = process.env.CLOUDINARY_API_KEY_SECRET;
const CLOUDINARY_API_KEY_NAME = process.env.CLOUDINARY_API_KEY_NAME;
const FRONTEND_URL = process.env.FRONTEND_URL;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const dotenvOptions = {
    PRUEBA,
    DATABASE_URL_LOCAL,
    PORT,
    RADIUS,
    JWT_SECRET,
    JWT_TOKEN_EXPIRED,
    FRONTEND_URL,
    EMAIL_PASSWORD,
    EMAIL_USER,
    CLOUDINARY_URL,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_KEY_SECRET,
    CLOUDINARY_API_KEY_NAME,
}

export default dotenvOptions;