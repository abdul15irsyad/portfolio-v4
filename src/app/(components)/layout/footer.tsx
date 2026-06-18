'use client';

import { Box, Container, Flex, Grid, Group, Stack, Text } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { contacts } from '@/data/contacts.data';
import { navbarMenus } from '@/data/navbar-menus.data';
import { capitalizeEachWord } from '@/utils/change-case';

import classes from './footer.module.css';
import { QuoteOfTheDay } from './quote-of-the-day';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  whatsapp: IconPhone,
  envelope: IconMail,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
  facebook: IconBrandFacebook,
  'twitter-x': IconBrandX,
  telegram: IconBrandTelegram,
  threads: IconBrandThreads,
};

export const Footer = () => {
  const { t } = useTranslation();
  const footerContacts = contacts.filter(({ icon }) =>
    ['whatsapp', 'envelope'].includes(icon),
  );
  const followMe = contacts.filter(
    ({ icon }) => !['whatsapp', 'envelope'].includes(icon),
  );
  return (
    <>
      <QuoteOfTheDay />
      <Box component='footer' className={classes.footer} bg='gray.9'>
        <Container size='xl' px={{ base: 'xl', md: 'xl' }}>
          <Grid gap={{ base: 40, md: 60 }}>
            {/* Branding & Contact Info */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap='md'>
                <Text className={classes.heading}>Irsyad Abdul</Text>
                <Stack gap='sm'>
                  {footerContacts.map(({ icon, label, href }, index) => {
                    const IconComponent = iconMap[icon] ?? IconMail;
                    return href ? (
                      <Link
                        key={index}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes['contact-link']}
                      >
                        <IconComponent size={20} />
                        <span>{label}</span>
                      </Link>
                    ) : (
                      <div key={index} className={classes['contact-text']}>
                        <IconComponent size={20} />
                        <span>{label}</span>
                      </div>
                    );
                  })}
                  <Link
                    href='https://maps.app.goo.gl/XnjKvJvMHUTCN8TQ9'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes['contact-link']}
                  >
                    <IconMapPin size={20} />
                    <span>{t('my-address')}</span>
                  </Link>
                </Stack>
              </Stack>
            </Grid.Col>

            {/* Social Media */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap='md'>
                <Text className={classes.heading}>
                  {capitalizeEachWord(t('follow-me'))}
                </Text>
                <Group gap='sm'>
                  {followMe.map(({ icon, label, href }, index) => {
                    const IconComponent = iconMap[icon] ?? IconBrandGithub;
                    return href ? (
                      <Link
                        key={index}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={label}
                        className={classes['social-icon']}
                      >
                        <IconComponent size={20} />
                      </Link>
                    ) : (
                      <Box key={index} className={classes['social-icon']}>
                        <IconComponent size={20} />
                      </Box>
                    );
                  })}
                </Group>
              </Stack>
            </Grid.Col>

            {/* Navigation */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap='md'>
                <Text className={classes.heading}>Navigation</Text>
                <Stack gap='xs'>
                  {navbarMenus.map(({ label, href }, index) => (
                    <Link
                      key={index}
                      href={href}
                      className={classes['nav-link']}
                    >
                      {capitalizeEachWord(t(label))}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Copyright */}
          <Flex
            className={classes.copyright}
            direction={{ base: 'column', md: 'row' }}
            justify='space-between'
            align='center'
            gap='sm'
          >
            <Text
              size='sm'
              inherit
              dangerouslySetInnerHTML={{
                __html: [
                  `&copy; ${new Date().getFullYear()} abdul15irsyad`,
                  'Made with 💀',
                  'All rights reserved',
                ].join(' &bull; '),
              }}
            ></Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
