// import * as winston from 'winston';
import * as path from 'path';
import * as chalk from 'chalk';
import * as PrettyError from 'pretty-error'; // it's really handy to make your life easier
import { LoggerOptions } from 'winston';
const winston = require('winston');
const { format } = require('winston');
const { combine, timestamp, prettyPrint } = format;
require('winston-daily-rotate-file');
const transport = new winston.transports.DailyRotateFile({
  filename: path.join('logs', 'application-%DATE%.log'),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});
export class LoggerService {
  private readonly logger: any;
  private readonly prettyError = new PrettyError();
  public static loggerOptions: LoggerOptions = {
    format: combine(timestamp(), format.json()),
    transports: [transport],
  };
  constructor(private context: string, transport?) {
    this.logger = (winston as any).createLogger(LoggerService.loggerOptions);
    this.prettyError.skipNodeFiles();
    this.prettyError.skipPackage('express', '@nestjs/common', '@nestjs/core');
  }
  static configGlobal(options?: LoggerOptions) {
    this.loggerOptions = options;
  }
  log(message: string): void {
    // const currentDate = new Date();
    // this.logger.info(message, {
    //   timestamp: currentDate.toISOString(),
    //   context: this.context,
    // });
    // this.formatedLog('info', message);
  }
  error(message: string, trace?: any): void {
    const currentDate = new Date();
    this.logger.error(`${message} => (${trace || 'trace not provided !'})`, {
      timestamp: currentDate.toISOString(),
      context: this.context,
    });
    this.formatedLog('error', message, trace);
  }
  warn(message: string): void {
    const currentDate = new Date();
    this.logger.warn(message, {
      timestamp: currentDate.toISOString(),
      context: this.context,
    });
    this.formatedLog('warn', message);
  }
  overrideOptions(options: LoggerOptions) {
    this.logger.configure(options);
  }
  // this method just for printing a cool log in your terminal , using chalk
  private formatedLog(level: string, message: string, error?): void {
    let result = '';
    const color = chalk.default;
    const currentDate = new Date();
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    switch (level) {
      case 'info':
        result = `[${color.blue('INFO')}] ${color.dim.yellow.bold.underline(
          time
        )} [${color.green(this.context)}] ${message}`;
        console.log(result);
        break;
      case 'error':
        result = `[${color.bgRed('ERR')}] ${color.dim.yellow.bold.underline(
          time
        )} [${color.green(this.context)}] ${color.red(message)}`;
        console.log(result);
        if (error) {
          this.prettyError.render(error, true);
        }
        break;
      case 'warn':
        result = `[${color.yellow('WARN')}] ${color.dim.yellow.bold.underline(
          time
        )} [${color.green(this.context)}] ${message}`;
        console.log(result);
        break;
      default:
        break;
    }
  }
}
