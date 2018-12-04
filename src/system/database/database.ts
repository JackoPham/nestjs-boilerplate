import { getConnectionOptions, createConnection, Db } from 'typeorm';
import Project from '../../config/Project';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// export class Database {
//   static async connect() {

//     await createConnection(dbconfig)
//       .then(connection => {
//         console.info(
//           `Database is connected with host http://${db.HOST}:${db.PORT}`
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
// }
const db = Project.DATABASES.find(db => db.NAME === 'default')!;
const dbconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: db.HOST,
  port: db.PORT,
  username: db.USERNAME,
  password: db.PASSWORD,
  database: db.DB_NAME,
  synchronize: true,
  logging: true,
  logger: 'file',
  entities: ['dest/app/entity/*.js'],
  cli: {
    entitiesDir: 'dest/app/entity',
  },
};
export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection(dbconfig),
  },
];
