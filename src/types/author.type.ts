import { File } from './file.type';

export interface Author {
  id: string;
  name: string;
  photoId?: string | null;
  photo?: File | null;
  createdAt: Date;
  updatedAt: Date;
}
