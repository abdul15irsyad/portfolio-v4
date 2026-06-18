import Redis, { RedisOptions } from 'ioredis';

// const REDIS_HOST = process.env.REDIS_HOST ?? 'localhost';
// const REDIS_PORT = process.env.REDIS_PORT ? +process.env.REDIS_PORT : 6379;
// const REDIS_USERNAME = process.env.REDIS_USERNAME ?? 'redis-username';
// const REDIS_PASSWORD = process.env.REDIS_PASSWORD ?? 'redis-password';
// const REDIS_DB = process.env.REDIS_DB ? +process.env.REDIS_DB : 0;

export const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379/0';
export const REDIS_TTL = process.env.REDIS_TTL ? +process.env.REDIS_TTL : 1800;

const redisOptions: RedisOptions = {
  connectionName: 'portfolio',
  retryStrategy: () => null,
};
const redisClientSingleton = () => new Redis(REDIS_URL, redisOptions);

type RedisClientSingleton = ReturnType<typeof redisClientSingleton>;

const globalForRedis = globalThis as unknown as {
  redis: RedisClientSingleton | undefined;
};

export const redis = globalForRedis.redis ?? redisClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis;
