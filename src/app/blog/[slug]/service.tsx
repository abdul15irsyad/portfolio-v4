import { blogs } from '@/data/blogs.data';

export const getBlog = (blogSlug: string) =>
  blogs.find(({ slug }) => slug === blogSlug);
