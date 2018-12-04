import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Project from '../config/Project';

import 'reflect-metadata';
import { AnyExceptionFilter } from './middleware/AnyExceptionFilter';
import { HttpExceptionFilter } from './middleware/ExceptionFilter';
import { AuthenInterceptor } from './middleware/AuthenInterceptor';

async function createServer() {
  const port = Project.PORT;
  const expressApp = require('express')();
  const server = require('http').createServer(expressApp);
  const app = await NestFactory.create(AppModule, expressApp);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AnyExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalInterceptors(new AuthenInterceptor());
  await app.init();
  server.listen(port);
  server.on('error', onError);

  server.on('listening', () => {
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('\x1b[35m', 'Listening on ' + bind, '\x1b[0m');
  });

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') throw error;

    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    /* eslint-disable */
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
    /* eslint-enable */
  }
}
export default createServer;
