interface IProject {
    HOST: string;
    PORT: number;
    PORT_CACHING: number;
    PROJECT_NAME: string;
    AUTHENTICATION_EXPIRES: number;
    DATABASES: [{
        NAME: string;
        HOST: string;
        PORT: number;
        DB_NAME: string;
        USERNAME: string;
        PASSWORD: string;
    }];
    RABBITMQ: {
        HOST: string;
        USER: string;
        PWD: string;
    };
    eventStoreSettings: any;
    SMTP: {
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
declare const _default: IProject;
export default _default;
