import {
  Get,
  Controller,
  Headers,
  Post,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
} from '@nestjs/common';
import { ApiConsumes, ApiImplicitFile } from '@nestjs/swagger';
import { SystemService } from '@business/system.business';

@Controller('system')
class SystemController {
  constructor(private readonly appService: SystemService) {}

  @Get('test')
  root(@Headers('authorization') token: string): string {
    return this.appService.root();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({
    name: 'file',
    required: true,
    description: 'List of cats',
  })
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
export default SystemController;
