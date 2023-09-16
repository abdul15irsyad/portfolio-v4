import { BASE_URL } from '../configs/app.config';
import { File } from '@/types/file.type';

export const files: File[] = [
  {
    id: 'b21f2576-b044-481c-a030-bdad3d31c334',
    createdAt: new Date('2023-08-28 08:09:18+00'),
    updatedAt: new Date('2023-08-28 08:09:18+00'),
    path: 'blog',
    fileName: 'nest-js-setup-database-with-typeorm.jpg',
    originalFileName: 'nest-js-setup-database-with-typeorm.jpg',
    mime: 'image/jpg',
  },
  {
    id: '923734b7-a429-4f16-918b-cfac9e4facc9',
    createdAt: new Date('2023-08-28 08:09:18+00'),
    updatedAt: new Date('2023-08-28 08:09:18+00'),
    path: 'blog',
    fileName: 'abdul15irsyad.jpg',
    originalFileName: 'abdul15irsyad.jpg',
    mime: 'image/jpg',
  },
  {
    id: 'a67191bf-24af-4aeb-8936-28ef81cfead8',
    createdAt: new Date('2023-09-04 07:10:37+00'),
    updatedAt: new Date('2023-09-04 07:10:37+00'),
    path: 'blog',
    fileName: 'penggunaan-seeder-di-suatu-project.png',
    originalFileName: 'penggunaan-seeder-di-suatu-project.png',
    mime: 'image/png',
  },
  {
    id: '7ad95cdf-d9bc-4115-8420-7ed88d009333',
    createdAt: new Date('2023-09-11 07:13:05+00'),
    updatedAt: new Date('2023-09-11 07:13:05+00'),
    path: 'blog',
    fileName: 'nest-js-authentication-menggunakan-passport-part-1-min.jpg',
    originalFileName:
      'nest-js-authentication-menggunakan-passport-part-1-min.jpg',
    mime: 'image/jpg',
  },
];

export const fileDatas = files.map((file) => {
  return {
    ...file,
    url: `${BASE_URL}/${file.path}/${file.fileName}`,
  };
});
