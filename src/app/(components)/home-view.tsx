'use client';

import AOS from 'aos';
import { useEffect } from 'react';

import { aosInitConfig } from '@/app/(configs)/aos.config';

import Award from './award';
import Education from './education';
import { Hero2 } from './hero2';
import { LatestBlog } from './latest-blog';
import PersonalInfo from './personal-info';
import Programming from './programming';
import { WorkExperience2 } from './work-experience2';

export const HomeView = () => {
  useEffect(() => {
    AOS.init(aosInitConfig);
  }, []);
  return (
    <main>
      {/* <Hero /> */}
      <Hero2 />
      <PersonalInfo />
      <WorkExperience2 />
      <Education />
      <Programming />
      <Award />
      <LatestBlog />
    </main>
  );
};
