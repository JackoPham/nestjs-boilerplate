import { Module } from '@nestjs/common';
import CategoryController from '@controllers/category.controller';
import { CategoryService } from '@business/category.business';
import { DatabaseModule } from '@system/database/database.module';
import { categoryProviders } from '@provider/category.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryProviders, CategoryService],
})
export class CategoryModule {}
