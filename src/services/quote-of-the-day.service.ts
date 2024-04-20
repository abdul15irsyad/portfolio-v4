import { QuoteOfTheDay } from '@/types/quote-of-the-day.type';

export const getQuoteOfTheDay = async (): Promise<QuoteOfTheDay> => {
  const res = await (
    await fetch(
      'https://api.quotable.io/random?maxLength=200&tags="motivational|inspirational|famous quotes"',
    )
  ).json();
  return res;
};
