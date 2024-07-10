'use client';

import AOS from 'aos';
import React, { useEffect } from 'react';

import { aosInitConfig } from '@/configs/aos.config';
import Award from '@/sections/home/award';
import Education from '@/sections/home/education';
import Experience from '@/sections/home/experience';
import Hero from '@/sections/home/hero';
import { LatestBlog } from '@/sections/home/latest-blog';
import PersonalInfo from '@/sections/home/personal-info';
import Programming from '@/sections/home/programming';

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
