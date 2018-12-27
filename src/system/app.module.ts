import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SystemModule } from '../app/module/system.module';
import { PermissionModule } from '../app/module/permission.module';
import { ProductModule } from '../app/module/product.module';
import { GraphQLModule } from '@nestjs/graphql';
// import { AuthenMiddleware } from './middleware/AuthenMiddleware';
import { CategoryModule } from '../app/module/category.module';
// import PermissionController from '../controllers/permission.controller';

@Module({
  imports: [
    SystemModule,
    PermissionModule,
    ProductModule,
    CategoryModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthenMiddleware).forRoutes(PermissionController);
  }
}
