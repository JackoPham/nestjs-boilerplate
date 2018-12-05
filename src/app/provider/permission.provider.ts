import { Connection, Repository } from 'typeorm';
import { Permission } from '../entity/permission.entity';

export const permissionProviders = [
  {
    provide: 'PermissionRepositoryToken',
    useFactory: (connection: Connection, errr: any) => {
      return connection.getRepository(Permission);
    },
    inject: ['DbConnectionToken'],
  },
];
