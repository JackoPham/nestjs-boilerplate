import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissionService } from '../../app/business/permission.business';
import { UseGuards, UseFilters } from '@nestjs/common';
import { Authorized } from '../../system/decorator/roles.decorator';
import { GraphqlAuthGuard } from '../../system/guard/auth.graphql.guard';
import { AnyExceptionFilter } from '../../system/middleware/AnyExceptionFilter';

@Resolver('cart')
@UseGuards(GraphqlAuthGuard)
export class PermissionResolvers {
  constructor(private readonly permissionService: PermissionService) {}

  /**
   * {
   *   getAll{name,controller}
   * }
   */
  @Query('getAll')
  @Authorized()
  async getAll() {
    return await this.permissionService.findAll();
  }

  /**
   * mutation{
   * create(createInput:{name:"kenry",controller:"permission",actionName:"ừ tì name",method:"lại medthod"}){
   * id,
   * actionName
   * }
   * }
   */
  @Mutation('create')
  create(@Args('createInput') data: any) {
    return this.permissionService.create(data);
  }
}
