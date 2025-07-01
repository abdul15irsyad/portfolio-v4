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
        <li>Mengembangkan dan memelihara aplikasi web internal untuk mendukung operasional perbankan.</li>
        <li>Membangun API backend yang skalabel dan aman menggunakan Express JS (TypeScript) serta mengimplementasikan caching Redis untuk optimasi performa.</li>
        <li>Membuat interface frontend dinamis menggunakan Next JS dan Mantine UI.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `<p>Join the Internal Tools Team.</p>
        <ul>
        <li>Developed and maintained internal web applications to support banking operations.</li>
        <li>Built scalable and secure backend APIs using Express JS (Typescript) and implemented Redis caching for performance optimization.</li>
        <li>Create dynamic frontend interfaces with Next JS and Mantine UI.</li>
        <ul>`,
      },
    ],
    techStacks: [
      'Node JS',
      'Typescript',
      'Express JS',
      'React JS',
      'Next JS',
      'PostgreSQL',
      'Websocket',
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
      url: 'https://bri.co.id',
    },
    translates: [
      {
        lang: 'id',
        desc: `<p>Bergabung dengan Tim Corporate Core Platform (CCP)</p>
        <ul>
        <li>Mengembangkan aplikasi pendukung korporat berdasarkan arahan dari senior developer dan manager.</li>
        <li>Merancang dan mengimplementasikan RESTful API serta microservices menggunakan Fastify JS dan Nest JS.</li>
        <li>Membangun fitur real-time dengan RabbitMQ dan Redis untuk komunikasi asynchronous.</li>
        <li>Mengembangkan komponen UI yang modular dan dapat digunakan kembali menggunakan Material UI dan Next JS.</li>
        <li>Berkontribusi pada layanan backend yang ditulis dengan Golang (Gin) untuk kebutuhan operasional berperforma tinggi.</li>
        <li>Mengimplementasikan background worker dan cron job terjadwal menggunakan Golang untuk menangani tugas periodik seperti sinkronisasi data, pembuatan laporan, dan pengiriman notifikasi.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `<p>Join the Corporate Core Platform (CCP) Team</p>
        <ul>
        <li>Developed corporate support applications based on instructions from senior developers and team leads.</li>
        <li>Designed and implemented RESTful APIs and microservices using Fastify JS and Nest JS.</li>
        <li>Built real-time features with RabbitMQ and Redis for asynchronous messaging.</li>
        <li>Developed modular and reusable UI components using Material UI and Next JS.</li>
        <li>Contributed to the backend services written in Golang (Gin) for high-performance operations.</li>
        <li>Implemented background workers and scheduled cron jobs using Golang to handle periodic tasks such as data syncing, report generation, and notification dispatching.</li>
        </ul>`,
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
        desc: `
        <ul>
        <li>Merancang dan mengembangkan RESTful API serta GraphQL menggunakan Nest JS dan Laravel untuk mendukung aplikasi berbasis web.</li>
        <li>Mengintegrasikan database PostgreSQL dan MySQL dengan query yang dioptimalkan dan perancangan skema yang efisien.</li>
        <li>Mengimplementasikan strategi caching menggunakan Redis untuk meningkatkan waktu respons dan mengurangi beban server.</li>
        <li>Bekerja sama secara erat dengan developer frontend dan tim GIS untuk memastikan integrasi sistem yang lancar.</li>
        <li>Menjaga kode backend tetap bersih dan modular sesuai dengan best practice rekayasa perangkat lunak.</li>
        <li>Berpartisipasi dalam code review, alur kerja version control (Git), dan proses pengembangan agile.</li>
        <li>Memantau performa aplikasi dan melakukan optimasi pada query database serta endpoint API.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `
        <ul>
        <li>Designed and developed RESTful and GraphQL APIs using Nest JS and Laravel to support web-based applications.</li>
        <li>Integrated PostgreSQL and MySQL databases with optimized queries and schema design.</li>
        <li>Implemented Redis caching strategies to improve response times and reduce server load.</li>
        <li>Collaborated closely with frontend developers and GIS teams to ensure seamless integration across systems.</li>
        <li>Maintained clean and modular backend code following software engineering best practices.</li>
        <li>Participated in code reviews, version control workflows (Git), and agile development processes.</li>
        <li>Monitored application performance and performed optimizations on database queries and API endpoints.</li>
        </ul>`,
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
      url: 'https://andaf.co.id',
    },
    translates: [
      {
        lang: 'id',
        desc: `
        <ul>
        <li>Merancang dan memelihara situs web untuk klien digital marketing dan e-commerce.</li>
        <li>Membangun platform CMS kustom berbasis Laravel untuk kampanye pemasaran klien.</li>
        <li>Menyesuaikan dan mengembangkan tema WordPress sesuai kebutuhan branding klien.</li>
        <li>Mengintegrasikan gateway pembayaran dan alat analitik ke dalam situs web klien.</li>
        <li>Berkontribusi dalam strategi SEO dan upaya optimasi performa situs.</li>
        <li>Berinteraksi langsung dengan klien untuk mengumpulkan kebutuhan dan menerjemahkannya ke dalam fitur yang fungsional.</li>
        </ul>`,
      },
      {
        lang: 'en',
        desc: `
        <ul>
        <li>Designed and maintained websites for digital marketing and e-commerce clients.</li>
        <li>Built custom Laravel-based CMS platforms for client marketing campaigns.</li>
        <li>Customized and extended WordPress themes based on client branding needs.</li>
        <li>Integrated payment gateways and analytics tools into client websites.</li>
        <li>Contributed to SEO strategies and performance optimization efforts.</li>
        <li>Interacted directly with clients to gather requirements and translate them into functional features.</li>
        </ul>`,
      },
    ],
    techStacks: ['Wordpress', 'Laravel', 'PHP', 'MySQL', 'Git', 'Bootstrap'],
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
