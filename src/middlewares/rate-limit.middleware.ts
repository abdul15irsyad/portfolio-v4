import dayjs from 'dayjs';

import { cache, redisService } from '@/redis/redis.util';

export const rateLimit = async ({
  ip,
  feature,
  ttl,
  limit,
}: {
  ip: string;
  feature?: string;
  ttl?: number;
  limit?: number;
}) => {
  ttl = ttl ?? 10 * 60;
  limit = limit ?? 5;
  const key = `${feature}:${ip}`;
  const data = await cache(
    key,
    () => ({
      attempt: 0,
      retryAfter: dayjs().add(ttl!, 'seconds').toISOString(),
    }),
    ttl,
  );

  const newAttempt = data.attempt + 1;
  const newTtl = (await redisService.ttl(key)) ?? ttl;
  if (newAttempt > limit)
    return {
      ok: false,
      options: {
        'Retry-After': data.retryAfter,
        'X-RateLimit-Reset': newTtl,
      },
    };

  await redisService.setex(
    key,
    newTtl,
    JSON.stringify({ ...data, attempt: newAttempt }),
  );
  return {
    ok: true,
    options: {
      'X-RateLimit-Limit': limit,
      'X-RateLimit-Remaining': limit - newAttempt,
      'X-RateLimit-Reset': newTtl,
      'Retry-After': data.retryAfter,
    },
  };
};
