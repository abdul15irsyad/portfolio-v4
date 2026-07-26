'use client';

import {
  Box,
  Container,
  Group,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { educations } from '@/data/educations.data';
import { capitalizeEachWord } from '@/utils/change-case';

import { useCustomMediaQuery } from '../(hooks)/use-custom-media-query';
import styles from './education.module.css';
import { CustomMantineProvider } from './provider/mantine-provider';

const EducationContent = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { isDesktop } = useCustomMediaQuery();

  return (
    <Box bg='white' py={isDesktop ? '8rem' : '4rem'}>
      <Container size='xl'>
        <Title ta='center' c={theme.primaryColor} variant='h5'>
          {capitalizeEachWord(t('education'))}
        </Title>
        <Box
          w={100}
          m='1rem auto 2.5rem'
          style={{
            borderTop: '3px dashed',
            borderColor: theme.colors.gray[5],
          }}
        />
        <Group justify='center' gap='lg'>
          {educations.map(
            (
              {
                Icon,
                institution,
                level,
                major,
                startYear,
                endYear,
                // gpa,
                // href,
              },
              index,
            ) => {
              const meta: string[] = [capitalizeEachWord(t(level))];
              if (major) meta.push(capitalizeEachWord(t(major)));
              return (
                <Group
                  key={index}
                  className={styles.item}
                  p={'lg'}
                  bd={`1px solid ${theme.colors.gray[3]}`}
                  bdrs={'lg'}
                >
                  <Box bg={'gray.0'} bdrs={'50%'} p={'md'}>
                    <Icon
                      size={40}
                      stroke={1.5}
                      color={theme.colors[theme.primaryColor][7]}
                    />
                  </Box>
                  <Box>
                    <Title order={5} fw='bold'>
                      {meta.join(' - ')}
                    </Title>
                    <Text c='dimmed' size='sm' mt={4}>
                      {institution}
                    </Text>
                    <Text c='dimmed' size='sm'>
                      {startYear} - {endYear}
                    </Text>
                  </Box>
                  {/* <Box className={styles.hover}>
                    {gpa && <span>GPA {gpa}</span>}
                    {href && (
                      <a href={href} target='_blank' rel='noopener noreferrer'>
                        PDDIKTI
                      </a>
                    )}
                  </Box> */}
                </Group>
              );
            },
          )}
        </Group>
      </Container>
    </Box>
  );
};

export const Education = () => (
  <CustomMantineProvider>
    <EducationContent />
  </CustomMantineProvider>
);
