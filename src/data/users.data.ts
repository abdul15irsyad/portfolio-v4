import { BASE_URL } from '@/configs/app.config';
import { User } from '../types/user.type';
import { fileDatas } from './files.data';

export const users: User[] = [
  {
    id: '2f5bfc80-f7fe-4759-a281-33e803e92604',
    name: 'Rijal Ghodi',
    photoId: 'e1c49ad2-c4db-46b6-819a-fdb7f1f76487',
    linkedin: 'https://www.linkedin.com/in/rijal-ghodi',
  },
  {
    id: '8c27ac9e-d197-473d-907c-9e162203d072',
    name: 'Raihan Budiyarto',
    photo: {
      id: '0068a1c3-82a0-462f-8da9-0d205773583f',
      path: 'user',
      fileName: 'raihan-budiyarto.jpeg',
      originalFileName: 'raihan-budiyarto.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/raihan-budiyarto-98817321a/',
  },
  {
    id: 'a465903e-683a-4a40-8d13-f1543aed6625',
    name: 'Dito Anggoro',
    photo: {
      id: 'bcbd807d-044d-44d3-a6b3-0772546f76f9',
      path: 'user',
      fileName: 'dito-anggoro.jpeg',
      originalFileName: 'dito-anggoro.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/ditoanggoro/',
  },
  {
    id: '25a009a4-eeb7-42f9-8545-13b479b54ad4',
    name: 'M. Teguh Irawan',
    photo: {
      id: 'ebaa2777-4a01-42c1-8e7c-d43bd40434b3',
      path: 'user',
      fileName: 'teguh-irawan.jpeg',
      originalFileName: 'teguh-irawan.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/irawan-m-774762229/',
  },
  {
    id: '24f40aa0-3386-4be5-be33-367ecdfcd938',
    name: 'Roni Ardiyanto',
    photo: {
      id: 'e7528dd8-e99b-41bf-bd03-da6eca69efd6',
      path: 'user',
      fileName: 'roni-ardiyanto.jpeg',
      originalFileName: 'roni-ardiyanto.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/roniardiyanto/',
  },
  {
    id: 'ef1b3fd9-b395-404c-b1cd-82d862a05ab3',
    name: 'Sistiandy Syahbana',
    photo: {
      id: '4a405b04-d9bb-4aec-9cff-d41199c93313',
      path: 'user',
      fileName: 'sistiandy-syahbana.jpeg',
      originalFileName: 'sistiandy-syahbana.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/sistiandy/',
  },
  {
    id: '4f2be582-06a8-47a4-af48-7f742544f4cf',
    name: 'M. Silmi Kaffah',
    photo: {
      id: '5ab97a7d-5f7b-47d5-ad4b-fdb3f26de399',
      path: 'user',
      fileName: 'silmi-kaffah.jpeg',
      originalFileName: 'silmi-kaffah.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/muhammad-silmi-kaffah/',
  },
  {
    id: 'e05b71ec-002e-487c-b101-be953c5ac44d',
    name: 'Zainal Muttaqin',
    photo: {
      id: '6796dd1c-b6aa-4857-b63a-1a0c1a8490bb',
      path: 'user',
      fileName: 'zainal-muttaqin.jpeg',
      originalFileName: 'zainal-muttaqin.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/zainal-muttaqin/',
  },
  {
    id: '69cb835e-efd7-4aa5-8012-6bedbf4eacdc',
    name: 'Fajar',
  },
].map((user) => ({
  ...user,
  photo: user.photo
    ? {
        ...user.photo,
        url: `${BASE_URL}/${user.photo.path}/${user.photo.fileName}`,
      }
    : fileDatas.find(({ id }) => id === user.photoId),
}));
