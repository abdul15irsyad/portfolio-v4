import { cache } from '@/redis/redis.util';
import { getQuoteOfTheDay } from '@/services/quote-of-the-day.service';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { NextResponse } from 'next/server';
dayjs.extend(utc);
dayjs.extend(timezone);

export async function GET() {
  const date = dayjs().utc().format('YYYY-MM-DD');
  console.log('date quote of the day', date);
  const quoteOfTheDay = await cache(
    `quoteOfTheDay:${date}`,
    () => getQuoteOfTheDay(),
    5 * 60,
  );
  return NextResponse.json({
    message: 'get quote of the day',
    data: {
      date,
      quote: quoteOfTheDay,
    },
  });
}
