import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SystemModule } from '../app/module/system.module';
import { PermissionModule } from '../app/module/permission.module';
import { ProductModule } from '../app/module/product.module';
import {
  GraphQLModule,
  GraphQLFactory,
  GqlModuleOptions,
} from '@nestjs/graphql';
import { CategoryModule } from '../app/module/category.module';
import { ApolloServer } from 'apollo-server-express';

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
