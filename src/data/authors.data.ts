import { Author } from '@/types/author.type';
import { files } from './files.data';

export const authors: Author[] = [
  {
    id: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    name: 'irsyad abdul',
    photoId: '923734b7-a429-4f16-918b-cfac9e4facc9',
    createdAt: new Date('2023-08-28 08:09:18+00'),
    updatedAt: new Date('2023-08-28 08:09:18+00'),
  },
];

export const authorDatas = authors.map((author) => {
  return { ...author, photo: files.find(({ id }) => id === author.photoId) };
});
