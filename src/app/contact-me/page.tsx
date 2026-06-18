'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { aosInitConfig } from '@/app/(configs)/aos.config';
import { ContactMeView } from '@/app/contact-me/(components)/contact-me-view';

export default () => {
  useEffect(() => {
    AOS.init(aosInitConfig);
  }, []);
  return <ContactMeView />;
};
