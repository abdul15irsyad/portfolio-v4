'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { aosInitConfig } from '@/configs/aos.config';
import { ContactMeView } from '@/sections/contact/contact-me-view';

export default () => {
  useEffect(() => {
    AOS.init(aosInitConfig);
  });
  return <ContactMeView />;
};
