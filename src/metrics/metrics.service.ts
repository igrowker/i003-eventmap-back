import { Injectable, Logger } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter, Histogram } from 'prom-client';

@Injectable()
export class MetricsService {
  private readonly logger = new Logger(MetricsService.name); // Crear una instancia de Logger
  private readonly validHttpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

  constructor(
    @InjectMetric('http_requests_total')
    private readonly httpRequestCounter: Counter<string>,

    @InjectMetric('http_request_duration_seconds')
    private readonly httpRequestDurationHistogram: Histogram<string>,

    @InjectMetric('http_errors_total')
    private readonly httpErrorCounter: Counter<string>
  ) {}

  // Método para incrementar el contador de solicitudes HTTP
  incrementHttpRequests(method: string, path: string, status: string) {
    // Validar el método HTTP
    const validMethod = this.validateHttpMethod(method);
    
    // Normalizar la ruta
    const normalizedPath = this.normalizePath(path);
  
    // Validar el estado HTTP
    const validStatus = this.validateHttpStatus(status);
  
    // Incrementar el contador solo si todos los valores son válidos
    if (validMethod && validStatus) {
      this.httpRequestCounter.inc({ method: validMethod, path: normalizedPath, status: validStatus });
    }
  }

  // Método para incrementar el contador de errores HTTP
  incrementHttpErrors(method: string, path: string, status: string) {
    const validMethod = this.validateHttpMethod(method);
    const normalizedPath = this.normalizePath(path);

    if (validMethod) {
      this.httpErrorCounter.inc({ method: validMethod, path: normalizedPath, status });
    }
  }
  
  // Método para registrar la duración de una solicitud HTTP
  observeHttpRequestDuration(method: string, path: string, duration: number) {
    const validMethod = this.validateHttpMethod(method);
    const normalizedPath = this.normalizePath(path);

    if (validMethod) {
      this.httpRequestDurationHistogram.observe({ method: validMethod, path: normalizedPath }, duration);
    }
  }

  // Validar el método HTTP
  private validateHttpMethod(method: string): string | null {
    const upperMethod = method.toUpperCase(); // Asegurarse de que el método esté en mayúsculas
    if (this.validHttpMethods.includes(upperMethod)) {
      return upperMethod;
    }
    this.logger.warn(`Invalid HTTP method: ${method}`); // Usar el logger en lugar de console.warn
    return null;
  }

  // Normalizar la ruta eliminando posibles parámetros dinámicos
  private normalizePath(path: string): string {
    return path.replace(/\/\d+/g, '/:id'); // Ejemplo: /user/123 -> /user/:id
  }

  // Validar el estado HTTP
  private validateHttpStatus(status: string): string | null {
    const statusCode = parseInt(status, 10);
    if (!isNaN(statusCode) && statusCode >= 100 && statusCode <= 599) {
      return status;
    }
    this.logger.warn(`Invalid HTTP status: ${status}`); // Usar el logger en lugar de console.warn
    return null;
  }
}
