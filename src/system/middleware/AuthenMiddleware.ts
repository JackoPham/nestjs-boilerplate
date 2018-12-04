import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class AuthenMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const token = req.headers['authorization'];
      if (token) req.headers['authorization'] = 'Authen:' + token;
      else req.headers['authorization'] = 'none';
      next();
    };
  }
}
