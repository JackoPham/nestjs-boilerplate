import { NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
export declare class AuthenInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> | Promise<Observable<any>>;
}
