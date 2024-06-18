import { WorkExperience } from '@/types/work-experience.type';
import dayjs from 'dayjs';

export const workExperiences: WorkExperience[] = [
  {
    position: 'Backend Developer',
    timespan: 'Agu 2022 - Mei 2024',
    startDate: dayjs(`2024-06-03`).toDate(),
    endDate: null,
    company: {
      name: 'BRI',
      logo: '/experience/bri.jpeg',
    },
    // desc: 'Berposisi sebagai Backend Developer',
    translates: [
      {
        lang: 'id',
        desc: 'Berposisi sebagai Backend Developer',
      },
      {
        lang: 'en',
        desc: 'Positioned as a Backend Developer',
      },
    ],
  },
  {
    position: 'Backend Developer',
    timespan: 'Agu 2022 - Mei 2024',
    startDate: dayjs(`2022-08-01`).toDate(),
    endDate: dayjs(`2024-05-22`).toDate(),
    company: {
      name: 'Optimap',
      logo: '/experience/optimap.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Berposisi sebagai Backend Developer, saya bertanggung jawab membuat API (menggunakan REST & GraphQL) menggunakan bahasa pemrograman TypeScript dengan framework NestJS dan database yang digunakan adalah PostgreSQL serta membuat Entity Relationship diagram (ERD) di dalam suatu project',
      },
      {
        lang: 'en',
        desc: 'Positioned as a Backend Developer, my responsibility is making an API (using REST & GraphQL) using the Typescript programming language with NestJS framework and the database that we used is PostgreSQL and creating an entity relationships diagram (ERD) in a project',
      },
    ],
  },
  {
    position: 'Web Developer',
    timespan: 'Agu 2020 - Agu 2022',
    startDate: dayjs(`2020-08-01`).toDate(),
    endDate: dayjs(`2022-08-01`).toDate(),
    company: {
      name: 'Andaf Corp',
      logo: '/experience/andaf.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Berposisi sebagai Web Developer, saya mengerjakan website untuk klien baik menggunakan Wordpress (CMS) maupun menggunakan framework seperti Laravel, CodeIgniter, dll.',
      },
      {
        lang: 'en',
        desc: 'Positioned as a Web Developer, I work on a website for clients both using WordPress (CMS) or using frameworks such as Laravel, Codeigniter, etc.',
      },
    ],
  },
  {
    position: 'Internship - Web Developer',
    timespan: 'Feb 2020 - Mar 2020',
    startDate: dayjs(`2020-02-01`).toDate(),
    endDate: dayjs(`2020-03-01`).toDate(),
    company: {
      name: 'Lingkar 9',
      logo: '/experience/lingkar-9.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Untuk menambah pengalaman saya memutuskan untuk magang di perusahaan ini, saya diajarkan berbagai macam hal terkait dunia kerja dan dunia pemrograman',
      },
      {
        lang: 'en',
        desc: 'For get an experience I decided to do an internship at this company, I was taught various things related to the world of work and the world of programming',
      },
    ],
  },
];
