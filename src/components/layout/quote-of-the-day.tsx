'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Placeholder } from 'react-bootstrap';

import { QuoteOfTheDay as QuoteOfTheDayInterface } from '@/types/quote-of-the-day.type';

import styles from './quote-of-the-day.module.css';

export const QuoteOfTheDay = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: ['quoteOfTheDay'],
    queryFn: async () => {
      const response = await axios.get<{
        message: string;
        data: {
          date: string;
          quote: PickQuoteOfTheDay;
        };
      }>(`/api/quote-of-the-day`);
      return response.data;
    },
  });
  const quote = response?.data?.quote;

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
                  &quot;
                  {quote?.content ??
                    'Aim for the moon. If you miss, you may hit a star.'}
                  &quot;
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
