'use client';

import * as Sentry from '@sentry/nextjs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useCallback, useRef } from 'react';
import { OverlayTrigger, Placeholder, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useCapture } from '@/app/(hooks)/use-capture-and-share';
import { QuoteOfTheDay as QuoteOfTheDayInterface } from '@/types/quote-of-the-day.type';

import styles from './quote-of-the-day.module.css';

export const QuoteOfTheDay = () => {
  const { t } = useTranslation();
  const title = t('share-quote');
  const ref = useRef<HTMLDivElement>(null);
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
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 3,
  });
  const quote = response?.data?.quote;

  const { captureElement, isLoading: isCaptureLoading } = useCapture();

  const handleShare = useCallback(async () => {
    try {
      if (!navigator?.canShare?.({ title }) || !ref?.current) return;

      const { file } = await captureElement(
        ref.current,
        `quote of the day ${dayjs().format('YYYY-MM-DD')}.png`,
      );

      const shareData: ShareData = {
        title,
        files: [file],
      };

      await navigator?.share(shareData);
    } catch (error) {
      Sentry.captureException(error);
    }
  }, [captureElement, title]);

  return (
    <div className={styles.wrapper}>
      {!isLoading && navigator?.canShare({ title: '' }) && (
        <OverlayTrigger
          overlay={<Tooltip>{t('share-quote')}</Tooltip>}
          placement="top"
        >
          <button
            className={`btn btn-light ${styles['btn-share']}`}
            onClick={handleShare}
          >
            {isCaptureLoading ? (
              <i className="bi bi-arrow-repeat spinner" />
            ) : (
              <i className="bi bi-share" />
            )}
          </button>
        </OverlayTrigger>
      )}
      <div className={styles.content} ref={ref}>
        <div className={'w-100'}>
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
