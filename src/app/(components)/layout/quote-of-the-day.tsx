'use client';

import { ActionIcon, Box, Text, Tooltip } from '@mantine/core';
import * as Sentry from '@sentry/nextjs';
import { IconLoader2, IconShare } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import { useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useCapture } from '@/app/(hooks)/use-capture-and-share';
import { IQuoteOfTheDayResponse as QuoteOfTheDayInterface } from '@/types/quote-of-the-day.type';

type PickQuoteOfTheDay = Pick<
  QuoteOfTheDayInterface,
  '_id' | 'author' | 'content' | 'tags'
>;

import classes from './quote-of-the-day.module.css';

const mockQuote: PickQuoteOfTheDay = {
  _id: 'mock',
  content:
    'Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.',
  author: 'Oprah Winfrey',
  tags: [],
};
const isUseMock = process.env.NODE_ENV !== 'production' && true;

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
    enabled: !isUseMock,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 3,
  });
  const quote = useMemo(() => {
    if (isUseMock) return mockQuote;
    return response?.data?.quote ?? mockQuote;
  }, [response?.data?.quote]);

  const { captureElement, isLoading: isCaptureLoading } = useCapture();

  const canShare = useMemo(() => {
    try {
      return navigator?.canShare?.({ title: '' });
    } catch {
      return false;
    }
  }, []);

  const handleShare = useCallback(async () => {
    try {
      if (!canShare || !ref?.current) return;

      const { file } = await captureElement(
        ref.current,
        `quote of the day ${dayjs().format('YYYY-MM-DD')}.png`,
      );

      const shareData: ShareData = {
        title,
        files: [file],
      };

      await navigator?.share?.(shareData);
    } catch (error) {
      Sentry.captureException(error);
    }
  }, [canShare, captureElement, title]);

  return (
    <Box className={classes.wrapper}>
      {!isLoading && canShare && (
        <Tooltip label={t('share-quote')} position='top'>
          <ActionIcon
            variant='light'
            color='gray'
            className={classes['btn-share']}
            onClick={handleShare}
            aria-label={t('share-quote')}
          >
            {isCaptureLoading ? (
              <IconLoader2 size={14} className='spinner' />
            ) : (
              <IconShare size={14} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
      <Box className={classes.content} ref={ref}>
        <Box w='100%'>
          <Text className={classes.quote}>
            &quot;
            {quote?.content ??
              'Aim for the moon. If you miss, you may hit a star.'}
            &quot;
          </Text>
          <Text className={classes.author}>
            - {quote?.author ?? 'W. Clement Stone'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
