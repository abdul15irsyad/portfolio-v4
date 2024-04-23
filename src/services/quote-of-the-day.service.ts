import { QuoteOfTheDay } from '@/types/quote-of-the-day.type';
import { shuffle } from '@/utils/array.util';
import { randomInt } from '@/utils/number.util';

export const getQuoteOfTheDay = async (): Promise<QuoteOfTheDay> => {
  const tags = [
    'failure',
    'motivational',
    'inspirational',
    'famous quotes',
    'character',
  ];
  const randomTags = shuffle(tags).slice(0, randomInt(1, tags.length));
  const maxLength = randomInt(15, 20) * 10;
  const url = `https://api.quotable.io/random?maxLength=${maxLength}&tags="${randomTags.join(
    '|',
  )}"`;
  console.log(`fetching ${url}`);
  const res = await (await fetch(url)).json();
  return res;
};
