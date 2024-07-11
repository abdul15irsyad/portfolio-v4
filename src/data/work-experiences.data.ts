import dayjs from 'dayjs';

import { WorkExperience } from '@/types/work-experience.type';

export const workExperiences: WorkExperience[] = [
  {
    position: 'Backend Developer',
    startDate: dayjs(`2024-06-03`).toDate(),
    endDate: null,
    company: {
      name: 'BRI',
      logo: '/experience/bri.jpeg',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Mengembangkan aplikasi proyek atau web yang mendukung operasional perusahaan dengan teknologi terbaru yang diinstruksikan oleh pengembang senior/manajer tim.',
      },
      {
        lang: 'en',
        desc: 'Develop project or web application that support corporate operational with latest technologies that instructed by senior developer/team manager.',
      },
    ],
  },
  {
    position: 'Backend Developer',
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
    startDate: dayjs(`2020-02-01`).toDate(),
    endDate: dayjs(`2020-03-01`).toDate(),
    company: {
      name: 'Lingkar 9',
      logo: '/experience/new-lingkar-9.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Untuk menambah pengalaman saya memutuskan untuk magang di perusahaan ini, saya diajarkan berbagai macam hal terkait dunia kerja dan dunia pemrograman',
      },
      {
        lang: 'en',
        desc: 'To get an experience I decided to do an internship at this company, I was taught various things related to the world of work and the world of programming',
      },
    ],
  },
];
