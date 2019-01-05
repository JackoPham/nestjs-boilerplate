import { createConnection } from 'typeorm';
import Project from '@config/Project';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import DataBaseConstant from '@system/enums/database.enum';
import * as chalk from 'chalk';
import Product from '@entity/product.entity';
import Permission from '@entity/permission.entity';
import Category from '@entity/category.entity';
const db = Project.DATABASES.find(db => db.NAME === 'default')!;
const dbDevice = Project.DATABASES.find(db => db.NAME === 'device')!;
const color = chalk.default;
const dbconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: db.HOST,
  port: db.PORT,
  username: db.USERNAME,
  password: db.PASSWORD,
  synchronize: false,
  logging: false,
  logger: 'file',
  entities: [Product, Permission, Category], // not working if using webpack , using import to use with webpack
};
// const dbconfigDevice: PostgresConnectionOptions = {
//   type: 'postgres',
//   host: dbDevice.HOST,
//   port: dbDevice.PORT,
//   username: dbDevice.USERNAME,
//   password: dbDevice.PASSWORD,
//   database: dbDevice.DB_NAME,
//   synchronize: false,
//   logging: true,
//   logger: 'file',
//   entities: [`${__dirname}/../../app/entity/*.entity{.ts,.js}`],
// };
export const databaseProviders = [
  {
    provide: DataBaseConstant.AUTHEN,
    useFactory: async () =>
      await createConnection({ ...dbconfig, database: db.DB_NAME })
        .then(connection => {
          console.info(
            `Database is connected with host ${color.green(
              `http://${connection.options['host']}:${
                connection.options['port']
              }`
            )}[${color.yellow(connection.options['database'] + '')}]`
          );
          return connection;
        })
        .catch(error => {
          console.error(error);
          return error;
        }),
  },
  {
    provide: DataBaseConstant.DEVICE,
    useFactory: async () =>
      await createConnection({ ...dbconfig, database: dbDevice.DB_NAME })
        .then(connection => {
          console.info(
            `Database is connected with host ${color.green(
              `http://${connection.options['host']}:${
                connection.options['port']
              }`
            )}[${color.yellow(connection.options['database'] + '')}]`
          );
          return connection;
        })
        .catch(error => {
          console.error(error);
          return error;
        }),
  },
];
