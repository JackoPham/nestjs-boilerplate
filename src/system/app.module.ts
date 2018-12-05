import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SystemModule } from '../app/module/system.module';
import { PermissionModule } from '../app/module/permission.module';
import { ProductModule } from 'src/app/module/product.module';

// import { AuthenMiddleware } from './middleware/AuthenMiddleware';
// import SystemController from '../controllers/system.controller';
// import { PermissionModule } from '../module/permission.module';

@Module({
  imports: [SystemModule, PermissionModule, ProductModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthenMiddleware).forRoutes(SystemController);
  }
}
