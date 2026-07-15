'use client';

import { Badge, Box, Container, Grid, Group, Text, Title, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { programmingSkills } from '@/data/programming-skills.data';
import { Level } from '@/types/programming-skill.interface';
import { capitalizeEachWord } from '@/utils/change-case';

import { useCustomMediaQuery } from '../(hooks)/use-custom-media-query';
import { CustomMantineProvider } from './provider/mantine-provider';

const ProgrammingLogo = ({ logo, name }: { logo: string; name: string }) => (
  <Image
    src={logo}
    alt={name}
    width={14}
    height={14}
    style={{
      objectFit: 'contain',
    }}
    loading='eager'
  />
)

const CategoryItem = ({
  name,
  level,
  logo,
  levelStyle,
}: {
  name: string;
  level: Level;
  logo: string | string[];
  levelStyle: { bg: string; color: string };
}) => {
  const { isDesktop } = useCustomMediaQuery();
  return (
    <Group align='center' gap={4} bg='gray.0' p={8} bdrs='md' style={{ userSelect: 'none' }}>
      <Group gap='xs' wrap='nowrap' style={{ display: 'inline-flex' }}>
        <Group gap={4} wrap='nowrap' style={{ display: 'inline-flex' }}>
          {Array.isArray(logo) ? (
            logo.map((item, index) => (
              <ProgrammingLogo key={index} logo={item} name={name?.toLowerCase()} />
            ))
          ) : (
            <ProgrammingLogo logo={logo} name={name?.toLowerCase()} />
          )}
        </Group>
        <Text component='span' size={isDesktop ? 'xs' : 'sm'} fw={500} c='gray.8'>
          {name}
        </Text>
      </Group>
      <Badge
        variant='light'
        size='sm'
        radius='sm'
        tt='none'
        style={{
          backgroundColor: levelStyle.bg,
          color: levelStyle.color,
          fontWeight: 600,
          marginLeft: '1rem',
        }}
      >
        {level}
      </Badge>
    </Group>
  )
};

const Programming2Content = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { isDesktop } = useCustomMediaQuery();

  const levelColors: Record<Level, { bg: string; color: string }> = {
    [Level.GOOD]: {
      bg: 'rgba(13, 110, 253, 0.1)',
      color: 'rgba(13, 110, 253, 1)',
    },
    [Level.INTERMEDIATE]: {
      bg: 'rgba(7, 89, 133, 0.1)',
      color: theme.colors.brand[7],
    },
    [Level.BASIC]: {
      bg: 'rgba(108, 117, 125, 0.1)',
      color: 'rgba(108, 117, 125, 1)',
    },
    [Level.LEARNING]: {
      bg: 'rgba(40, 167, 69, 0.1)',
      color: 'rgba(40, 167, 69, 1)',
    },
    [Level.ADVANCE]: {
      bg: 'rgba(7, 89, 133, 0.2)',
      color: theme.colors.brand[9],
    },
  };

  return (
    <Box
      bg='white'
      py={isDesktop ? '8rem' : '4rem'}
    >
      <Container
        size='xl'
        px={isDesktop ? undefined : 'xl'}
      >
        <Title ta='center' c={theme.primaryColor} order={2}>
          {capitalizeEachWord(t('skills'))}
        </Title>
        <Box
          w={100}
          m='1rem auto 2.5rem'
          style={{
            borderTop: '3px dashed',
            borderColor: theme.colors.gray[5],
          }}
        />
        <Grid gap='xl'>
          {programmingSkills.map(({ title, list }, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, md: 6, lg: 4 }}
            >
              <Box className='category' mb='2rem'>
                <Title order={4} className='category-title' mb='xs' fw={800}>
                  {capitalizeEachWord(t(title))}
                </Title>
                <Group
                  component='ul'
                  className='category-items'
                  gap={8}
                  wrap='wrap'
                  style={{ listStyleType: 'none', padding: 0 }}
                >
                  {list.filter(({ isHide }) => !isHide).map(({ name, logo, level, href }, itemIndex) => (
                    <Box component='li' key={itemIndex}>
                      {href ? (
                        <Link
                          href={href}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{ textDecoration: 'none' }}
                        >
                          <CategoryItem
                            name={name}
                            logo={logo}
                            level={level}
                            levelStyle={levelColors[level]}
                          />
                        </Link>
                      ) : (
                        <CategoryItem
                          name={name}
                          logo={logo}
                          level={level}
                          levelStyle={levelColors[level]}
                        />
                      )}
                    </Box>
                  ))}
                </Group>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const Programming2 = () => {
  return (
    <CustomMantineProvider>
      <Programming2Content />
    </CustomMantineProvider>
  );
};

