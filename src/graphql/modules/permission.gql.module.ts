import { Module } from '@nestjs/common';
import { PermissionResolvers } from '../resolvers/permission.resolvers';
import { PerService } from '../per.services';

@Module({
  providers: [PerService, PermissionResolvers],
})
export class PermissionGqlModule {}
