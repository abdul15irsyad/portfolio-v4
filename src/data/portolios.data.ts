import { Portfolio } from '@/types/portfolio.type';

export const portfolios: Portfolio[] = [
  {
    title: 'Gerakan Seniman Masuk Sekolah 2023',
    href: 'https://gsmsppk.kemdikbud.go.id',
    year: 2023,
    order: 202303,
    type: 'Backend',
    desc: `
      <p>
        Gerakan Seniman Masuk Sekolah (GSMS) 2023 adalah program seniman memberikan
        pembelajaran kesenian pada kegiatan ekstrakurikuler di Sekolah, adapun peran saya
        dalam project ini adalah sebagai <strong>Backend Developer</strong> baik di bagian Landing Page
        (website) maupun Dashboard (aplikasi web).
      </p>
    `,
    stacks: [
      { icon: '/programming/nestjs.png', label: 'Nest JS' },
      { icon: '/programming/redis.png', label: 'Redis' },
      { icon: '/programming/typeorm.png', label: 'TypeORM' },
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
  },
  {
    title: 'PPKD Pemantaun & Evaluasi',
    href: 'https://monevppkd.kemdikbud.go.id',
    year: 2023,
    order: 202302,
    type: 'Backend',
    desc: `
      <p>
        Website Pokok Pikiran Kebudayaan Daerah (PPKD) Dokumen merupakan aplikasi web
        yang diperuntukkan kepada dinas daerah dalam penyusunan dokumen PPKD,
        adapun peran saya dalam project ini adalah sebagai <strong>Backend Developer</strong> baik di
        bagian Landing Page (website) maupun Dashboard (aplikasi web).
      </p>
    `,
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
  },
  {
    title: 'PPKD Dokumen',
    href: 'https://ppkd.kemdikbud.go.id',
    year: 2023,
    order: 202301,
    type: 'Backend',
    desc: `
      <p>
        Website Pokok Pikiran Kebudayaan Daerah (PPKD) Dokumen merupakan aplikasi web
        yang diperuntukkan kepada dinas daerah dalam penyusunan dokumen PPKD,
        adapun peran saya dalam project ini adalah sebagai <strong>Backend Developer</strong> baik di
        bagian Landing Page (website) maupun Dashboard (aplikasi web).
      </p>
    `,
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
  },
  {
    title: 'PUSDIKLAT Tenaga Teknis Pendidikan Dan Keagamaan',
    href: 'https://pusdiklatteknis.kemenag.go.id',
    year: 2022,
    order: 202213,
    type: 'Frontend',
    desc: `
      <p>
        Saya ikut andil dalam pembuatan website PUSDIKLAT Tenaga Teknis Pendidikan Dan
        Keagamaan, yakni website untuk informasi seputar Lembaga tersebut. Saya
        mengerjakan bagian tampilan untuk website ini, dibuat menggunakan Laravel 7
        dengan Database MySQL dan styling menggunakan bootstrap 4.
      </p>
    `,
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
  },
  {
    title: 'Admin Panel Digital Andaf',
    href: null,
    year: 2022,
    order: 202212,
    type: 'Fullstack',
    desc: `
      <p>
        Saya ikut andil dalam pembuatan project Digital Andaf, yakni web app untuk tracking
        pengerjaan suatu project di kantor. Digital Andaf ini dibuat menggunakan Laravel 7
        dengan Database MySQL, untuk styling menggunakan Bootstrap 4.
      </p>
    `,
    stacks: [
      { icon: '/programming/laravel.png', label: 'Laravel' },
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
  },
  {
    title: 'Admin Panel SIPERDIK Aceh Tengah',
    href: null,
    year: 2021,
    order: 202101,
    type: 'Fullstack',
    desc: `
      <p>
        Pada project tersebut saya membuat admin panel untuk website SIPERDIK
        Aceh Tengah, dibuat menggunakan framework CodeIniter 4 dengan Database
        MySQL, untuk styling saya menggunakan Bootstrap 4, namun project
        tersebut belum dimigrasi ke domain yang diinginkan.
      </p>
    `,
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
  },
  {
    title: 'Sop Buntut Ibu Samino',
    href: 'https://sopbuntutibusamino.com/',
    year: 2022,
    order: 202201,
    type: 'Wordpress',
    desc: `
      <p>
        Company profile rumah makan <b>"Sop Buntut Ibu Samino"</b> yang berisi menu-menu makanan dan minuman yang ada beserta lokasi cabang di beberapa daerah. Website ini dibuat menggunakan Wordpress
      </p>
    `,
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
    year: 2022,
    order: 202202,
    type: 'Wordpress',
    desc: `
      <p>
        Landing page vendor konveksi <b>"Safari Konveksi"</b> yang berisi detail layanan yang dimiliki dan beberapa contoh produk yang dibuat untuk mitra. Website ini dibuat menggunakan Wordpress
      </p>
    `,
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
    year: 2022,
    order: 202203,
    type: 'Wordpress',
    desc: `
      <p>
        Company profile <b>"Beton Analytica"</b> yang berisi detail produk dan keunggulan-keunggulannya, lalu terdapat fitur dengan 2 bahasa yakni bahasa indonesia dan bahasa inggris. Website ini dibuat menggunakan Wordpress
      </p>
    `,
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
    year: 2021,
    order: 202102,
    type: 'Wordpress',
    desc: `
      <p>
        Company profile <b>"Padi Resort"</b> yang berisi tipe-tipe kamar yang ada di resort tersebut beserta paket-paket yang tersedia. Website ini dibuat menggunakan Wordpress
      </p>
    `,
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
    year: 2021,
    order: 202103,
    type: 'Wordpress',
    desc: `
      <p>
        <b>"Galaxy Partani Mas"</b> merupakan perusahaan importir dan distributor dalam bidang mekanisasi pertanian, dalam company profile ini berisi katalog seluruh produk beserta detail nya. Website ini dibuat menggunakan Wordpress
      </p>
    `,
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
    year: 2022,
    order: 202204,
    type: 'Wordpress',
    desc: `
      <p>
        <b>"PT. Prima Citra Inovindo"</b> Perusahaan Distributor Alat Kesehatan Dalam Negeri (AKD) produk yang di produksi oleh pabrikan.Website ini dibuat menggunakan Wordpress
      </p>
    `,
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
  },
].sort((a, b) => (a.order < b.order ? 1 : -1));
