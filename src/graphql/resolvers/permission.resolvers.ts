import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { PerService } from '../per.services';
import { PermissionService } from '../../app/business/permission.business';

@Resolver('cart')
export class PermissionResolvers {
  constructor(private readonly permissionService: PermissionService) {}

  @Query('getAll')
  async getAll() {
    return await this.permissionService.findAll();
  }
}
