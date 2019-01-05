import { Connection } from 'typeorm';
import Permission from '@entity/permission.entity';
import DataBaseConstant from '@system/enums/database.enum';

export const permissionProviders = [
  {
    provide: DataBaseConstant.PERMISSION_PROVIDER,
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(Permission);
    },
    inject: [DataBaseConstant.AUTHEN],
  },
];
