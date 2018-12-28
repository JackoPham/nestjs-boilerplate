import { Get, Controller, Headers, Post, Body } from '@nestjs/common';
import { PermissionService } from '../app/business/permission.business';
import { ApiUseTags } from '@nestjs/swagger';
import { Permission } from '../app/entity/permission.entity';

@ApiUseTags('permissions')
@Controller('permission')
class PermissionController {
  constructor(private readonly appService: PermissionService) {}

  @Get('test')
  root(@Headers('authorization') token: string): string {
    return this.appService.root();
  }
  @Get('list')
  async getList() {
    return await this.appService.findAll();
  }
  @Post('create')
  async create(@Body() data: Permission) {
    return await this.appService.create(data);
  }
}

export default PermissionController;
