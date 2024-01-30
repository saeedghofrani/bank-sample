import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor() {}
  async catch(exception: HttpException, host: ArgumentsHost) {
    console.log(
      'asdgfiajshdgfoasdfiuiruisdhkjahwefipuhaslvjbWPIEUFHIASJVLUHRFUHSDFVUIURHIUsdjflkjshdflgkjsdf',
    );
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const date = Date.now();
    switch (status) {
      case 400: {
        response.status(status).json({
          msg: exception['response'],
          status: status,
          timestamp: date,
          path: request.url,
          method: request.method,
        });
        break;
      }
      case 401: {
        response.status(status).json({
          status: status,
          timestamp: date,
          path: request.url,
          method: request.method,
        });
        break;
      }
      case 402: {
        response.status(status).json({
          msg: exception,
          status: status,
          timestamp: date,
          path: request.url,
          method: request.method,
        });
        break;
      }
      case 403: {
        response.status(status).json({
          msg: exception['response'],
          status: status,
          timestamp: date,
          path: request.url,
          method: request.method,
        });
        break;
      }
      case 409: {
        response.status(status).json({
          msg: exception,
          status: status,
          timestamp: date,
          path: request.url,
          method: request.method,
        });
        break;
      }
      case 500: {
        response.status(status).json({
          msg: exception,
          status: status,
          timestamp: date,
          path: request.url,
          method: request.method,
          body: request.body,
        });
        break;
      }
    }
  }
}
