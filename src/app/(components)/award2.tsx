'use client';

import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { awards } from '@/data/awards.data';
import { capitalizeEachWord } from '@/utils/change-case';

import { useCustomMediaQuery } from '../(hooks)/use-custom-media-query';
import { CustomMantineProvider } from './provider/mantine-provider';

const Award2Content = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { isDesktop } = useCustomMediaQuery();

  return (
    <Box bg={'gray.9'}>
      <Container size='xl' py='8rem' px={isDesktop ? undefined : 'xl'}>
        <Title
          ta={isDesktop ? undefined : 'center'}
          mb='xl'
          c={theme.colors.gray[0]}
          size='h1'
        >
          {capitalizeEachWord(t('award'))} &{' '}
          {capitalizeEachWord(t('certificate'))}
        </Title>
        <Stack>
          {awards.map((award, index) => (
            <Box
              key={index}
              bg='gray.8'
              c='gray.0'
              p={isDesktop ? 'xl' : 'lg'}
              bdrs='md'
              bd={`1px solid ${theme.colors.gray[7]}`}
            >
              <Group justify='space-between'>
                <Box>
                  <Text
                    fw='bold'
                    fz='xs'
                    tt='uppercase'
                    c={theme.colors[theme.primaryColor][2]}
                  >
                    {[award.publisher, award.year].join(' · ')}
                  </Text>
                  <Title size={isDesktop ? 'h2' : 'h3'}>{award.title}</Title>
                  <Text c='gray.6'>{award.desc}</Text>
                </Box>
                <Box>
                  <Button
                    size={isDesktop ? 'md' : 'xs'}
                    color='red'
                    rightSection={<IconExternalLink size='1em' />}
                  >
                    {capitalizeEachWord(t('see-item', { item: 'Certificate' }))}
                  </Button>
                </Box>
              </Group>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export const Award2 = () => {
  return (
    <CustomMantineProvider>
      <Award2Content />
    </CustomMantineProvider>
  );
};
