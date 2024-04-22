import { QuoteOfTheDay } from '@/types/quote-of-the-day.type';
import { random } from '@/utils/array.util';
import { randomInt } from '@/utils/number.util';

export const getQuoteOfTheDay = async (): Promise<QuoteOfTheDay> => {
  const tags = ['motivational', 'inspirational', 'famous quotes'];
  const res = await (
    await fetch(
      `https://api.quotable.io/random?maxLength=${randomInt(
        150,
        200,
      )}&tags=${random(tags)}`,
    )
  ).json();
  return res;
};
