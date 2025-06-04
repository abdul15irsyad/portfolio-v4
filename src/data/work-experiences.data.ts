import dayjs from 'dayjs';

import { WorkExperience } from '@/types/work-experience.type';

export const workExperiences: WorkExperience[] = [
  {
    id: '6a2301b4-e69c-4d91-acf8-e5642a8480e5',
    position: 'Fullstack Engineer',
    startDate: dayjs(`2025-06-03`).toDate(),
    endDate: null,
    company: {
      name: 'Krom',
      fullname: 'Krom Bank',
      logo: '/experience/krom.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Bergabung dengan tim Internal Tools.',
      },
      {
        lang: 'en',
        desc: 'Join Internal Tools team.',
      },
    ],
    techStacks: [
      'Typescript',
      'Express JS',
      'React JS',
      'PostgreSQL',
      'Mantine UI',
    ],
  },
  {
    id: 'c4e2cedc-3eb4-43c6-b575-bc887b405335',
    position: 'Fullstack Developer',
    startDate: dayjs(`2024-06-03`).toDate(),
    endDate: dayjs(`2025-06-03`).toDate(),
    company: {
      name: 'BRI',
      fullname: 'Bank Rakyat Indonesia',
      logo: '/experience/bri.jpeg',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Mengembangkan aplikasi proyek atau web yang mendukung operasional perusahaan dengan teknologi terbaru yang diinstruksikan oleh pengembang senior/manajer di dalam tim Corporate Core Platform (CCP)seperti Nest JS (Typescript), Fastify JS, Golang, Gin, Next JS, RabbitMQ, MinIO, Redis, dan MySQL.',
      },
      {
        lang: 'en',
        desc: 'Develop project or web application that support corporate operational with latest technologies that instructed by senior developer/team manager in Corporate Core Platform (CCP) team like Nest JS (Typescript), Fastify JS, Golang, Gin, Next JS, RabbitMQ, MinIO, Redis, dan MySQL.',
      },
    ],
    techStacks: [
      'Node JS',
      'Fastify JS',
      'Golang',
      'Gin',
      'Next JS',
      'MySQL',
      'RabbitMQ',
      'Redis',
      'Nest JS',
      'Material UI',
      'MinIO',
    ],
  },
  {
    id: '15cf4050-4887-4143-8287-555da8e55312',
    position: 'Backend Developer',
    startDate: dayjs(`2022-08-01`).toDate(),
    endDate: dayjs(`2024-05-22`).toDate(),
    company: {
      name: 'Optimap',
      fullname: 'Optima Media Teknologi',
      logo: '/experience/optimap.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Sebagai Backend Developer, saya bertanggung jawab membuat API (menggunakan REST & GraphQL) menggunakan bahasa pemrograman TypeScript dengan framework NestJS dan database yang digunakan adalah PostgreSQL serta membuat Entity Relationship diagram (ERD) di dalam suatu project',
      },
      {
        lang: 'en',
        desc: 'As a Backend Developer, my responsibility is making an API (using REST & GraphQL) using the Typescript programming language with NestJS framework and the database that we used is PostgreSQL and creating an entity relationships diagram (ERD) in a project',
      },
    ],
    techStacks: [
      'Node JS',
      'Typescript',
      'Laravel',
      'PHP',
      'GraphQL',
      'PostgreSQL',
      'Redis',
      'Nest JS',
      'Gitlab CI/CD',
    ],
  },
  {
    id: '311be326-dab7-4b23-87fe-f3240c90adb1',
    position: 'Web Developer',
    startDate: dayjs(`2020-08-01`).toDate(),
    endDate: dayjs(`2022-08-01`).toDate(),
    company: {
      name: 'Andaf Corp',
      fullname: 'Andaf Corporation',
      logo: '/experience/andaf.png',
    },
    translates: [
      {
        lang: 'id',
        desc: 'Sebagai Web Developer, saya mengerjakan website untuk klien baik menggunakan Wordpress (CMS) maupun menggunakan framework seperti Laravel, CodeIgniter, dll.',
      },
      {
        lang: 'en',
        desc: 'As a Web Developer, I work on a website for clients both using WordPress (CMS) or using frameworks such as Laravel, Codeigniter, etc.',
      },
    ],
    techStacks: ['Wordpress', 'Laravel', 'PHP', 'MySQL', 'Git', 'Bootstrap'],
  },
  {
    id: '81594155-f568-4f57-943d-0c4635f6023c',
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
    techStacks: ['Laravel', 'PHP', 'MySQL'],
  },
];
