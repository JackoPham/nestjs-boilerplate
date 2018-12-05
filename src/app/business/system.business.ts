import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class SystemService {
  root(): string {
    try {
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
}
