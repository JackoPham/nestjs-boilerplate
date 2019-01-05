import { Connection } from 'typeorm';
import Product from '@entity/product.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const productProviders = [
  {
    provide: DataBaseConstant.PRODUCT_PROVIDER,
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(Product);
    },
    inject: [DataBaseConstant.DEVICE],
  },
];
