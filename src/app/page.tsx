'use client';

import Programming from '@/components/programming';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import PersonalInfo from '@/components/personal-info';
import Award from '@/components/award';
import Education from '@/components/education';
import { useEffect } from 'react';
import AOS from 'aos';
import { aosInitConfig } from '@/configs/aos.config';
import { LatestBlog } from '@/components/latest-blog';

const Home = () => {
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

export default Home;
