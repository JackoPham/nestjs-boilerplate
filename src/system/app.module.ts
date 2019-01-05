import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SystemModule } from '@module/system.module';
import { PermissionModule } from '@module/permission.module';
import { ProductModule } from '@module/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoryModule } from '@module/category.module';

@Module({
  imports: [
    SystemModule,
    PermissionModule,
    ProductModule,
    CategoryModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => {
        return {
          request: req,
        };
      },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthenMiddleware).forRoutes(PermissionController);
  }
}
