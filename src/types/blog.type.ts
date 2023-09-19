import { Author } from './author.type';
import { File } from './file.type';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  author?: Author | null;
  authorId?: string | null;
  featureImageId: string;
  featureImage?: File | null;
  content: string;
  tags?: string[];
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
