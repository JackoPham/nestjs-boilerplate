import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app.module';
import Project from '../config/Project';
import 'reflect-metadata';
import { AnyExceptionFilter } from './middleware/AnyExceptionFilter';
import { HttpExceptionFilter } from './middleware/ExceptionFilter';
import { AuthenInterceptor } from './middleware/AuthenInterceptor';
import SwaggerSetting from './swagger';
import { LoggerService } from './middleware/AluhaLogger';
import { ValidationPipe } from '@nestjs/common';
import * as chalk from 'chalk';
const color = chalk.default;
const fs = require('fs');
const path = require('path');

async function createServer() {
  const keyFile = fs.readFileSync(
    path.join(__dirname, '../keys/swap-order-selfsigned.key')
  );
  const certFile = fs.readFileSync(
    path.join(__dirname, '../keys/swap-order-selfsigned.crt')
  );
  const proto = process.env.HTTPS ? 'https' : 'http';
  const port = Project.PORT;
  const expressApp = require('express')();
  const server = require(proto).createServer(expressApp);
  const app = await NestFactory.create(AppModule, expressApp, {
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    },
    logger: new LoggerService('Aluha-Backend'),
    cors: true,
  });

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AnyExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalInterceptors(new AuthenInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  SwaggerSetting.init(app);
  await app.init();
  server.listen(port);
  server.on('error', onError);
  server.on('listening', () => {
    const addr = server.address();
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log(color.gray('Listening on ' + bind));
  });

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
  }
}
export default createServer;
