import Product from '@entity/product.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const productProviders = [
  {
    provide: DataBaseConstant.PRODUCT_PROVIDER,
    useFactory: (connection: any, errr: any) => {
      if (
        connection.code === 'ETIMEDOUT' ||
        connection.code === 'ECONNREFUSED'
      ) {
        console.log('Connection error: ', JSON.stringify(connection));
      } else return connection.getRepository(Product);
    },
    inject: [DataBaseConstant.DEVICE],
  },
];
