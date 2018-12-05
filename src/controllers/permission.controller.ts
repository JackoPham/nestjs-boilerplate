import { Get, Controller, Headers } from '@nestjs/common';
import { PermissionService } from '../app/business/permission.business';
import { ApiUseTags } from '@nestjs/swagger';

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
}

export default PermissionController;
