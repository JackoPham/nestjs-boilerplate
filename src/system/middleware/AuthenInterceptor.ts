import {
  Interceptor,
  NestInterceptor,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    stream$: Observable<any>
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const token = request.headers['authorization'];
    if (token) request.headers['authorization'] = 'Authen:' + token;
    else request.headers['authorization'] = 'none';
    const now = Date.now();
    return stream$.do(() => console.log(`After... ${Date.now() - now}ms`));
  }
}
