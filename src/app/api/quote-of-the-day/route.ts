import { NextRequest, NextResponse } from 'next/server';

import { cache } from '@/redis/redis.util';
import { getQuoteOfTheDay } from '@/services/quote-of-the-day.service';
import { handleError } from '@/utils/error.util';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
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
