"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Project_1 = require("../config/Project");
require("reflect-metadata");
const AnyExceptionFilter_1 = require("./middleware/AnyExceptionFilter");
const ExceptionFilter_1 = require("./middleware/ExceptionFilter");
const AuthenInterceptor_1 = require("./middleware/AuthenInterceptor");
function createServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const port = Project_1.default.PORT;
        const expressApp = require('express')();
        const server = require('http').createServer(expressApp);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, expressApp);
        app.setGlobalPrefix('api');
        app.useGlobalFilters(new AnyExceptionFilter_1.AnyExceptionFilter(), new ExceptionFilter_1.HttpExceptionFilter());
        app.useGlobalInterceptors(new AuthenInterceptor_1.AuthenInterceptor());
        yield app.init();
        server.listen(port);
        server.on('error', onError);
        server.on('listening', () => {
            let addr = server.address();
            let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
            console.log('\x1b[35m', 'Listening on ' + bind, '\x1b[0m');
        });
        function onError(error) {
            if (error.syscall !== 'listen')
                throw error;
            let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
            switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }
    });
}
exports.default = createServer;
//# sourceMappingURL=main.js.map