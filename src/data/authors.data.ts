import { Author } from '@/types/author.type';

import { fileDatas } from './files.data';

export const authors: Author[] = [
  {
    id: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    name: 'irsyad abdul',
    photoId: '923734b7-a429-4f16-918b-cfac9e4facc9',
    url: null,
    createdAt: new Date('2023-08-28 08:09:18+00'),
    updatedAt: new Date('2023-08-28 08:09:18+00'),
  },
  {
    id: '06ebb3cb-9393-4455-90bb-07f935d00562',
    name: 'rijal ghodi',
    photoId: 'e1c49ad2-c4db-46b6-819a-fdb7f1f76487',
    url: 'https://www.linkedin.com/in/rijal-ghodi',
    createdAt: new Date('2023-11-23 15:40:00+00'),
    updatedAt: new Date('2023-11-23 15:40:00+00'),
  },
];

export const authorDatas = authors.map((author) => {
  return {
    ...author,
    photo: fileDatas.find(({ id }) => id === author.photoId),
  };
});
