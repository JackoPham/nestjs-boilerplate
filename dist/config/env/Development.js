"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluha_ezcode_helper_1 = require("aluha-ezcode-helper");
const config = aluha_ezcode_helper_1.SystemHelper.Development;
class Development {
}
Development.DATABASES = [
    {
        NAME: 'default',
        HOST: config.DATABASES.POSTGRES.HOST,
        PORT: config.DATABASES.POSTGRES.PORT,
        DB_NAME: config.DATABASES.DATABASE_DYAMICS
            ? config.DATABASES.DATABASE_DYAMICS.ORDER.DB_NAME
            : config.DATABASES.POSTGRES.DB_NAME,
        USERNAME: config.DATABASES.POSTGRES.USERNAME,
        PASSWORD: config.DATABASES.POSTGRES.PASSWORD,
    },
    {
        NAME: 'test',
        HOST: 'localhost',
        PORT: 5432,
        DB_NAME: 'swap-ez-admin-order',
        USERNAME: '',
        PASSWORD: '',
    },
];
Development.RABBITMQ = {
    HOST: config.RABBITMQ.HOST,
    USER: config.RABBITMQ.USER,
    PWD: config.RABBITMQ.PWD,
};
Development.eventStoreSettings = () => ({
    type: 'mongodb',
    host: config.EVENT_STORE.HOST,
    port: config.EVENT_STORE.PORT,
    dbName: config.EVENT_STORE.DB_NAME,
    username: config.EVENT_STORE.USERNAME,
    password: config.EVENT_STORE.PASSWORD,
    eventsCollectionName: 'events',
    snapshotsCollectionName: 'snapshots',
    transactionsCollectionName: 'transactions',
});
Development.SMTP = {
    AUTHENTICATOR: {
        USERNAME: '[Authenticator Email]',
        PASSWORD: '[Password]',
    },
    SENDER: {
        NAME: '[Sender Name]',
        EMAIL: '[Sender Email]',
    },
};
exports.default = Development;
//# sourceMappingURL=Development.js.map