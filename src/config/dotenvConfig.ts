import * as dotenv from 'dotenv';

export const dotenvFun = ()=>{
    dotenv.config();
}

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
const MAX_SIZE_IMAGE = process.env.MAX_SIZE_IMAGE;
const DEFAULT_IMG_EVENT_CLOUDINARY = process.env.DEFAULT_IMG_EVENT_CLOUDINARY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const dotenvOptions = {
    DATABASE_URL_LOCAL,
    PORT,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
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
    MAX_SIZE_IMAGE,
    DEFAULT_IMG_EVENT_CLOUDINARY,
}

export default dotenvOptions;