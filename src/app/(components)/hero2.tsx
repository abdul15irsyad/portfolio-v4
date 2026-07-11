'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import {
  Icon,
  IconBrush,
  IconDevicesCog,
  IconFileDescription,
  IconMail,
  IconServer,
  IconSettings,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { capitalize } from '@/utils/change-case';

import { useCustomMediaQuery } from '../(hooks)/use-custom-media-query';
import { CustomMantineProvider } from './provider/mantine-provider';
import { TextAnimation } from './text-animation/text-animation';

const features: { Icon: Icon; title: string }[] = [
  { Icon: IconDevicesCog, title: 'System Design' },
  { Icon: IconSettings, title: 'Backend' },
  { Icon: IconServer, title: 'Database' },
  { Icon: IconBrush, title: 'Web Design' },
];
const Hero2Content = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const { isDesktop } = useCustomMediaQuery();
  return (
    <Box className='doodle-background'>
      <Container size='xl' pt='8rem' px={isDesktop ? undefined : 'xl'}>
        <Group
          justify={isDesktop ? 'space-between' : 'center'}
          align='center'
          gap={isDesktop ? undefined : '2rem'}
        >
          <Box>
            <Stack gap='md' ta={{ base: 'center', lg: 'left' }}>
              <Text size='xl' fw={500}>
                <TextAnimation
                  text={capitalize(t('greeting', { name: 'Irsyad Abdul' }))}
                />
              </Text>
              <Title
                order={1}
                fz={{ base: 36, sm: 48, lg: 56 }}
                lh={1.1}
                fw={800}
              >
                <span style={{ display: 'block' }}>Designing Scalable</span>
                <Text
                  component='span'
                  c={theme.colors[theme.primaryColor][7]}
                  inherit
                >
                  Backend Architectures
                </Text>
              </Title>
              <Text size='lg' c='dimmed' maw={560}>
                A Fullstack Engineer with 5+ years of expertise in
                microservices, cloud-native systems, and modern web
                architectures. Delivering reliability with a human touch.
              </Text>
              <Group mt='md' justify={isDesktop ? 'flex-start' : 'center'}>
                <Button
                  component='a'
                  href='#contact'
                  size='lg'
                  variant='filled'
                  leftSection={<IconMail size='1em' />}
                >
                  {capitalize(t('contact-me'), { each: true })}
                </Button>
                <Button
                  component='a'
                  href='/resume-2025-06-16.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  size='lg'
                  variant='outline'
                  leftSection={<IconFileDescription size='1em' />}
                >
                  {capitalize(t('see-item', { item: t('resume') }), {
                    each: true,
                  })}
                </Button>
              </Group>
            </Stack>
          </Box>
          <Box p='xl'>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: (Math.PI / 0.02) * (1 / 60), // matches your rAF speed
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={'/hero3.png'}
                alt='hero'
                width={400}
                height={400}
                priority
              />
            </motion.div>
          </Box>
        </Group>
        <Flex
          direction='row'
          justify='center'
          gap='1rem'
          mt={'2rem'}
          px={isDesktop ? undefined : 'lg'}
          mb='-4rem'
          style={{
            flexWrap: isDesktop ? undefined : 'wrap',
          }}
        >
          {features.map(({ Icon, title }, index) => (
            <Stack
              key={index}
              align='center'
              justify='center'
              gap='lg'
              bg={'white'}
              w={isDesktop ? '180px' : '160px'}
              bd={`1px solid ${theme.colors.gray[3]}`}
              style={{
                aspectRatio: '1.1/1',
                borderRadius: '0.75rem',
              }}
            >
              <Box>
                <Icon
                  size='2rem'
                  stroke={1.25}
                  color={theme.colors[theme.primaryColor][7]}
                />
              </Box>
              <Text fw={700} size='sm' ta='center'>
                {title}
              </Text>
            </Stack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export const Hero2 = () => {
  return (
    <CustomMantineProvider>
      <Hero2Content />
    </CustomMantineProvider>
  );
};
