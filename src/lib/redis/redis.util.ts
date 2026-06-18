import { REDIS_TTL } from './redis.config';
import { RedisService } from './redis.service';

export const redisService = new RedisService();

export const cache = async <T extends object | null>(
  key: string,
  getData: () => Promise<T> | T,
  ttlInSeconds?: number,
) => {
  const cachedData = await redisService.get(key);
  const data = cachedData
    ? (JSON.parse(cachedData, cacheRevive) as T)
    : await getData();
  if (!cachedData && data && (Array.isArray(data) ? data.length > 0 : true)) {
    await redisService.setex(
      key,
      ttlInSeconds ?? REDIS_TTL,
      JSON.stringify(data),
    );
  }
  return data;
};

export const cacheRevive = (key: string, value: string) => {
  if (['createdAt', 'updatedAt', 'publishedAt', 'deletedAt'].includes(key))
    return value && new Date(value);
  return value;
};
