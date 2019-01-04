import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from '../../app/entity/category.entity';
import Permission from '../../app/entity/permission.entity';
import Product from '../../app/entity/product.entity';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
