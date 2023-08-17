import Programming from '@/components/Programming';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import PersonalInfo from '@/components/PersonalInfo';
import Award from '@/components/Award';
import Education from '@/components/Education';

const Home = () => {
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
