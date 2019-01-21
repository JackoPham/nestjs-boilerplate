import { Module } from '@nestjs/common';
import SystemController from '@controllers/system.controller';
import { SystemService } from '@business/system.business';

@Module({
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule {}
