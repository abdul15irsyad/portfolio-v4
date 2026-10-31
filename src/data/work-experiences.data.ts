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
      fullname: 'Krom Bank Indonesia',
      logo: '/experience/krom.png',
      url: 'https://krom.id',
    },
    translates: [
      {
        lang: 'id',
        desc: [
          'Mengurangi rata-rata waktu respons API hingga sekitar 75% melalui penerapan caching Redis pada berbagai API platform perbankan, sehingga secara signifikan menurunkan beban query database selama jam operasional sibuk.',
          'Meningkatkan isolasi sistem dan keandalan pemrosesan dengan memigrasikan proses workflow berdurasi panjang ke layanan BullMQ Consumer khusus, yang kini mampu menangani lebih dari 2 juta record data setiap hari kerja.',
          'Mengembangkan layanan backend yang aman dan skalabel menggunakan TypeScript dan Express.js, dengan deployment di AWS EKS serta S3 untuk penyimpanan data dan Scalyr untuk pemantauan sistem.',
          'Meningkatkan kemudahan penggunaan bagi berbagai departemen operasional melalui pengembangan antarmuka internal yang modern dan responsif menggunakan Next.js dan Mantine UI.',
          'Menerjemahkan kebutuhan operasional dari Product Owner dan pemangku kepentingan bisnis menjadi fitur siap produksi dalam lingkungan cloud-native berbasis AWS.',
        ],
      },
      {
        lang: 'en',
        desc: [
          'Cut average API response time by ~75% by implementing Redis caching across banking platform APIs, significantly reducing database query load during peak operational hours.',
          'Improved system isolation and processing reliability by migrating long-running workflows into a dedicated BullMQ consumer service, now handling 2M+ data records per weekday.',
          'Delivered secure, scalable backend services using TypeScript and Express.js, deployed on AWS EKS with S3 for storage and Scalyr for observability.',
          'Improved usability across multiple operational departments by building modern, responsive internal UIs with Next.js and Mantine UI.',
          'Turned operational requirements from product owners and business stakeholders into production-ready features within a cloud-native AWS environment.',
        ],
      },
    ],
    techStacks: [
      'Node JS',
      'Typescript',
      'Express JS',
      'PostgreSQL',
      'Redis',
      'React JS',
      'Next JS',
      'Mantine UI',
      'BullMQ',
      'Websocket',
      'AWS EKS',
      'AWS S3',
      'Scalyr',
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
      url: 'https://bri.co.id',
    },
    translates: [
      {
        lang: 'id',
        desc: [
          'Mengembangkan dan merilis 3 microservice ke lingkungan production menggunakan Fastify dan NestJS, dengan kemampuan menangani hingga 100 RPS serta mempertahankan performa yang stabil dalam beban transaksi aktual.',
          'Meningkatkan keandalan integrasi antarservice dalam alur kerja corporate banking dengan membangun pipeline asinkron berbasis event-driven menggunakan RabbitMQ dan Redis, sehingga mengurangi ketergantungan langsung antar service.',
          'Mengurangi waktu pemrosesan secara signifikan dibandingkan implementasi sinkron sebelumnya melalui pengembangan dan pemeliharaan layanan Golang untuk pemrosesan data background dengan throughput tinggi.',
          'Mengurangi kebutuhan intervensi manual dalam proses operasional melalui otomatisasi tugas bisnis rutin menggunakan scheduled jobs dan background workers.',
          'Mempercepat pengembangan dan implementasi fitur pada platform corporate banking melalui pembuatan komponen frontend yang reusable menggunakan Next.js dan Material UI.',
          'Meningkatkan performa sistem secara keseluruhan melalui optimasi kode, tuning query database, dan penyempurnaan arsitektur sistem.',
        ],
      },
      {
        lang: 'en',
        desc: [
          'Shipped 3 production microservices using Fastify and NestJS, sustaining up to 100 RPS with stable performance under real transaction load.',
          'Improved cross-service integration reliability across corporate banking workflows by building event-driven asynchronous pipelines with RabbitMQ and Redis that decoupled service dependencies.',
          'Significantly reduced processing time compared to prior synchronous implementations by developing and maintaining Golang services for high-throughput background data processing.',
          'Reduced manual intervention across operational processes by automating recurring business tasks with scheduled jobs and background workers.',
          'Accelerated feature delivery across the corporate banking platform by building reusable frontend components with Next.js and Material UI.',
          'Improved overall system performance through code optimization, query tuning, and architectural enhancements.',
        ],
      },
    ],
    techStacks: [
      'Node JS',
      'Javascript',
      'Typescript',
      'Fastify JS',
      'Golang',
      'Gin',
      'Next JS',
      'Nest JS',
      'MySQL',
      'RabbitMQ',
      'Redis',
      'Material UI',
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
        desc: [
          'Mengembangkan RESTful API dan GraphQL API yang skalabel dan mudah dipelihara untuk mendukung berbagai aplikasi enterprise dan berbasis web, dengan menerapkan prinsip clean code.',
          'Meningkatkan responsivitas aplikasi pada endpoint dengan trafik tinggi melalui identifikasi dan penyelesaian bottleneck performa API dan database, menggunakan optimasi query serta Redis caching.',
          'Menjadi referensi teknis utama dalam pengambilan keputusan terkait pemodelan data dengan merancang dan memimpin penyusunan skema database (ERD) untuk aplikasi baru.',
          'Meningkatkan kualitas kode dan konsistensi proses pengembangan melalui pelaksanaan code review untuk tim backend yang terdiri dari 2 orang serta penyusunan standar engineering.',
          'Menghadirkan solusi bisnis terintegrasi di berbagai lingkungan klien melalui kolaborasi dengan frontend engineer, spesialis GIS, dan stakeholder proyek.',
        ],
      },
      {
        lang: 'en',
        desc: [
          'Delivered scalable, maintainable RESTful and GraphQL APIs powering multiple enterprise and web-based applications, with an emphasis on clean code.',
          'Improved application responsiveness across high-traffic endpoints by resolving critical API and database performance bottlenecks through query optimization and Redis caching.',
          'Became the primary technical reference for data modeling decisions by designing and leading database schema design (ERD) for new applications.',
          'Improved code quality and development consistency by conducting code reviews for a 2-person backend team and establishing engineering standards.',
          'Delivered integrated business solutions across diverse client environments by collaborating with frontend engineers, GIS specialists, and project stakeholders',
        ],
      },
    ],
    techStacks: [
      'Node JS',
      'TypeScript',
      'Nest JS',
      'Laravel',
      'REST API',
      'GraphQL',
      'PostgreSQL',
      'MySQL',
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
      url: 'https://andaf.co.id',
    },
    translates: [
      {
        lang: 'id',
        desc: [
          'Mengembangkan website dan platform digital yang berinteraksi langsung dengan pengguna untuk industri pemasaran dan e-commerce menggunakan Laravel dan MySQL.',
          'Membangun solusi Content Management System (CMS) khusus yang terintegrasi dengan payment gateway pihak ketiga dan API analitik, serta melakukan optimasi SEO dan performa sesuai kebutuhan klien',
          'Bertanggung jawab atas seluruh proses pengembangan fitur, mulai dari perencanaan hingga deployment, dengan berkomunikasi langsung bersama klien untuk menggali kebutuhan dan memberikan rekomendasi solusi teknis',
        ],
      },
      {
        lang: 'en',
        desc: [
          'Delivered client-facing websites and digital platforms for the marketing and e-commerce industries using Laravel and MySQL.',
          'Built custom CMS solutions with integrated third-party payment gateways and analytics APIs, and delivered SEO and performance optimizations per client requirements.',
          'Owned end-to-end feature delivery from planning through deployment, working directly with clients to gather requirements and propose technical solutions.',
        ],
      },
    ],
    techStacks: ['Laravel', 'PHP', 'MySQL', 'Wordpress', 'Git', 'Bootstrap'],
  },
];

export const firstWorkExperience = [...workExperiences].sort((a, b) =>
  a.startDate < b.startDate ? -1 : 1,
)?.[0];

export const yearsOfExperience = dayjs().diff(
  firstWorkExperience.startDate,
  'years',
);
