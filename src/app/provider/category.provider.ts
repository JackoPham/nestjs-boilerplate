import { Connection } from 'typeorm';
import Category from '@entity/category.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const categoryProviders = [
  {
    provide: DataBaseConstant.CATEGORY_PROVIDER,
    useFactory: (connection: any, errr: any) => {
      if (
        connection.code === 'ETIMEDOUT' ||
        connection.code === 'ECONNREFUSED'
      ) {
        console.log('Connection error: ', JSON.stringify(connection));
      } else return connection.getRepository(Category);
    },
    inject: [DataBaseConstant.DEVICE],
  },
];
