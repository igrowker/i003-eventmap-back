import rateLimit from 'express-rate-limit';

export function createRateLimiter(options: { windowMs: number; max: number }) {
  return rateLimit({
    windowMs: options.windowMs,
    max: options.max,
    message: 'Demaciadas peticiones, Intente mas tarde.',
  });
}
