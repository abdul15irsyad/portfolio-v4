import dayjs from 'dayjs';
import slugify from 'slugify';

import { Portfolio } from '@/types/portfolio.type';

import { users } from './users.data';
import { workExperiences } from './work-experiences.data';

export const portfolios: Portfolio[] = [
  {
    title: 'Tunggalisasi CIF',
    href: null,
    publishedAt: '2024-12-22',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    workExperienceId: 'c4e2cedc-3eb4-43c6-b575-bc887b405335',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Memahami source code existing yang dikerjakan developer sebelumnya',
          },
          {
            lang: 'en',
            desc: 'Understand the existing source code that the previous developer was working on',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi background task menggunakan redis',
          },
          {
            lang: 'en',
            desc: 'Implementation of background task using redis',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi cron job untuk integrasi ke aplikasi lain',
          },
          {
            lang: 'en',
            desc: 'Implementation of cron job for integration to other applications',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Insert data secara bulk dengan upload file',
          },
          {
            lang: 'en',
            desc: 'Bulk insert data by uploading files',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/fastify.png', label: 'Fastify JS' },
      { icon: '/programming/prisma.png', label: 'Prisma' },
      { icon: '/programming/redis.png', label: 'Redis' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
      { icon: '/programming/next.png', label: 'Next JS 12' },
      { icon: '/programming/material-ui.png', label: 'Material UI' },
      { icon: '/programming/minio.png', label: 'MinIO' },
    ],
    images: [...Array(9).keys()].map((index) => ({
      src: `/portfolio/tunggalisasi-${index}.jpg`,
      alt: `Tunggalisasi CIF ${index}`,
    })),
    teams: [
      {
        // isye
        userId: '779ca0ac-1493-4300-9f41-598f9e690f16',
        role: 'Project Manager',
      },
      {
        // nando
        userId: '9bc945ca-fc75-46e7-9e71-fe28ab972e28',
        role: 'Previous Fullstack Dev',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
          Sesuai namanya, aplikasi Tunggalisasi CIF merupakan aplikasi yang menggabungkan beberapa CIF (Customer Information File) dengan memilih salah 1 dikarenakan memang seharusnya setiap nasabah walaupun memiliki banyak rekening tetapi tetap dengan CIF yang sama, adapun saya di project ini melanjutkan pengembangan di fase 2 dimana menyelesaikan fitur-fitur akhir seperti upload data bulk dengan file, interasi sistem lain, dll.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
          Just like the name, Tunggalisasi CIF is an application that combines several CIFs (Customer Information Files) by selecting 1 because every customer even has many accounts but the CIF still the same, while in this project I continue the development in phase 2 where completing final features such as uploading bulk data with files, interaction with other systems, etc.
          </p>
        `,
      },
    ],
  },
  {
    title: 'Procash (Loyalty)',
    href: null,
    publishedAt: '2024-11-05',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    workExperienceId: 'c4e2cedc-3eb4-43c6-b575-bc887b405335',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Menghandle request transfer yang cukup banyak dalam 1 waktu',
          },
          {
            lang: 'en',
            desc: 'Handle quiet a lot of request transfer at a time',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi antrian saat pengecekan quota promo/cashback',
          },
          {
            lang: 'en',
            desc: 'Queue implementation when checking promo/cashback quota',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi mekanisme retry apabila terjadi error yang dikecualikan',
          },
          {
            lang: 'en',
            desc: 'Implementation of a retry mechanism in the event of an excluded error',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi caching untuk data yang jarang berubah',
          },
          {
            lang: 'en',
            desc: 'Caching implementation for rarely changed data',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
      { icon: '/programming/laravel.png', label: 'Laravel' },
      { icon: '/programming/rabbitmq.png', label: 'RabbitMQ' },
      { icon: '/programming/redis.png', label: 'Redis' },
    ],
    images: [...Array(2).keys()].map((index) => ({
      src: `/portfolio/procash-loyalty-${index + 1}.jpg`,
      alt: `Procash Loyalty Transfer ${index + 1}`,
    })),
    teams: [
      {
        // mas winny
        userId: 'c2257f64-3f74-48f1-a9f5-63c0523a4247',
        role: 'Project Manager',
      },
      {
        // isye
        userId: '779ca0ac-1493-4300-9f41-598f9e690f16',
        role: 'Project Manager',
      },
      {
        // mas andra
        userId: '7cdc018e-1af2-4a93-a744-5989997b603e',
        role: 'Fullstack Dev',
      },
      {
        // fata
        userId: '0f2c62d8-5c30-41fb-bf44-d7bed37b3323',
        role: 'Fullstack Dev',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
          Procash Merupakan aplikasi yang menangani promo/cashback untuk nasabah di BRIMo, terdapat beberapa modul promo/cashback seperti QRIS, Merchant, Loyalty, dll. Dimana kontribusi saya di bagian modul Loyalty tipe <b>Transfer Ke Bank Lain</b> saja. Di bagian backend aplikasi ini mengimplementasikan micro-service dengan RabbitMQ sebagai message broker.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
          Procash is an application that handles promo/cashback for customers in BRIMo, there are several promo/cashback modules such as QRIS, Merchants, Loyalty, etc. My contribution in the Loyalty module type <b>Transfer to Another Bank</b> only. In the backend section this application implements micro-service with RabbitMQ as a Message Broker.
          </p>
        `,
      },
    ],
  },
  {
    title: 'JARVIS (Just Advanced HR System)',
    href: null,
    publishedAt: '2024-09-09',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    workExperienceId: 'c4e2cedc-3eb4-43c6-b575-bc887b405335',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi pencegahan IDOR (Insecure Direct Object Reference)',
          },
          {
            lang: 'en',
            desc: 'Implementation of IDOR (Insecure Direct Object Reference) Prevention',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi rate limit di fitur login',
          },
          {
            lang: 'en',
            desc: 'Implementation of Rate Limit in the Login Feature',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Kustomisasi template, menyesuaikan dengan requirement yang ada',
          },
          {
            lang: 'en',
            desc: 'Template customization, adjusting to existing requirements',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi "best practice" saat mengembangkan frontend next js',
          },
          {
            lang: 'en',
            desc: 'Implement "best practice" while develop frontend with next js',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Memahami source code existing yang dikerjakan developer sebelumnya',
          },
          {
            lang: 'en',
            desc: 'Understand the existing source code that the previous developer was working on',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/fastify.png', label: 'Fastify JS' },
      { icon: '/programming/prisma.png', label: 'Prisma' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
      { icon: '/programming/next.png', label: 'Next JS 14' },
      { icon: '/programming/material-ui.png', label: 'Material UI' },
      { icon: '/programming/minio.png', label: 'MinIO' },
    ],
    images: [...Array(8).keys()].map((index) => ({
      src: `/portfolio/jarvis-${index}.jpg`,
      alt: `Jarvis ${index + 1}`,
    })),
    teams: [
      {
        // isye
        userId: '779ca0ac-1493-4300-9f41-598f9e690f16',
        role: 'Project Manager',
      },
      {
        // om hendri
        userId: '11174d11-6715-42eb-a91b-d929d7c993b3',
        role: 'Previous Backend Dev',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
          JARVIS (Just Advanced HR System) adalah aplikasi untuk monitoring dan pengelolaan sumber daya manusia serta menatakerjakan data pegawai di Divisi APP BRI.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
          Jarvis (Just Advanced HR System) is an application for monitoring and managing human resources and employee data in the BRI APP division.
          </p>
        `,
      },
    ],
  },
  {
    title: 'Optimining',
    href: null,
    publishedAt: '2024-05-22',
    type: {
      icon: 'database',
      label: 'Backend',
    },
    workExperienceId: '15cf4050-4887-4143-8287-555da8e55312',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi GraphQL Federation (mirip seperti API Gateway di RESTful API)',
          },
          {
            lang: 'en',
            desc: 'Implement GraphQL Federation (similar to the API Gateway in RESTful API)',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi messaging menggunakan BullMQ dengan Redis sebagai tempat penyimpanan antrian',
          },
          {
            lang: 'en',
            desc: 'Messaging implementation using BullMQ with Redis as queue storage',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi 2 bahasa yakni English dan Bahasa di dalam response API khususnya saat validasi data',
          },
          {
            lang: 'en',
            desc: 'Implementation of 2 languages, English and Bahasa in API response, especially when validating data',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/graphql.png', label: 'GraphQL' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/postgresql.png', label: 'PostgreSQL' },
      { icon: '/programming/redis.png', label: 'Redis' },
    ],
    images: [...Array(4).keys()].map((index) => ({
      src: `/portfolio/optimining-${index + 1}.jpeg`,
      alt: `Optimining ${index + 1}`,
    })),
    teams: [
      {
        // rijal
        userId: '2f5bfc80-f7fe-4759-a281-33e803e92604',
        role: 'Frontend Dev',
      },
      {
        // teguh
        userId: '25a009a4-eeb7-42f9-8545-13b479b54ad4',
        role: 'Frontend Dev',
      },
      {
        // roni
        userId: '24f40aa0-3386-4be5-be33-367ecdfcd938',
        role: 'Frontend Dev',
      },
      {
        // raihan
        userId: '8c27ac9e-d197-473d-907c-9e162203d072',
        role: 'System Analyst',
      },
      {
        // adam
        userId: '16beb85b-6a1a-48a5-bd6e-a5297ac11959',
        role: 'Backend Dev',
      },
      {
        // chendra
        userId: '89499fd9-c590-44ef-b727-2d8d934e608d',
        role: 'Backend Dev',
      },
      {
        // mba dian
        userId: '0ceb6e1c-a88b-46c1-a7b9-8d6263960758',
        role: 'Project Manager',
      },
      {
        // pak kum
        userId: '3dc9f9a1-22c1-444d-a46e-24ca6b1a2a7f',
        role: 'Product Owner',
      },
      {
        // mas kukuh
        userId: '4bcf42b3-8624-4ef3-8a38-11f4cf0f712f',
        role: 'Senior Dev',
      },
      {
        // mas roy
        userId: '88365261-588a-4a70-b97e-780a9679e56b',
        role: 'Senior Dev',
      },
      {
        // april
        userId: '51c93428-eb19-48dc-b84d-d659161c85f9',
        role: 'UI/UX Designer',
      },
      {
        // puan
        userId: '17f4cca2-0e9d-4e33-baaa-7c7265427934',
        role: 'System Analyst',
      },
      {
        // elvis
        userId: '65f72b53-e798-4ba1-9fa9-0d578e0b0140',
        role: 'UI/UX Designer',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
          Optimining merupakan dashboard untuk mengelola tambang mineral seperti Ore, Overburden, dll. Saya ikut andil di project ini sebagai <strong>Backend Developer</strong> dimana tanggung jawab saya ialah mendesain database dalam bentuk ERD lalu mengembangkan endpoint dengan GraphQL untuk menyuplai data ke Frontend
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
          Optimining is a dashboard for managing mineral mines such as Ore, Overburden, etc. I took part in this project as <strong>Backend Developer</strong> where my responsibility is to design a database in the form ERD and then develop endpoint with GraphQL for supply data to Frontend.
          </p>
        `,
      },
    ],
  },
  {
    title: 'Fasel Base',
    href: 'https://faselbase.com/',
    publishedAt: '2024-02-10',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi fitur rate limit terhadap form yang dapat diakses oleh publik seperti form review dan form kontak kami',
          },
          {
            lang: 'en',
            desc: 'Implementation of the rate limit feature to the form that can be accessed by the public such as the review form and contact us form',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Pemberian rating/nilai kepada fasilitator berdasarkan review dari pengguna yang sudah diapprove',
          },
          {
            lang: 'en',
            desc: 'Providing ratings/values to the facilitator based on a review of users who have been approved',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Aggregasi dari perhitungan rating/nilai yang ada untuk perangkingan di home page',
          },
          {
            lang: 'en',
            desc: 'Aggregation from the Rating/Value Calculation for Ranking on the Home Page',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/laravel.png', label: 'Laravel 10' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 5' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
    ],
    images: [...Array(7).keys()].map((index) => ({
      src: `/portfolio/fasel-base-${index + 1}.jpg`,
      alt: `Fasel Base ${index + 1}`,
    })),
    teams: [],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
          Fasel Base adalah sebuah wadah dimana para Fasilitator Experiential Learning (Fasel) dapat mengembangkan kualitas memfasilitasi pelatihan "belajar dari pengalaman" berbasis tantangan, petualangan, tourism, atau digital agar lebih berkompeten, adapun peran saya dalam project ini adalah sebagai <strong>Fullstack Developer</strong> baik di bagian Landing Page (website) maupun Dashboard (aplikasi web).
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
          Fasel Base is a forum where the Facilitators of Experiential Learning (Fasel) can develop the quality of facilitating training "Learning from Experience" based on challenges, adventures, tourism, or digital to be more competent, as for my role in this project is as <strong>Fullstack Developer</Strong> both in the landing page (website) and dashboard (web application).
          </p>
        `,
      },
    ],
  },
  {
    title: 'Gerakan Seniman Masuk Sekolah 2023',
    href: 'https://gsmsppk.kemdikbud.go.id',
    publishedAt: '2023-08-10',
    type: {
      icon: 'database',
      label: 'Backend',
    },
    workExperienceId: '15cf4050-4887-4143-8287-555da8e55312',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi caching untuk data-data yang sering diakses',
          },
          {
            lang: 'en',
            desc: 'Caching Implementation for data that is often accessed',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/graphql.png', label: 'GraphQL' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/postgresql.png', label: 'Postgre SQL' },
      { icon: '/programming/redis.png', label: 'Redis' },
    ],
    images: [
      {
        src: '/portfolio/gsms-1.png',
        alt: 'GSMS 1',
      },
      {
        src: '/portfolio/gsms-2.png',
        alt: 'GSMS 2',
      },
      {
        src: '/portfolio/gsms-3.png',
        alt: 'GSMS 3',
      },
      {
        src: '/portfolio/gsms-4.png',
        alt: 'GSMS 4',
      },
    ],
    teams: [
      {
        // rijal
        userId: '2f5bfc80-f7fe-4759-a281-33e803e92604',
        role: 'Frontend Dev',
      },
      {
        // teguh
        userId: '25a009a4-eeb7-42f9-8545-13b479b54ad4',
        role: 'Frontend Dev',
      },
      {
        // roni
        userId: '24f40aa0-3386-4be5-be33-367ecdfcd938',
        role: 'Frontend Dev',
      },
      {
        // raihan
        userId: '8c27ac9e-d197-473d-907c-9e162203d072',
        role: 'System Analyst',
      },
      {
        // dito
        userId: 'a465903e-683a-4a40-8d13-f1543aed6625',
        role: 'UI/UX Designer',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Gerakan Seniman Masuk Sekolah (GSMS) 2023 adalah program dimana seniman memberikan pembelajaran kesenian pada kegiatan ekstrakurikuler di Sekolah, adapun peran saya dalam project ini adalah sebagai <strong>Backend Developer</strong> baik di bagian Landing Page (website) maupun Dashboard (aplikasi web).
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Gerakan Seniman Masuk Sekolah (GSMS) 2023 is a program where the artist teaching art in extracurricular activities in schools, as for my role in this project is as <strong>Backend Developer</strong> both in the landing page section (Website) and Dashboard (Web Application).
          </p>
        `,
      },
    ],
  },
  {
    title: 'Optimap Landing Page',
    href: null,
    publishedAt: '2023-07-12',
    type: {
      icon: 'database',
      label: 'Backend',
    },
    workExperienceId: '15cf4050-4887-4143-8287-555da8e55312',
    challenges: [],
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/postgresql.png', label: 'Postgre SQL' },
      { icon: '/programming/redis.png', label: 'Redis' },
    ],
    images: [...Array(4).keys()].map((index) => ({
      src: `/portfolio/optimap-landing-page-${index + 1}.jpg`,
      alt: `Optimap Landing Page ${index + 1}`,
    })),
    teams: [
      {
        // teguh
        userId: '25a009a4-eeb7-42f9-8545-13b479b54ad4',
        role: 'Frontend Dev',
      },
      {
        // raihan
        userId: '8c27ac9e-d197-473d-907c-9e162203d072',
        role: 'System Analyst',
      },
      {
        // april
        userId: '51c93428-eb19-48dc-b84d-d659161c85f9',
        role: 'UI/UX Designer',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Landing Page dari PT. Optima Media Teknologi atau dikenal juga sebagai Optimap disertakan juga CMS untuk mengatur data-data dinamis yang ditampilkan seperti portfolio, member, dll.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Landing Page from PT.Optima Media Technology or also known as Optimap is also included CMS to manage dynamic data displayed such as portfolio, member, etc..
          </p>
        `,
      },
    ],
  },
  {
    title: 'Indeks Pembangunan Kebudayaan',
    href: 'https://ipk.kemdikbud.go.id',
    publishedAt: '2023-06-10',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    workExperienceId: '15cf4050-4887-4143-8287-555da8e55312',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Membaca source code dari project yang dikembangkan oleh developer sebelumnya',
          },
          {
            lang: 'en',
            desc: 'Read the source code of the project developed by the previous developer',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Menambahkan beberapa tampilan yang menyesuaikan dengan project yang sudah ada',
          },
          {
            lang: 'en',
            desc: 'Add some display that adjusts to the existing project',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/laravel.png', label: 'Laravel 7' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
    ],
    images: [...Array(4).keys()].map((index) => ({
      src: `/portfolio/ipk-${index + 1}.jpg`,
      alt: `Indeks Pembangunan Kebudayaan ${index + 1}`,
    })),
    teams: [],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Indeks Pembangunan Kebudayaan (IPK) disusun sebagai salah satu instrumen untuk memberikan gambaran kemajuan pembangunan kebudayaan yang dapat digunakan sebagai basis formulasi kebijakan bidang kebudayaan. Adapun peranan saya hanya <strong>menambahkan data tahun 2022</strong> dan menambahkan beberapa tampilan di halaman beranda
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Indeks Pembangunan Kebudayaan (IPK) is compiled as one of the instruments to provide an overview of the progress of cultural development that can be used as a basis for the formulation of cultural policies. My role in this project only <strong>added data in 2022</strong> and added a few views on the home page.
          </p>
        `,
      },
    ],
  },
  {
    title: 'PPKD Pemantaun & Evaluasi',
    href: 'https://monevppkd.kemdikbud.go.id',
    publishedAt: '2023-06-10',
    type: {
      icon: 'database',
      label: 'Backend',
    },
    workExperienceId: '15cf4050-4887-4143-8287-555da8e55312',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Aggregasi perhitungan nilai dari penginputan dokumen PPKD',
          },
          {
            lang: 'en',
            desc: 'Aggregation calculation of the value of the input of PPKD documents',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/postgresql.png', label: 'Postgre SQL' },
    ],
    images: [
      {
        src: '/portfolio/monev-1.png',
        alt: 'PPKD Monev 1',
      },
      {
        src: '/portfolio/monev-2.png',
        alt: 'PPKD Monev 2',
      },
      {
        src: '/portfolio/monev-3.png',
        alt: 'PPKD Monev 3',
      },
    ],
    teams: [
      {
        // rijal
        userId: '2f5bfc80-f7fe-4759-a281-33e803e92604',
        role: 'Frontend Dev',
      },
      {
        // teguh
        userId: '25a009a4-eeb7-42f9-8545-13b479b54ad4',
        role: 'Frontend Dev',
      },
      {
        // mas sis
        userId: 'ef1b3fd9-b395-404c-b1cd-82d862a05ab3',
        role: 'Frontend Dev',
      },
      {
        // raihan
        userId: '8c27ac9e-d197-473d-907c-9e162203d072',
        role: 'System Analyst',
      },
      {
        // dito
        userId: 'a465903e-683a-4a40-8d13-f1543aed6625',
        role: 'UI/UX Designer',
      },
      {
        // acha
        userId: '10b8004a-d98f-4b1f-9545-ea92e38e80cf',
        role: 'Backend Dev',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Website Pokok Pikiran Kebudayaan Daerah (PPKD) Pemantauan & Evaluasi merupakan aplikasi web yang diperuntukkan kepada dinas daerah dalam pemantauan pembuatan dokumen PPKD oleh pemerintah pusat, adapun peran saya dalam project ini adalah sebagai <strong>Backend Developer</strong> baik di bagian Landing Page (website) maupun Dashboard (aplikasi web).
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Pokok Pikiran Kebudayaan Daerah (PPKD) Monitoring & Evaluation website is a web application that is intended for regional offices in monitoring PPKD documents by the central government, while my role in this project is as <strong> backend developer </strong> both in the landing page (website) and dashboard (web application).
          </p>
        `,
      },
    ],
  },
  {
    title: 'PPKD Dokumen',
    href: 'https://ppkd.kemdikbud.go.id',
    publishedAt: '2023-03-10',
    type: {
      icon: 'database',
      label: 'Backend',
    },
    workExperienceId: '15cf4050-4887-4143-8287-555da8e55312',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Membuat map web server untuk penampilan visual peta Indonesia',
          },
          {
            lang: 'en',
            desc: 'Create a map web server for the visual appearance of the Indonesian map',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Penyusunan dokumen PPKD dengan bab yang memiliki beberapa sub bab',
          },
          {
            lang: 'en',
            desc: 'Preparation of PPKD documents with chapters that have several sub-chapters',
          },
        ],
      },
      {
        translates: [
          {
            lang: 'id',
            desc: 'Print dokumen dari inputan yang ada dengan format <code>.docx</code>',
          },
          {
            lang: 'en',
            desc: 'Print documents from existing input in <code>.docx</code> format',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/postgresql.png', label: 'Postgre SQL' },
    ],
    images: [
      {
        src: '/portfolio/ppkd-1.png',
        alt: 'PPKD Dokumen 1',
      },
      {
        src: '/portfolio/ppkd-2.png',
        alt: 'PPKD Dokumen 2',
      },
      {
        src: '/portfolio/ppkd-3.png',
        alt: 'PPKD Dokumen 3',
      },
      {
        src: '/portfolio/ppkd-4.png',
        alt: 'PPKD Dokumen 4',
      },
      {
        src: '/portfolio/ppkd-5.png',
        alt: 'PPKD Dokumen 5',
      },
    ],
    teams: [
      {
        // mas fajar
        userId: '69cb835e-efd7-4aa5-8012-6bedbf4eacdc',
        role: 'Frontend Dev',
      },
      {
        // rijal
        userId: '2f5bfc80-f7fe-4759-a281-33e803e92604',
        role: 'Frontend Dev',
      },
      {
        // raihan
        userId: '8c27ac9e-d197-473d-907c-9e162203d072',
        role: 'System Analyst',
      },
      {
        // dito
        userId: 'a465903e-683a-4a40-8d13-f1543aed6625',
        role: 'UI/UX Designer',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
        <p>
          Website Pokok Pikiran Kebudayaan Daerah (PPKD) Dokumen merupakan aplikasi web yang diperuntukkan kepada dinas daerah dalam penyusunan dokumen PPKD, adapun peran saya dalam project ini adalah sebagai <strong>Backend Developer</strong> baik di bagian Landing Page (website) maupun Dashboard (aplikasi web).
        </p>
      `,
      },
      {
        lang: 'en',
        desc: `
        <p>
          Pokok Pikiran Kebudayaan Daerah (PPKD) Dokumen website is a web application that is intended for regional government in the preparation of PPKD documents, while my role in this project is as <strong>Backend Developer</strong> both in the landing page (website) and dashboard (web application).
        </p>
      `,
      },
    ],
  },
  {
    title: 'PUSDIKLAT Tenaga Teknis Pendidikan Dan Keagamaan',
    href: 'https://pusdiklatteknis.kemenag.go.id',
    publishedAt: '2022-10-10',
    type: {
      icon: 'laptop',
      label: 'Frontend',
    },
    challenges: [],
    stacks: [
      { icon: '/programming/laravel.png', label: 'Laravel' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
    ],
    images: [
      {
        src: '/portfolio/pusdiklat-1.png',
        alt: 'Pusdiklat 1',
      },
      {
        src: '/portfolio/pusdiklat-2.png',
        alt: 'Pusdiklat 2',
      },
      {
        src: '/portfolio/pusdiklat-3.png',
        alt: 'Pusdiklat 3',
      },
      {
        src: '/portfolio/pusdiklat-4.png',
        alt: 'Pusdiklat 4',
      },
    ],
    teams: [
      {
        // simi
        userId: '4f2be582-06a8-47a4-af48-7f742544f4cf',
        role: 'Fullstack Dev',
      },
      {
        // bang aqin
        userId: 'e05b71ec-002e-487c-b101-be953c5ac44d',
        role: 'UI/UX Designer',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Saya ikut andil dalam pembuatan website PUSDIKLAT Tenaga Teknis Pendidikan Dan Keagamaan, yakni website untuk informasi seputar Lembaga tersebut. Saya mengerjakan bagian tampilan untuk website ini.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            I took part in making the website of the Education and Religious Technical Training Center, which is a website for information about the institution. I work on the display section for this website.
          </p>
        `,
      },
    ],
  },
  {
    title: 'Admin Panel Digital Andaf',
    href: null,
    publishedAt: '2022-01-10',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    workExperienceId: '311be326-dab7-4b23-87fe-f3240c90adb1',
    challenges: [],
    stacks: [
      { icon: '/programming/laravel.png', label: 'Laravel 7' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      { icon: '/programming/mysql.png', label: 'MySQL' },
    ],
    images: [
      {
        src: '/portfolio/digital-andaf-1.jpg',
        alt: 'Digital Andaf 1',
      },
      {
        src: '/portfolio/digital-andaf-2.jpg',
        alt: 'Digital Andaf 2',
      },
    ],
    teams: [
      {
        // bang adhy
        userId: 'fe0d9a80-bafb-480c-8a5f-ff90e84cb504',
        role: 'Fullstack Dev',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Saya ikut andil dalam pembuatan project Digital Andaf, yakni web app untuk tracking pengerjaan suatu project di kantor.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            I took part in making the Digital Andaf project, which is a web app for tracking the work on a project in the office.
          </p>
        `,
      },
    ],
  },
  {
    title: 'Admin Panel SIPERDIK Aceh Tengah',
    href: null,
    publishedAt: '2021-08-10',
    type: {
      icon: 'code-square',
      label: 'Fullstack',
    },
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Sinkronisasi data sekolah, siswa, guru, dll. dengan data yang ada di DAPODIK <a href="https://dapo.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer">https://dapo.kemdikbud.go.id</a> untuk daerah Aceh Tengah',
          },
          {
            lang: 'en',
            desc: 'Synchronization of school data, students, teachers, etc. with the data in Dapodik <a href="https://dapo.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer">https://dapo.kemdikbud.go.id</a> for Central Aceh region',
          },
        ],
      },
    ],
    stacks: [
      { icon: '/programming/codeigniter.png', label: 'Codeigniter 4' },
      { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
    ],
    images: [
      {
        src: '/portfolio/siperdik-1.png',
        alt: 'Siperdik 1',
      },
      {
        src: '/portfolio/siperdik-2.png',
        alt: 'Siperdik 2',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
        <p>
          Pada project tersebut saya membuat admin panel untuk website SIPERDIK Aceh Tengah, dibuat menggunakan framework CodeIniter 4 dengan Database MySQL, untuk styling saya menggunakan Bootstrap 4, namun project tersebut belum dimigrasi ke domain yang diinginkan.
        </p>
      `,
      },
      {
        lang: 'en',
        desc: `
        <p>
          In this project I made an admin panel for the Central Aceh SIPERDIK website, made using the Codeiniter 4 framework with a MySQL database, for my styling using Bootstrap 4, but the project has not been migrated to the desired domain.
        </p>
      `,
      },
    ],
  },
  {
    title: 'Sop Buntut Ibu Samino',
    href: 'https://sopbuntutibusamino.com/',
    publishedAt: '2022-07-15',
    type: {
      icon: 'wordpress',
      label: 'Wordpress',
    },
    workExperienceId: '311be326-dab7-4b23-87fe-f3240c90adb1',
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Company profile rumah makan <b>"Sop Buntut Ibu Samino"</b> yang berisi menu-menu makanan dan minuman yang ada beserta lokasi cabang di beberapa daerah.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Company profile restaurant <b>"Sop Buntut Ibu Samino"</b> which contains food and beverage menus along with branch locations in several areas.
          </p>
        `,
      },
    ],
    challenges: [],
    stacks: [{ icon: '/programming/wordpress.png', label: 'Wordpress' }],
    images: [
      {
        src: '/portfolio/sop-buntut-ibu-samino-1.jpg',
        alt: 'Sop Buntut Ibu Samino 1',
      },
      {
        src: '/portfolio/sop-buntut-ibu-samino-2.jpg',
        alt: 'Sop Buntut Ibu Samino 2',
      },
    ],
  },
  {
    title: 'Safari Konveksi',
    href: 'https://safarikonveksi.com',
    publishedAt: '2022-04-15',
    type: {
      icon: 'wordpress',
      label: 'Wordpress',
    },
    workExperienceId: '311be326-dab7-4b23-87fe-f3240c90adb1',
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Landing page vendor konveksi <b>"Safari Konveksi"</b> yang berisi detail layanan yang dimiliki dan beberapa contoh produk yang dibuat untuk mitra.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Landing Page Vendor Convection <b>"Safari Convection"</b> which contains details of the services owned and some examples of products made for partners.
          </p>
        `,
      },
    ],
    challenges: [],
    stacks: [{ icon: '/programming/wordpress.png', label: 'Wordpress' }],
    images: [
      {
        src: '/portfolio/safari-konveksi-1.jpg',
        alt: 'Safari Konveksi 1',
      },
      {
        src: '/portfolio/safari-konveksi-2.jpg',
        alt: 'Safari Konveksi 2',
      },
    ],
  },
  {
    title: 'Beton Analytica',
    href: 'https://betonanalytica.com/',
    publishedAt: '2022-04-15',
    type: {
      icon: 'wordpress',
      label: 'Wordpress',
    },
    workExperienceId: '311be326-dab7-4b23-87fe-f3240c90adb1',
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Company profile <b>"Beton Analytica"</b> yang berisi detail produk dan keunggulan-keunggulannya, lalu terdapat fitur dengan 2 bahasa yakni bahasa indonesia dan bahasa inggris.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Company profile <b>"Beton Analytica"</b> which contains product details and its advantages, then there are features with 2 languages Indonesian and English.
          </p>
        `,
      },
    ],
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Implementasi 2 bahasa yakni English dan Bahasa',
          },
          {
            lang: 'en',
            desc: 'Implementation of 2 languages English and Bahasa',
          },
        ],
      },
    ],
    stacks: [{ icon: '/programming/wordpress.png', label: 'Wordpress' }],
    images: [
      {
        src: '/portfolio/beton-analytica-1.jpg',
        alt: 'Beton Analytica 1',
      },
      {
        src: '/portfolio/beton-analytica-2.jpg',
        alt: 'Beton Analytica 2',
      },
      {
        src: '/portfolio/beton-analytica-3.jpg',
        alt: 'Beton Analytica 3',
      },
    ],
  },
  {
    title: 'Padi Resort',
    href: 'https://www.padiresort.co.id',
    publishedAt: '2021-08-15',
    type: {
      icon: 'wordpress',
      label: 'Wordpress',
    },
    workExperienceId: '311be326-dab7-4b23-87fe-f3240c90adb1',
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            Company Profile <b>"Padi Resort"</b> yang berisi tipe-tipe kamar yang ada di resort tersebut beserta paket-paket yang tersedia.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            Company Profile <b>"Padi Resort"</b> which contains the types of rooms in the resort along with the packages available.
          </p>
        `,
      },
    ],
    challenges: [],
    stacks: [{ icon: '/programming/wordpress.png', label: 'Wordpress' }],
    images: [
      {
        src: '/portfolio/padi-resort-1.jpg',
        alt: 'Padi Resort 1',
      },
      {
        src: '/portfolio/padi-resort-2.jpg',
        alt: 'Padi Resort 2',
      },
    ],
  },
  {
    title: 'Galaxy Partani Mas',
    href: 'https://galaxypartanimas.com',
    publishedAt: '2021-05-15',
    type: {
      icon: 'wordpress',
      label: 'Wordpress',
    },
    workExperienceId: '311be326-dab7-4b23-87fe-f3240c90adb1',
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            <b>"Galaxy Partani Mas"</b> merupakan perusahaan importir dan distributor dalam bidang mekanisasi pertanian, dalam company profile ini berisi katalog seluruh produk beserta detail nya.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            <b>"Galaxy Partani Mas"</b> is an importer and distributor company in the field of agricultural mechanization, in this company profile contains a catalog of all products and its details.
          </p>
        `,
      },
    ],
    challenges: [],
    stacks: [{ icon: '/programming/wordpress.png', label: 'Wordpress' }],
    images: [
      {
        src: '/portfolio/galaxy-partani-mas-1.jpg',
        alt: 'Galaxy Partani Mas 1',
      },
      {
        src: '/portfolio/galaxy-partani-mas-2.jpg',
        alt: 'Galaxy Partani Mas 2',
      },
      {
        src: '/portfolio/galaxy-partani-mas-3.jpg',
        alt: 'Galaxy Partani Mas 3',
      },
    ],
  },
  {
    title: 'Prima Citra Inovindo',
    href: 'https://pci-tech.co.id',
    publishedAt: '2022-09-15',
    type: {
      icon: 'wordpress',
      label: 'Wordpress',
    },
    challenges: [],
    stacks: [{ icon: '/programming/wordpress.png', label: 'Wordpress' }],
    images: [
      {
        src: '/portfolio/pci-1.jpg',
        alt: 'Prima Citra Inovindo 1',
      },
      {
        src: '/portfolio/pci-2.jpg',
        alt: 'Prima Citra Inovindo 2',
      },
    ],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
            <b>"PT. Prima Citra Inovindo"</b> Perusahaan Distributor Alat Kesehatan Dalam Negeri (AKD) produk  yang di produksi oleh pabrikan.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
            <b>"PT. Prima Citra Inovindo"</b> Domestic Medical Device Distributor Company (AKD) Products produced by the manufacturer.
          </p>
        `,
      },
    ],
  },
  {
    title: 'Landing Page Nawa Jelly',
    href: 'https://abdul15irsyad.github.io/nawajelly',
    publishedAt: '2019-06-09',
    type: {
      icon: 'code-slash',
      label: 'Basic',
    },
    challenges: [],
    stacks: [
      { icon: '/programming/html-5.png', label: 'HTML 5' },
      { icon: '/programming/css-3.png', label: 'CSS 3' },
    ],
    images: [...Array(2).keys()].map((index) => ({
      src: `/portfolio/nawajelly-${index + 1}.jpg`,
      alt: `Nawa Jelly ${index + 1}`,
    })),
    teams: [],
    translates: [
      {
        lang: 'id',
        desc: `
          <p>
          Landing Page untuk produk Nawa Jelly.
          </p>
        `,
      },
      {
        lang: 'en',
        desc: `
          <p>
          Landing Page for Nawa Jelly product.
          </p>
        `,
      },
    ],
  },
]
  .map(
    (portfolio: Omit<Portfolio, 'year'>): Portfolio => ({
      ...portfolio,
      year: dayjs(portfolio.publishedAt).year(),
      slug: slugify(portfolio.title, { strict: true, lower: true }),
      workExperience: portfolio.workExperienceId
        ? workExperiences.find(({ id }) => id === portfolio.workExperienceId)
        : undefined,
      teams: portfolio.teams
        ?.map((team) => ({
          ...team,
          user: users.find((user) => team.userId === user.id),
        }))
        .sort((a, b) => (a.user!.name < b.user!.name ? -1 : 1)),
    }),
  )
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
