import axios from 'axios';
import https from 'https';

import { redisService } from '@/redis/redis.util';
import {
  IQuoteOfTheDayResponse,
  QuoteOfTheDay,
} from '@/types/quote-of-the-day.type';
import { randomInt } from '@/utils/number.util';

export const defaultQuoteOfTheDay: QuoteOfTheDay = {
  _id: 'd29b610a-c4dd-41bb-9a28-b8606f45eedd',
  author: 'Charlie Wardle',
  content:
    'A bird sitting on a tree is never afraid of the branch breaking, because its trust is not on the branch but on its own wings.',
  tags: [] as string[],
};

const getQuotable = async () => {
  const tags = [
    'failure',
    'motivational',
    'inspirational',
    'famous quotes',
    'character',
    'opportunity',
    'work',
    'success',
    'sports',
    'knowledge',
  ];
  // const randomTags = shuffle(tags).slice(0, randomInt(1, tags.length));
  const maxLength = randomInt(15, 20) * 10;
  const agent = new https.Agent({
    rejectUnauthorized: false, // Set to 'false' to allow self-signed certificates (not recommended for production)
  });
  const res = await axios.get<IQuoteOfTheDayResponse>(
    'https://api.quotable.io/random',
    {
      params: {
        maxLength,
        tags: tags.join('|'),
      },
      httpsAgent: agent,
    },
  );
  return res.data;
};

export const getQuoteOfTheDay = async (): Promise<QuoteOfTheDay> => {
  try {
    let quote: IQuoteOfTheDayResponse, quoteIds: string[];
    let i = 0;
    const maxIterations = 20;
    do {
      quote = await getQuotable();
      quoteIds = JSON.parse(
        (await redisService.get('quoteOfTheDayIds')) ?? '[]',
      );
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
  } catch {
    return defaultQuoteOfTheDay;
  }
};
