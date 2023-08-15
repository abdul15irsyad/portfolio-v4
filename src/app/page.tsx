import Programming from '@/components/Programming';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import PersonalInfo from '@/components/PersonalInfo';
import Award from '@/components/Award';

const Home = () => {
  return (
    <main>
      <Hero />
      <PersonalInfo />
      <Experience />
      <Programming />
      <Award />
    </main>
  );
};

export default Home;
