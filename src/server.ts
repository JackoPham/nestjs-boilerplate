import * as cluster from 'cluster';
import * as os from 'os';
import Project from '@config/Project';
import createServer from '@system/main';
import 'reflect-metadata';
import ServiceSystem from '@system/ServiceSystem';

const proto = process.env.HTTPS ? 'https' : 'http';
if (process.env.SINGLE_THREAD) {
  createServer();
  startService();
  console.log('\x1b[34m', 'Single thread', '\x1b[0m');
  console.log(
    '\x1b[32m',
    `\n${proto}://localhost${Project.PORT === 80 ? '' : ':' + Project.PORT}`,
    '\x1b[0m'
  );
} else {
  if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log('\x1b[34m', 'Multiple thread', '\x1b[0m');
    console.log(
      '\x1b[32m',
      `\n Master: ${proto}://localhost${
        Project.PORT === 80 ? '' : ':' + Project.PORT
      }`,
      '\x1b[0m'
    );
    // SubscribeEvent.init();

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      cluster.fork();
    });
    console.log(`Master ${process.pid} is started`);
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    createServer();
    startService();
    console.log(`Worker ${process.pid} is started`);
  }
}

function startService() {
  ServiceSystem.initServer();
}
