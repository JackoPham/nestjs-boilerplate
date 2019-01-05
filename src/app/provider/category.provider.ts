import { Connection } from 'typeorm';
import Category from '@entity/category.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const categoryProviders = [
  {
    provide: DataBaseConstant.CATEGORY_PROVIDER,
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(Category);
    },
    inject: [DataBaseConstant.DEVICE],
  },
];
