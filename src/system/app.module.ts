import * as path from 'path';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SystemModule } from '../module/system.module';
import { AuthenMiddleware } from '../middleware/AuthenMiddleware';
import SystemController from '../controllers/system.controller';

@Module({
  imports: [SystemModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthenMiddleware).forRoutes(SystemController);
  }
}
