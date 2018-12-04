import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class SystemService {
  root(): string {
    try {
      const a = JSON.parse('sasd');
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
}
