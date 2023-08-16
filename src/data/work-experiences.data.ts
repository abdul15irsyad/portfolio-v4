import { WorkExperience } from '@/types/work-experience.type';

export const workExperiences: WorkExperience[] = [
  {
    position: 'Internship',
    timespan: 'Feb 2020 - Mar 2020',
    company: {
      name: 'Lingkar 9',
      logo: '/experience/lingkar-9.png',
    },
    desc: 'Untuk menambah pengalaman saya memutuskan untuk magang di perusahaan ini, saya diajarkan berbagai macam hal terkait dunia kerja dan dunia pemrograman',
  },
  {
    position: 'IT Staff',
    timespan: 'Agu 2020 - Agu 2022',
    company: {
      name: 'Andaf Corp',
      logo: '/experience/andaf.png',
    },
    desc: 'Berposisi sebagai IT Staff, saya mengerjakan website untuk klien baik menggunakan Wordpress (CMS) maupun menggunakan framework seperti Laravel, CodeIgniter, dll.',
  },
  {
    position: 'Back End Developer',
    timespan: 'Agu 2022 - Sekarang',
    company: {
      name: 'Optimap',
      logo: '/experience/optimap.png',
    },
    desc: 'Berposisi sebagai Back End Developer, menggunakan Bahasa pemrograman TypeScript dengan Framework NestJS, dan database yang digunakan adalah PostgreSQL.',
  },
];
