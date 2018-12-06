import { Connection } from 'typeorm';
import Category from '../entity/category.entity';

export const categoryProviders = [
  {
    provide: 'CategoryRepositoryToken',
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(Category);
    },
    inject: ['DbDeviceConnectionToken'],
  },
];
