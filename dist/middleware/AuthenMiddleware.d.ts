import { NestMiddleware, MiddlewareFunction } from '@nestjs/common';
export declare class AuthenMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction;
}
