import Redis, { RedisKey } from 'ioredis';

import { redis } from './redis.config';

export class RedisService {
  private client: Redis = redis;

  async get(key: string) {
    try {
      return await this.client.get(key);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async set(key: RedisKey, value: string | number | Buffer) {
    try {
      return await this.client.set(key, value);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async setex(
    key: RedisKey,
    seconds: string | number,
    value: string | number | Buffer,
  ) {
    try {
      return await this.client.setex(key, seconds, value);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
