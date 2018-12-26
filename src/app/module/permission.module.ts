import { Module } from '@nestjs/common';
import PermissionController from '../../controllers/permission.controller';
import { PermissionService } from '../../app/business/permission.business';
import { DatabaseModule } from '../../system/database/database.module';
import { permissionProviders } from '../../app/provider/permission.provider';
import { PermissionResolvers } from '../../graphql/resolvers/permission.resolvers';

@Module({
  imports: [DatabaseModule],
  controllers: [PermissionController],
  providers: [...permissionProviders, PermissionService, PermissionResolvers],
})
export class PermissionModule {}
