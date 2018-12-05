export default class RedisModel {
  public key: string;
  public value?: any;
  public type: string;
  public field?: string;
  public data?: any;
  public expired?: number;
}
