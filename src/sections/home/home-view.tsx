'use client';

import Award from '@/components/award';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import { LatestBlog } from '@/components/latest-blog';
import PersonalInfo from '@/components/personal-info';
import Programming from '@/components/programming';
import { aosInitConfig } from '@/configs/aos.config';
import AOS from 'aos';
import React, { useEffect } from 'react';

export const HomeView = () => {
  useEffect(() => {
    AOS.init(aosInitConfig);
  });
  return (
    <main>
      <Hero />
      <PersonalInfo />
      <Education />
      <Experience />
      <Programming />
      <Award />
      <LatestBlog />
    </main>
  );
};
