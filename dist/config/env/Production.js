"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluha_ezcode_helper_1 = require("aluha-ezcode-helper");
const config = aluha_ezcode_helper_1.SystemHelper.Production;
class Production {
}
Production.DATABASES = [
    {
        NAME: 'default',
        HOST: config.DATABASES.POSTGRES.HOST,
        PORT: config.DATABASES.POSTGRES.PORT,
        DB_NAME: config.DATABASES.POSTGRES.DB_NAME,
        USERNAME: config.DATABASES.POSTGRES.USERNAME,
        PASSWORD: config.DATABASES.POSTGRES.PASSWORD,
    },
    {
        NAME: 'test',
        HOST: 'localhost',
        PORT: 27017,
        DB_NAME: 'nodejs-boilerplate',
        USERNAME: '',
        PASSWORD: '',
    },
];
Production.RABBITMQ = {
    HOST: config.RABBITMQ.HOST,
    USER: config.RABBITMQ.USER,
    PWD: config.RABBITMQ.PWD,
};
Production.eventStoreSettings = () => ({
    type: 'mongodb',
    host: config.EVENT_STORE.HOST,
    port: config.EVENT_STORE.PORT,
    dbName: config.EVENT_STORE.DB_NAME,
    username: config.EVENT_STORE.USERNAME,
    password: config.EVENT_STORE.PASSWORD,
    eventsCollectionName: 'events',
    snapshotsCollectionName: 'snapshots',
    transactionsCollectionName: 'transactions',
    options: {
        useNewUrlParser: true,
    },
});
Production.SMTP = {
    AUTHENTICATOR: {
        USERNAME: '[Authenticator Email]',
        PASSWORD: '[Password]',
    },
    SENDER: {
        NAME: '[Sender Name]',
        EMAIL: '[Sender Email]',
    },
};
exports.default = Production;
//# sourceMappingURL=Production.js.map