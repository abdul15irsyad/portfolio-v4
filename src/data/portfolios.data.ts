import { Portfolio } from '@/types/portfolio.type';
import dayjs from 'dayjs';
import slugify from 'slugify';
import { users } from './users.data';

export const portfolios: Portfolio[] = [
  {
    title: 'Fasel Base',
    href: 'https://faselbase.com/',
    publishedAt: '2024-02-10',
    type: 'Fullstack',
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
    type: 'Backend',
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
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
      { icon: '/programming/redis.png', label: 'Redis' },
      { icon: '/programming/postgresql.png', label: 'Postgre SQL' },
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
    title: 'PPKD Pemantaun & Evaluasi',
    href: 'https://monevppkd.kemdikbud.go.id',
    publishedAt: '2023-06-10',
    type: 'Backend',
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
        role: 'Backend Developer',
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
    type: 'Backend',
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
    type: 'Frontend',
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
    type: 'Fullstack',
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
    type: 'Fullstack',
    challenges: [
      {
        translates: [
          {
            lang: 'id',
            desc: 'Sinkronisasi data sekolah, siswa, guru, dll. dengan data yang ada di DAPODIK <a href="https://dapo.kemdikbud.go.id/" target="_blank">https://dapo.kemdikbud.go.id</a> untuk daerah Aceh Tengah',
          },
          {
            lang: 'en',
            desc: 'Synchronization of school data, students, teachers, etc. with the data in Dapodik <a href="https://dapo.kemdikbud.go.id/" target="_blank">https://dapo.kemdikbud.go.id</a> for Central Aceh region',
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
    type: 'Wordpress',
    desc: `
      <p>
        Company profile rumah makan <b>"Sop Buntut Ibu Samino"</b> yang berisi menu-menu makanan dan minuman yang ada beserta lokasi cabang di beberapa daerah.
      </p>
    `,
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
    type: 'Wordpress',
    desc: `
      <p>
        Landing page vendor konveksi <b>"Safari Konveksi"</b> yang berisi detail layanan yang dimiliki dan beberapa contoh produk yang dibuat untuk mitra.
      </p>
    `,
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
    type: 'Wordpress',
    desc: `
      <p>
        Company profile <b>"Beton Analytica"</b> yang berisi detail produk dan keunggulan-keunggulannya, lalu terdapat fitur dengan 2 bahasa yakni bahasa indonesia dan bahasa inggris.
      </p>
    `,
    challenges: [],
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
    type: 'Wordpress',
    desc: `
      <p>
        Company profile <b>"Padi Resort"</b> yang berisi tipe-tipe kamar yang ada di resort tersebut beserta paket-paket yang tersedia.
      </p>
    `,
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
    type: 'Wordpress',
    desc: `
      <p>
        <b>"Galaxy Partani Mas"</b> merupakan perusahaan importir dan distributor dalam bidang mekanisasi pertanian, dalam company profile ini berisi katalog seluruh produk beserta detail nya.
      </p>
    `,
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
    type: 'Wordpress',
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
]
  .map((portfolio) => ({
    ...portfolio,
    year: dayjs(portfolio.publishedAt).year(),
    slug: slugify(portfolio.title, { strict: true, lower: true }),
    teams: portfolio.teams
      ?.map((team) => ({
        ...team,
        user: users.find((user) => team.userId === user.id),
      }))
      .sort((a, b) => (a.user!.name < b.user!.name ? -1 : 1)),
  }))
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
