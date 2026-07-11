import {
  Badge,
  Box,
  Container,
  Group,
  List,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { workExperiences } from '@/data/work-experiences.data';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';
import { getShortLongDate } from '@/utils/date.util';

import { useCustomMediaQuery } from '../(hooks)/use-custom-media-query';
import { CustomMantineProvider } from './provider/mantine-provider';

export const WorkExperience2Content = () => {
  const theme = useMantineTheme();
  const { t, i18n } = useTranslation();
  const { isDesktop } = useCustomMediaQuery();

  return (
    <Box bg='gray.0'>
      <Container size='xl' py='8rem' px={isDesktop ? undefined : 'md'}>
        <Stack>
          <Title ta='center' c={theme.primaryColor} variant='h5'>
            {capitalizeEachWord(t('work-experience'))}
          </Title>
          <Box
            w={100}
            m='1rem auto 2.5rem'
            style={{
              borderTop: '3px dashed',
              borderColor: theme.colors.gray[5],
            }}
          />
          <Stack gap={isDesktop ? 'xl' : 'md'}>
            {workExperiences.map(
              (
                {
                  position,
                  startDate,
                  endDate,
                  company,
                  desc,
                  translates,
                  techStacks,
                },
                index,
              ) => {
                const start = getShortLongDate(startDate);
                const end = endDate
                  ? getShortLongDate(endDate)
                  : {
                      short: capitalize(t('present-short')),
                      long: capitalize(t('present')),
                    };
                endDate = endDate ?? new Date();
                const monthDiff = dayjs(endDate).diff(startDate, 'months');
                const workDuration =
                  monthDiff / 12 >= 1
                    ? `${Math.floor(monthDiff / 12)} ${t('year')}${
                        Math.floor(monthDiff % 12) > 0
                          ? ` ${Math.floor(monthDiff % 12)} ${t('month')}`
                          : ''
                      }`
                    : `${monthDiff} ${t('month')}`;
                const weekDiff = dayjs(endDate).diff(startDate, 'weeks');
                return (
                  <Stack
                    key={index}
                    p='xl'
                    bdrs='lg'
                    gap='sm'
                    bg='white'
                    bd={`1px solid ${theme.colors.gray[5]}`}
                    style={{
                      boxShadow: `0px 0px 10px ${theme.colors.gray[4]}`,
                    }}
                  >
                    <Group align='center' justify='space-between'>
                      <Group gap='md'>
                        <Box bdrs='md' style={{ overflow: 'hidden' }}>
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={36}
                            height={36}
                          />
                        </Box>
                        <Stack gap={0}>
                          <Title size='h4' c={theme.primaryColor}>
                            {position}
                          </Title>
                          <Text fw={500}>
                            {isDesktop ? (
                              company.fullname ?? company.name
                            ) : (
                              <Group gap={5}>
                                <span>{company.name}</span>
                                <Text
                                  component='span'
                                  fs='italic'
                                  c={theme.colors.gray[7]}
                                >
                                  ({start.short} - {end.short})
                                </Text>
                              </Group>
                            )}
                          </Text>
                        </Stack>
                      </Group>
                      {isDesktop && (
                        <Box me='lg'>
                          <Tooltip
                            label={
                              monthDiff > 0 ? workDuration : `${weekDiff} week`
                            }
                          >
                            <Text fs='italic' c='gray.6'>
                              {start.long} - {end.long}
                            </Text>
                          </Tooltip>
                        </Box>
                      )}
                    </Group>
                    <Box>
                      <List
                        pt='md'
                        pb='md'
                        pl={isDesktop ? 'md' : undefined}
                        c='gray.7'
                        spacing='xs'
                        styles={{
                          itemWrapper: {
                            alignItems: 'flex-start',
                          },
                        }}
                        icon={
                          <IconCircleCheck
                            color={theme.colors[theme.primaryColor][7]}
                            size='1em'
                          />
                        }
                      >
                        {(
                          desc ??
                          translates?.find(({ lang }) => lang === i18n.language)
                            ?.desc
                        )?.map((item, index) => (
                          <List.Item fw={400} key={index}>
                            {item}
                          </List.Item>
                        ))}
                      </List>
                    </Box>
                    <Group gap={8}>
                      {techStacks?.map((techStack, index) => (
                        <Badge
                          key={index}
                          tt='none'
                          bdrs='md'
                          size='lg'
                          variant='light'
                          color='blue'
                          fw={500}
                        >
                          {techStack}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                );
              },
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export const WorkExperience2 = () => {
  return (
    <CustomMantineProvider>
      <WorkExperience2Content />
    </CustomMantineProvider>
  );
};
