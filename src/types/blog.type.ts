import { Author } from './author.type';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  author?: Author;
  featureImage: {
    originalFileName: string;
    url: string;
  };
  content: string;
  tags: string[];
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
