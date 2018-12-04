"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster = require("cluster");
const os = require("os");
const Project_1 = require("./config/Project");
const main_1 = require("./system/main");
require("reflect-metadata");
const proto = process.env.HTTPS ? 'https' : 'http';
if (process.env.SINGLE_THREAD) {
    main_1.default();
    console.log('\x1b[34m', 'Single thread', '\x1b[0m');
    console.log('\x1b[32m', `\n${proto}://localhost${Project_1.default.PORT === 80 ? '' : ':' + Project_1.default.PORT}`, '\x1b[0m');
}
else {
    if (cluster.isMaster) {
        let numCPUs = os.cpus().length;
        console.log('\x1b[34m', 'Multiple thread', '\x1b[0m');
        console.log('\x1b[32m', `\n Master: ${proto}://localhost${Project_1.default.PORT === 80 ? '' : ':' + Project_1.default.PORT}`, '\x1b[0m');
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
            cluster.fork();
        });
        console.log(`Master ${process.pid} is started`);
    }
    else {
        main_1.default();
        console.log(`Worker ${process.pid} is started`);
    }
}
//# sourceMappingURL=server.js.map