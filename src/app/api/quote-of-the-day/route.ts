import { NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import { getQuoteOfTheDay } from '@/services/quote-of-the-day.service';
import { handleError } from '@/utils/error.util';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const quoteOfTheDay = await cache(
      `quoteOfTheDay:${date}`,
      () => getQuoteOfTheDay(),
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
