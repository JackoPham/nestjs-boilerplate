import { SystemHelper } from 'aluha-ezcode-helper';

const config = SystemHelper.Development;
class Default {
  static HOST: string = config.SERVER.DOMAIN;
  static PORT: number = config.SERVER.PORT;
  static PORT_CACHING = 3000;
  static PROJECT_NAME = 'Kenry nice';
  static AUTHENTICATION_EXPIRES = 15; // Days
}

interface IProject {
  HOST: string;
  PORT: number;
  PORT_CACHING: number;
  PROJECT_NAME: string;
  AUTHENTICATION_EXPIRES: number;

  DATABASES: [
    {
      NAME: string;
      HOST: string;
      PORT: number;
      DB_NAME: string;
      USERNAME: string;
      PASSWORD: string;
    }
  ];

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
function capitalize(value) {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return '';
}
class Project {
  static getConfiguration() {
    // Get the current config
    const mode = capitalize(process.env.NODE_ENV);
    const envConfig = require(`./env/${mode}`);
    const config = {
      ...Default,
      ...envConfig.default,
    };
    return config;
  }
}

Object.seal(Project);
export default <IProject>Project.getConfiguration();
