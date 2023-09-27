'use client';

import Programming from '@/components/Programming';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import PersonalInfo from '@/components/PersonalInfo';
import Award from '@/components/Award';
import Education from '@/components/Education';
import { useEffect } from 'react';
import AOS from 'aos';
import { aosInitConfig } from '@/configs/aos.config';

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
    </main>
  );
};

export default Home;
