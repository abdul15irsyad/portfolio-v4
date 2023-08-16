export const portfolios = [
  {
    title: 'Gerakan Seniman Masuk Sekolah 2023',
    href: 'https://gsmsppk.kemdikbud.go.id',
    year: 2023,
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
    title: 'Admin Panel SIPERDIK Aceh Tengah',
    href: null,
    year: 2021,
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
      { icon: '/programming/codeigniter.png', label: 'Codeigniter' },
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
];
