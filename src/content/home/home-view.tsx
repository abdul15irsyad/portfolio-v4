'use client';

import AOS from 'aos';
import React, { useEffect } from 'react';

import { aosInitConfig } from '@/configs/aos.config';
import Award from '@/content/home/award';
import Education from '@/content/home/education';
import { WorkExperience } from '@/content/home/experience';
import Hero from '@/content/home/hero';
import { LatestBlog } from '@/content/home/latest-blog';
import PersonalInfo from '@/content/home/personal-info';
import Programming from '@/content/home/programming';

export const HomeView = () => {
  useEffect(() => {
    AOS.init(aosInitConfig);
  });
  return (
    <main>
      <Hero />
      <PersonalInfo />
      <WorkExperience />
      <Education />
      <Programming />
      <Award />
      <LatestBlog />
    </main>
  );
};
