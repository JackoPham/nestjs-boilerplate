declare class Production {
    static DATABASES: {
        NAME: string;
        HOST: string;
        PORT: number;
        DB_NAME: string;
        USERNAME: string;
        PASSWORD: string;
    }[];
    static RABBITMQ: {
        HOST: string;
        USER: string;
        PWD: string;
    };
    static eventStoreSettings: () => {
        type: string;
        host: string;
        port: number;
        dbName: string;
        username: string;
        password: string;
        eventsCollectionName: string;
        snapshotsCollectionName: string;
        transactionsCollectionName: string;
        options: {
            useNewUrlParser: boolean;
        };
    };
    static SMTP: {
        AUTHENTICATOR: {
            USERNAME: string;
            PASSWORD: string;
        };
        SENDER: {
            NAME: string;
            EMAIL: string;
        };
    };
}
export default Production;
