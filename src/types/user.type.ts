import { File } from './file.type';

export interface User {
  id: string;
  name: string;
  photoId?: string | null;
  photo?: File | null;
  linkedin?: string | null;
}
