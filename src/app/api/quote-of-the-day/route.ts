import dayjs from 'dayjs';
import { NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import {
  defaultQuoteOfTheDay,
  getQuoteOfTheDay,
} from '@/services/quote-of-the-day.service';
import { handleError } from '@/utils/error.util';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const date = dayjs().format('YYYY-MM-DD');
    const quoteOfTheDay = await cache(
      `quoteOfTheDay:${date}`,
      () => {
        if (date === '2025-08-25') return defaultQuoteOfTheDay;

        return getQuoteOfTheDay();
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
  } catch (error) {
    handleError(error);
    return NextResponse.json(
      {
        message: 'internal server error',
      },
      { status: 500 },
    );
  }
}
