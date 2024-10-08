import { Injectable, Logger } from '@nestjs/common';
import { Counter, Histogram } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class MetricsService {
  private readonly logger = new Logger(MetricsService.name);
  private readonly validHttpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

  constructor(
    @InjectMetric('http_requests_total') private readonly httpRequestCounter: Counter<string>,
    @InjectMetric('http_request_duration_seconds') private readonly httpRequestDurationHistogram: Histogram<string>,
    @InjectMetric('http_errors_total') private readonly httpErrorCounter: Counter<string>,
  ) {}

  incrementHttpRequests(method: string, path: string, status: string) {
    const validMethod = this.validateHttpMethod(method);
    const normalizedPath = this.normalizePath(path);
    const validStatus = this.validateHttpStatus(status);

    if (validMethod && validStatus) {
      this.httpRequestCounter.inc({ method: validMethod, path: normalizedPath, status: validStatus });
    }
  }

  incrementHttpErrors(method: string, path: string, status: string) {
    const validMethod = this.validateHttpMethod(method);
    const normalizedPath = this.normalizePath(path);

    if (validMethod) {
      this.httpErrorCounter.inc({ method: validMethod, path: normalizedPath, status });
    }
  }

  observeHttpRequestDuration(method: string, path: string, duration: number) {
    const validMethod = this.validateHttpMethod(method);
    const normalizedPath = this.normalizePath(path);

    if (validMethod) {
      this.httpRequestDurationHistogram.observe({ method: validMethod, path: normalizedPath }, duration);
    }
  }

  // Métodos auxiliares

  private validateHttpMethod(method: string): string | null {
    const upperMethod = method.toUpperCase();
    if (this.validHttpMethods.includes(upperMethod)) {
      return upperMethod;
    }
    this.logger.warn(`Invalid HTTP method: ${method}`);
    return null;
  }

  private normalizePath(path: string): string {
    return path.replace(/\/\d+/g, '/:id');
  }

  private validateHttpStatus(status: string): string | null {
    const statusCode = parseInt(status, 10);
    if (!isNaN(statusCode) && statusCode >= 100 && statusCode <= 599) {
      return status;
    }
    this.logger.warn(`Invalid HTTP status: ${status}`);
    return null;
  }
}