import { BASE_URL } from '../configs/app.config';
import { File } from '@/types/file.type';

export const files: File[] = [
  {
    id: '26b99b44-5713-4b51-890e-8429382d3716',
    createdAt: new Date('2024-03-11 08:29:18+00'),
    updatedAt: new Date('2024-03-11 08:29:18+00'),
    path: 'blog',
    fileName: 'soft-delete-solusi-untuk-salah-hapus.jpg',
    originalFileName: 'soft-delete-solusi-untuk-salah-hapus.jpg',
    mime: 'image/jpg',
  },
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
    fileName: 'nest-js-authentication-menggunakan-passport-part-1.jpg',
    originalFileName: 'nest-js-authentication-menggunakan-passport-part-1.jpg',
    mime: 'image/jpg',
  },
  {
    id: '417db7b7-b046-4d7e-ac07-27bc05550662',
    createdAt: new Date('2023-09-28 20:24:05+00'),
    updatedAt: new Date('2023-09-28 20:24:05+00'),
    path: 'blog',
    fileName: 'array-method-reduce-di-javascript.jpg',
    originalFileName: 'array-method-reduce-di-javascript.jpg',
    mime: 'image/jpg',
  },
  {
    id: '21457d36-da60-445c-928d-f9eb2e294bb0',
    createdAt: new Date('2023-10-05 08:24:05+00'),
    updatedAt: new Date('2023-10-05 08:24:05+00'),
    path: 'blog',
    fileName: 'javascript-ternary-falsy-dan-truthy.jpg',
    originalFileName: 'javascript-ternary-falsy-dan-truthy.jpg',
    mime: 'image/jpg',
  },
  {
    id: '96180893-c966-44e6-93bd-d351693aa546',
    createdAt: new Date('2023-10-20 08:24:05+00'),
    updatedAt: new Date('2023-10-20 08:24:05+00'),
    path: 'blog',
    fileName: 'coba-install-bun-di-windows-11.jpg',
    originalFileName: 'coba-install-bun-di-windows-11.jpg',
    mime: 'image/jpg',
  },
  {
    id: '25ea8ebd-3339-49e7-81dd-60480d021401',
    createdAt: new Date('2023-11-23 15:40:05+00'),
    updatedAt: new Date('2023-11-23 15:40:05+00'),
    path: 'blog',
    fileName: 'bagaimana-komputer-bekerja-bagian-1-dunia-di-mata-komputer.jpeg',
    originalFileName:
      'bagaimana-komputer-bekerja-bagian-1-dunia-di-mata-komputer.jpeg',
    mime: 'image/jpeg',
  },
  {
    id: 'e1c49ad2-c4db-46b6-819a-fdb7f1f76487',
    createdAt: new Date('2023-11-23 15:40:05+00'),
    updatedAt: new Date('2023-11-23 15:40:05+00'),
    path: 'blog',
    fileName: 'rijalghodi.jpeg',
    originalFileName: 'rijalghodi.jpeg',
    mime: 'image/jpeg',
  },
];

export const fileDatas = files.map((file) => {
  return {
    ...file,
    url: `${BASE_URL}/${file.path}/${file.fileName}`,
  };
});
