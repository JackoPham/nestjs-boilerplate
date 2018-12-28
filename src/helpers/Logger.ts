// import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';
import * as fsextra from 'fs-extra';
import * as chalk from 'chalk';
import * as PrettyError from 'pretty-error'; // it's really handy to make your life easier
import { LoggerOptions } from 'winston';
const winston = require('winston');
const { format } = require('winston');
const { combine, timestamp, prettyPrint, printf } = format;
require('winston-daily-rotate-file');
const myFormat = printf(info => {
  return `${info.timestamp} \n ${info.level}: ${info.message}`;
});
const fileLogName = path.join(
  'logs',
  'application-' + new Date().toLocaleDateString() + '.log'
);
const transport = new winston.transports.File({
  filename: fileLogName,
});
const prettyError = new PrettyError();
export class LoggerService {
  public static loggerOptions: LoggerOptions = {
    format: combine(timestamp(), myFormat),
    transports: [transport],
  };
  static logger = (winston as any).createLogger(LoggerService.loggerOptions);
  static checkExist() {
    if (!fs.existsSync(fileLogName)) {
      fsextra.ensureFileSync(fileLogName);
    }
  }
  static configGlobal(options?: LoggerOptions) {
    this.loggerOptions = options;
  }
  static error(message: string, trace?: any): void {
    LoggerService.checkExist();
    const currentDate = new Date();
    LoggerService.logger.error(
      `${message} => (${trace || 'trace not provided !'})`,
      {
        timestamp: currentDate.toISOString(),
      }
    );
  }
  static warn(message: string): void {
    const currentDate = new Date();
    LoggerService.logger.warn(message, {
      timestamp: currentDate.toISOString(),
    });
  }
  overrideOptions(options: LoggerOptions) {
    LoggerService.logger.configure(options);
  }
  // this method just for printing a cool log in your terminal , using chalk
  static formatedLog(level: string, message: string, error?): void {
    let result = '';
    const color = chalk.default;
    const currentDate = new Date();
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    switch (level) {
      case 'info':
        result = `[${color.blue('INFO')}] ${color.dim.yellow.bold.underline(
          time
        )} ${message}`;
        console.log(result);
        break;
      case 'error':
        result = `[${color.bgRed('ERR')}] ${color.dim.yellow.bold.underline(
          time
        )} ${color.red(message)}`;
        console.log(result);
        if (error) {
          prettyError.render(error, true);
        }
        break;
      case 'warn':
        result = `[${color.yellow('WARN')}] ${color.dim.yellow.bold.underline(
          time
        )} ${message}`;
        console.log(result);
        break;
      default:
        break;
    }
  }
}
