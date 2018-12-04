import { Module } from '@nestjs/common';
import { databaseProviders } from './database';

@Module({
  components: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
