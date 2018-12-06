import { SystemHelper, RedisConfig } from 'aluha-ezcode-helper';
import { RedisClient } from 'aluha-ezcode-helper';
const config =
  process.env.NODE_ENV === 'Development'
    ? SystemHelper.Development
    : SystemHelper.Production;

export default class ServiceSystem {
  static initServer() {
    if (config.SERVICE.REDIS) {
      const configRedis: RedisConfig = {
        HOST: config.REDIS.HOST,
        PORT: config.REDIS.PORT,
        PASSWORD: config.REDIS.PASSWORD,
      };
      RedisClient.connect(configRedis);
    }
  }
}
