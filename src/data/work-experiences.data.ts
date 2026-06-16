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
        desc: `<p>Bergabung dengan Tim Internal Tools.</p>
        <ul>
        <li>Mengembangkan dan meningkatkan platform perbankan internal yang mendukung alur kerja operasional dan bisnis di berbagai departemen.</li>
        <li>Merancang dan mengimplementasikan layanan backend yang aman dan skalabel menggunakan TypeScript dan Express.js dengan fokus pada maintainability dan performa.</li>
        <li>Menerapkan strategi caching Redis untuk meningkatkan responsivitas aplikasi dan mengurangi beban database.</li>
        <li>Membangun antarmuka pengguna yang modern dan responsif menggunakan Next.js dan Mantine UI untuk meningkatkan usability dan user experience.</li>
        <li>Mengoptimalkan alur pemrosesan background dan eksekusi job asinkron untuk meningkatkan efisiensi dan reliabilitas sistem.</li>
        <li>Berkolaborasi dengan product owner, stakeholder bisnis, dan tim engineering untuk menghadirkan fitur yang selaras dengan kebutuhan operasional.</li>
        <li>Berkontribusi pada skalabilitas dan observabilitas sistem dalam lingkungan cloud-native yang berjalan di infrastruktur AWS.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `<p>Join the Internal Tools Team.</p>
        <ul>
        <li>Developed and enhanced internal banking platforms that support operational and business workflows across multiple departments.</li>
        <li>Designed and implemented secure, scalable backend services using TypeScript and Express.js with a focus on maintainability and performance.</li>
        <li>Introduced Redis caching strategies to improve application responsiveness and reduce database workload.</li>
        <li>Built modern and responsive user interfaces using Next.js and Mantine UI to improve usability and user experience.</li>
        <li>Optimized background processing workflows and asynchronous job execution to improve system efficiency and reliability.</li>
        <li>Collaborated with product owners, business stakeholders, and engineering teams to deliver features aligned with operational requirements.</li>
        <li>Contributed to system scalability and observability within cloud-native environments running on AWS infrastructure.</li>
        </ul>`,
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
        desc: `<p>Bergabung dengan Tim Corporate Core Platform (CCP)</p>
        <ul>
        <li>Berkontribusi dalam pengembangan platform perbankan korporat internal yang mendukung proses operasional dan bisnis.</li>
        <li>Merancang dan mengimplementasikan RESTful API serta microservices menggunakan Fastify dan NestJS dengan mengikuti prinsip arsitektur yang skalabel.</li>
        <li>Mengembangkan solusi event-driven dan asinkron menggunakan RabbitMQ dan Redis untuk meningkatkan integrasi dan reliabilitas sistem.</li>
        <li>Membangun komponen frontend yang reusable dan modul aplikasi menggunakan Next.js dan Material UI untuk mempercepat pengiriman fitur.</li>
        <li>Berpartisipasi dalam pengembangan dan pemeliharaan layanan Golang yang mendukung operasi bisnis berperforma tinggi.</li>
        <li>Mengimplementasikan scheduled jobs, background workers, dan proses otomasi untuk menyederhanakan tugas bisnis berulang.</li>
        <li>Berkolaborasi erat dengan tim lintas fungsi untuk menganalisis kebutuhan, merancang solusi, dan menghadirkan aplikasi yang siap produksi.</li>
        <li>Berkontribusi pada peningkatan performa sistem melalui optimasi kode, peningkatan arsitektur, dan troubleshooting teknis.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `<p>Join the Corporate Core Platform (CCP) Team</p>
        <ul>
        <li>Contributed to the development of internal corporate banking platforms supporting operational and business processes.</li>
        <li>Designed and implemented RESTful APIs and microservices using Fastify and NestJS following scalable architecture principles.</li>
        <li>Developed event-driven and asynchronous solutions using RabbitMQ and Redis to improve system integration and reliability.</li>
        <li>Built reusable frontend components and application modules using Next.js and Material UI to accelerate feature delivery.</li>
        <li>Participated in the development and maintenance of Golang services supporting high-performance business operations.</li>
        <li>Implemented scheduled jobs, background workers, and automation processes to streamline recurring business tasks.</li>
        <li>Collaborated closely with cross-functional teams to analyze requirements, design solutions, and deliver production-ready applications.</li>
        <li>Contributed to system performance improvements through code optimization, architectural enhancements, and technical troubleshooting.</li>
        </ul>`,
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
        desc: `
        <ul>
        <li>Merancang dan mengembangkan RESTful dan GraphQL API yang mendukung berbagai aplikasi enterprise dan berbasis web.</li>
        <li>Merancang arsitektur layanan backend menggunakan NestJS dan Laravel dengan penekanan pada skalabilitas, maintainability, dan clean code.</li>
        <li>Mendesain skema database dan mengoptimalkan pola akses data di lingkungan PostgreSQL dan MySQL.</li>
        <li>Mengimplementasikan mekanisme caching menggunakan Redis untuk meningkatkan performa aplikasi dan mengurangi beban backend.</li>
        <li>Berkolaborasi dengan engineer frontend, spesialis GIS, dan stakeholder proyek untuk menghadirkan solusi bisnis yang terintegrasi.</li>
        <li>Melakukan code review dan berkontribusi pada standar engineering, meningkatkan kualitas kode dan konsistensi pengembangan.</li>
        <li>Mendiagnosis dan menyelesaikan bottleneck aplikasi melalui optimasi di level API, database, dan infrastruktur.</li>
        <li>Berpartisipasi aktif dalam proses pengembangan agile, sprint planning, dan diskusi teknis.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `
        <ul>
        <li>Designed and developed RESTful and GraphQL APIs powering multiple enterprise and web-based applications.</li>
        <li>Architected backend services using NestJS and Laravel with emphasis on scalability, maintainability, and clean code practices.</li>
        <li>Designed database schemas and optimized data access patterns across PostgreSQL and MySQL environments.</li>
        <li>Implemented caching mechanisms using Redis to improve application performance and reduce backend load.</li>
        <li>Collaborated with frontend engineers, GIS specialists, and project stakeholders to deliver integrated business solutions.</li>
        <li>Conducted code reviews and contributed to engineering standards, improving code quality and development consistency.</li>
        <li>Diagnosed and resolved application bottlenecks through API, database, and infrastructure-level optimizations.</li>
        <li>Participated actively in agile development processes, sprint planning, and technical discussions.</li>
        </ul>`,
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
        desc: `
        <ul>
        <li>Mengembangkan dan memelihara situs web serta platform digital untuk klien di industri marketing dan e-commerce.</li>
        <li>Membangun content management system kustom menggunakan Laravel untuk mendukung operasi bisnis dan pemasaran.</li>
        <li>Menyesuaikan dan mengembangkan tema serta plugin WordPress berdasarkan kebutuhan branding dan fungsional klien.</li>
        <li>Mengintegrasikan layanan pihak ketiga termasuk payment gateway, platform analitik, dan API eksternal.</li>
        <li>Meningkatkan performa website, kesiapan SEO, dan user experience secara keseluruhan melalui optimasi teknis.</li>
        <li>Berkolaborasi langsung dengan klien untuk mengumpulkan kebutuhan, mengusulkan solusi teknis, dan mencapai tujuan bisnis.</li>
        <li>Mengelola implementasi fitur end-to-end mulai dari perencanaan dan pengembangan hingga deployment dan pemeliharaan.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `
        <ul>
        <li>Developed and maintained websites and digital platforms for clients across marketing and e-commerce industries.</li>
        <li>Built custom content management systems using Laravel to support business and marketing operations.</li>
        <li>Customized and extended WordPress themes and plugins based on client-specific branding and functional requirements.</li>
        <li>Integrated third-party services including payment gateways, analytics platforms, and external APIs.</li>
        <li>Improved website performance, SEO readiness, and overall user experience through technical optimizations.</li>
        <li>Collaborated directly with clients to gather requirements, propose technical solutions, and deliver business objectives.</li>
        <li>Managed end-to-end feature implementation from planning and development through deployment and maintenance.</li>
        </ul>`,
      },
    ],
    techStacks: ['Laravel', 'PHP', 'MySQL', 'Wordpress', 'Git', 'Bootstrap'],
  },
  // {
  //   id: '81594155-f568-4f57-943d-0c4635f6023c',
  //   position: 'Web Developer',
  //   startDate: dayjs(`2020-02-01`).toDate(),
  //   endDate: dayjs(`2020-03-01`).toDate(),
  //   company: {
  //     name: 'Lingkar 9',
  //     logo: '/experience/new-lingkar-9.png',
  //     url: 'https://lingkar9.com/',
  //   },
  //   translates: [
  //     {
  //       lang: 'id',
  //       desc: 'Untuk menambah pengalaman saya memutuskan untuk magang di perusahaan ini, saya diajarkan berbagai macam hal terkait dunia kerja dan dunia pemrograman',
  //     },
  //     {
  //       lang: 'en',
  //       desc: 'To get an experience I decided to do an internship at this company, I was taught various things related to the world of work and the world of programming',
  //     },
  //   ],
  //   techStacks: ['Laravel', 'PHP', 'MySQL'],
  // },
];
