import Permission from '@entity/permission.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const permissionProviders = [
  {
    provide: DataBaseConstant.PERMISSION_PROVIDER,
    useFactory: (connection: any, errr: any) => {
      if (
        connection.code === 'ETIMEDOUT' ||
        connection.code === 'ECONNREFUSED'
      ) {
        console.log('Connection error: ', JSON.stringify(connection));
      } else return connection.getRepository(Permission);
    },
    inject: [DataBaseConstant.AUTHEN],
  },
];
