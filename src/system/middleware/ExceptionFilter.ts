import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { LogHelper } from 'aluha-ezcode-helper';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const msgData = JSON.stringify(exception);
    LogHelper.writeLog(
      '',
      `AnyExceptionFilter.\n medthod: ${request.method} url: ${
        request.originalUrl
      }\nerror: \n${msgData}\n`
    );
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: exception.message,
    });
  }
}
