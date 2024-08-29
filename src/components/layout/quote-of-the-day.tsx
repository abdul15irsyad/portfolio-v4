'use client';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React from 'react';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
import { Placeholder } from 'react-bootstrap';

import { QuoteOfTheDay as QuoteOfTheDayInterface } from '@/types/quote-of-the-day.type';

import styles from './quote-of-the-day.module.css';
// dayjs.extend(utc);
// dayjs.extend(timezone);

export const QuoteOfTheDay = () => {
  const { data: response, isLoading } = useQuery<{
    message: string;
    data: {
      date: string;
      quote: PickQuoteOfTheDay;
    };
  }>({
    queryKey: ['quoteOfTheDay'],
    queryFn: async () => {
      // const date = dayjs().utc().format('YYYY-MM-DD');
      const date = dayjs().format('YYYY-MM-DD');
      const data = await fetch(`/api/quote-of-the-day?date=${date}`);
      return data.json();
    },
    staleTime: 0,
    cacheTime: 0,
  });
  const quote = response?.data?.quote;
  // if (isLoading) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.icon}></div>
        <div className={styles.text}>
          <Placeholder animation="glow">
            {isLoading ? (
              [
                {
                  width: '80%',
                  marginBottom: '0.5rem',
                },
                {
                  width: '60%',
                  marginBottom: '1rem',
                },
                {
                  width: '160px',
                  bg: 'primary',
                  marginBottom: '0rem',
                },
              ].map(({ width, marginBottom, bg }, index) => (
                <Placeholder
                  key={index}
                  size="lg"
                  bg={bg ?? undefined}
                  style={{
                    width,
                    display: 'block',
                    margin: '0 auto 1rem',
                    marginBottom,
                    borderRadius: '.25rem',
                  }}
                />
              ))
            ) : (
              <>
                <div className={styles.quote}>
                  "
                  {quote?.content ??
                    'Aim for the moon. If you miss, you may hit a star.'}
                  "
                </div>
                <div className={styles.author}>
                  - {quote?.author ?? 'W. Clement Stone'}
                </div>
              </>
            )}
          </Placeholder>
        </div>
      </div>
    </div>
  );
};

interface PickQuoteOfTheDay
  extends Pick<QuoteOfTheDayInterface, '_id' | 'author' | 'content' | 'tags'> {}
