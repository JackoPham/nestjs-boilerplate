import { createConnection } from 'typeorm';
import Project from '../../config/Project';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
const db = Project.DATABASES.find(db => db.NAME === 'default')!;
const dbDevice = Project.DATABASES.find(db => db.NAME === 'device')!;

const dbconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: db.HOST,
  port: db.PORT,
  username: db.USERNAME,
  password: db.PASSWORD,
  database: db.DB_NAME,
  synchronize: false,
  logging: true,
  logger: 'file',
  entities: [`${__dirname}/../../app/entity/*.entity{.ts,.js}`],
};
const dbconfigDevice: PostgresConnectionOptions = {
  type: 'postgres',
  host: dbDevice.HOST,
  port: dbDevice.PORT,
  username: dbDevice.USERNAME,
  password: dbDevice.PASSWORD,
  database: dbDevice.DB_NAME,
  synchronize: false,
  logging: true,
  logger: 'file',
  entities: [`${__dirname}/../../app/entity/*.entity{.ts,.js}`],
};
export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection(dbconfig)
        .then(connection => {
          console.info(
            '\x1b[45m',
            `Database is connected with host http://${
              connection.options['host']
            }:${connection.options['port']}/dbName:${
              connection.options['database']
            }`,
            '\x1b[0m'
          );
          return connection;
        })
        .catch(error => {
          console.error(error);
          return error;
        }),
  },
  {
    provide: 'DbDeviceConnectionToken',
    useFactory: async () =>
      await createConnection(dbconfigDevice)
        .then(connection => {
          console.info(
            '\x1b[45m',
            `Database is connected with host http://${
              connection.options['host']
            }:${connection.options['port']}/dbName:${
              connection.options['database']
            }`,
            '\x1b[0m'
          );
          return connection;
        })
        .catch(error => {
          console.error(error);
          return error;
        }),
  },
];
