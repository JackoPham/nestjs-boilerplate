import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { LogHelper } from 'aluha-ezcode-helper';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = 503;
    const msgData = JSON.stringify(exception);
    if (msgData !== '{}') {
      LogHelper.writeLog(
        '',
        `${request.method} ${request.originalUrl}\n${msgData}\n`
      );
    } else {
      LogHelper.writeLog(
        '',
        `${request.method} ${request.originalUrl}\n${exception.toString()}\n`
      );
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: exception.message,
    });
  }
}
