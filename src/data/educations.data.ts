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
