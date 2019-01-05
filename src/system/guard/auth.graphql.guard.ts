import {
  ExecutionContext,
  Injectable,
  CanActivate,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Authen } from '@helpers/AuthenHelper';

@Injectable()
export class GraphqlAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = ctx.getContext().request;
    const token = request.headers['authorization'];
    const result = await Authen.checkPermission(token, roles);
    if (!result) throw new UnauthorizedException('Not access deneid');
    return true;
  }
}
