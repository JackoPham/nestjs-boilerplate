import { Connection } from 'typeorm';
import Product from '../entity/product.entity';

export const productProviders = [
  {
    provide: 'ProductRepositoryToken',
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(Product);
    },
    inject: ['DbDeviceConnectionToken'],
  },
];
