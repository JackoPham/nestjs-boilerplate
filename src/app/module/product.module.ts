import { Module } from '@nestjs/common';
import ProductController from '@controllers/product.controller';
import { ProductService } from '@business/product.business';
import { DatabaseModule } from '@system/database/database.module';
import { productProviders } from '@provider/product.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [...productProviders, ProductService],
})
export class ProductModule {}
