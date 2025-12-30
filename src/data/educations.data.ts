import { Education } from '@/types/education.type';

export const educations: Education<{ major: string }>[] = [
  {
    icon: '/icons/university-2.svg',
    institution: 'UIN Syarif Hidayatullah Jakarta',
    level: 's1',
    major: 'informatics-engineering',
    gpa: 3.52,
    startYear: 2016,
    endYear: 2022,
    href: 'https://pddikti.kemdiktisaintek.go.id/detail-mahasiswa/0PoYActEWNaZ5l7nqyK9gpI3bg6461MOUekMd_q-etmveqQ6kSBm0XQVEkB81JljmwbVxg==',
  },
  {
    icon: '/icons/school-2.svg',
    institution: 'MA Al-Zaytun',
    level: 'sr-high-school',
    major: null,
    startYear: 2013,
    endYear: 2016,
  },
];
