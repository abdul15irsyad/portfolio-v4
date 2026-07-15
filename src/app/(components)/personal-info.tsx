'use client';

import { Box, Container, Grid, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { yearsOfExperience } from '@/data/work-experiences.data';

import { useCustomMediaQuery } from '../(hooks)/use-custom-media-query';
import { CustomMantineProvider } from './provider/mantine-provider';

const PersonalInfoContent = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { isDesktop } = useCustomMediaQuery();

  return (
    <Box
      id='personal-info'
      bg='white'
      pt='10rem'
      pb={isDesktop ? '6rem' : '3rem'}
    >
      <Container
        size='lg'
        px={isDesktop ? undefined : 'xl'}
      >
        <Grid align='center' gap='xl'>
          <Grid.Col
            span={{ base: 12, lg: 4 }}
            ta={{ base: 'left', lg: 'center' }}
          >
            <Image
              src='/quote-primary.png'
              alt='quote symbol'
              width={isDesktop ? 80 : 40}
              height={isDesktop ? 80 : 40}
              style={{
                filter: 'var(--bs-primary-filter)',
                width: 'auto',
                maxWidth: '100%',
                height: 'auto',
                marginBottom: isDesktop ? 0 : '2rem',
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Box
              dangerouslySetInnerHTML={{
                __html: t('personal-info', {
                  year: yearsOfExperience,
                }),
              }}
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: theme.colors.gray[7],
              }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export const PersonalInfo = () => {
  return (
    <CustomMantineProvider>
      <PersonalInfoContent />
    </CustomMantineProvider>
  );
};
