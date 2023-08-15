import Programming from '@/components/Programming';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import PersonalInfo from '@/components/PersonalInfo';
import {} from 'react-bootstrap';

const Home = () => {
  return (
    <main>
      <Hero />
      <PersonalInfo />
      <Experience />
      <Programming />
    </main>
  );
};

export default Home;
