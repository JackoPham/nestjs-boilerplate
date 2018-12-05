"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluha_ezcode_helper_1 = require("aluha-ezcode-helper");
const config = aluha_ezcode_helper_1.SystemHelper.Development;
class Default {
}
Default.HOST = config.SERVER.DOMAIN;
Default.PORT = config.SERVER.PORT;
Default.PORT_CACHING = 3000;
Default.PROJECT_NAME = 'Kenry nice';
Default.AUTHENTICATION_EXPIRES = 15;
class Project {
    static getConfiguration() {
        const envConfig = require(`./env/${process.env.NODE_ENV}`);
        const config = Object.assign({}, Default, envConfig.default);
        return config;
    }
}
Object.seal(Project);
exports.default = Project.getConfiguration();
//# sourceMappingURL=Project.js.map