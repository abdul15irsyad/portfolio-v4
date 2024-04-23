import { cache, redisService } from '@/redis/redis.util';
import { getQuoteOfTheDay } from '@/services/quote-of-the-day.service';
import { QuoteOfTheDay } from '@/types/quote-of-the-day.type';
import dayjs from 'dayjs';
import { NextResponse } from 'next/server';

export async function GET() {
  const date = dayjs().format('YYYY-MM-DD');
  console.log('date quote of the day', date);
  const quoteOfTheDay = await cache(
    `quoteOfTheDay:${date}`,
    async () => {
      let quote: QuoteOfTheDay, quoteIds: string[];
      let i = 0;
      do {
        quote = await getQuoteOfTheDay();
        quoteIds = JSON.parse(
          (await redisService.get('quoteOfTheDayIds')) ?? '[]',
        );
        // if (quoteIds.find((quoteId) => quoteId === quote._id))
        //   console.log(quote.content);
        i = i + 1;
      } while (quoteIds.find((quoteId) => quoteId === quote._id) && i < 20);
      // console.log(i);
      await redisService.setex(
        'quoteOfTheDayIds',
        365 * 24 * 60 * 60,
        JSON.stringify(
          [...quoteIds, quote._id].sort((a, b) => (a < b ? -1 : 1)),
        ),
      );
      return {
        _id: quote._id,
        author: quote.author,
        content: quote.content,
        tags: quote.tags,
      };
    },
    24 * 60 * 60,
  );
  return NextResponse.json({
    message: 'get quote of the day',
    data: {
      date,
      quote: quoteOfTheDay,
    },
  });
}
