import { redisService } from '@/redis/redis.util';
import { QuoteOfTheDay } from '@/types/quote-of-the-day.type';
import { shuffle } from '@/utils/array.util';
import { randomInt } from '@/utils/number.util';

export const getQuoteOfTheDay = async () => {
  const getQuotable = async () => {
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
    console.log(`get quote with id ${res._id}`);
    return res;
  };

  let quote: QuoteOfTheDay, quoteIds: string[];
  let i = 0;
  const maxIterations = 20;
  do {
    quote = await getQuotable();
    quoteIds = JSON.parse((await redisService.get('quoteOfTheDayIds')) ?? '[]');
    // if (quoteIds.find((quoteId) => quoteId === quote._id))
    //   console.log(quote.content);
    i = i + 1;
  } while (
    quoteIds.find((quoteId) => quoteId === quote._id) &&
    i < maxIterations
  );
  // console.log(i);
  await redisService.setex(
    'quoteOfTheDayIds',
    365 * 24 * 60 * 60,
    JSON.stringify([...quoteIds, quote._id].sort((a, b) => (a < b ? -1 : 1))),
  );
  return {
    _id: quote._id,
    author: quote.author,
    content: quote.content,
    tags: quote.tags,
  };
};
