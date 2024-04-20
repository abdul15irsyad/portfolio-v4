'use client';

import { QuoteOfTheDay as QuoteOfTheDayInterface } from '@/types/quote-of-the-day.type';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styles from './quote-of-the-day.module.css';
import { ENV } from '@/configs/app.config';

const QuoteOfTheDay = () => {
  const { data: response, isLoading } = useQuery<{
    message: string;
    data: {
      date: string;
      quote: PickQuoteOfTheDay;
    };
  }>({
    queryKey: ['quoteOfTheDay'],
    queryFn: async () => {
      const data = await fetch('/api/quote-of-the-day');
      return data.json();
    },
    cacheTime: ENV === 'production' ? 60 * 60 * 1000 : 0,
  });
  const quote = response?.data?.quote;
  if (isLoading) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          <div className={styles.quote}>
            "
            {quote?.content ??
              'Aim for the moon. If you miss, you may hit a star.'}
            "
          </div>
          <div className={styles.author}>
            - {quote?.author ?? 'W. Clement Stone'}
          </div>
        </div>
      </div>
    </div>
  );
};

interface PickQuoteOfTheDay
  extends Pick<QuoteOfTheDayInterface, '_id' | 'author' | 'content' | 'tags'> {}

export default QuoteOfTheDay;
