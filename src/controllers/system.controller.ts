import { Get, Controller, Headers } from '@nestjs/common';
import { SystemService } from '../app/business/system.business';

@Controller('system')
class SystemController {
  constructor(private readonly appService: SystemService) {}

  @Get('test')
  root(@Headers('authorization') token: string): string {
    return this.appService.root();
  }
}
export default SystemController;
