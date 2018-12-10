import { LoggerService } from '@nestjs/common';
import { LogHelper } from 'aluha-ezcode-helper';

export class Logger implements LoggerService {
  log(message: string) {}
  error(message: string, trace: string) {
    LogHelper.writeLog('', `Error: ${message}\n`);
  }
  warn(message: string) {
    console.warn(message);
    LogHelper.writeLog('', `Warning: ${message}\n`);
  }
}
