import { Blog } from '../types/blog.type';
import { authors } from '../data/authors.data';
import { blogs } from '../data/blogs.data';
import { files } from '../data/files.data';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import { random } from '../utils/array.util';
import { ENV } from '../configs/app.config';
import { randomInt } from '../utils/number.util';

const prisma = new PrismaClient();
async function main() {
  await prisma.file.createMany({ data: files, skipDuplicates: true });
  await prisma.author.createMany({ data: authors, skipDuplicates: true });
  await prisma.blog.createMany({ data: blogs, skipDuplicates: true });
  if (ENV !== 'production') {
    const dummyBlogs: Blog[] = [];
    for (let i = 0; i < 30; i++) {
      const tags: string[] = [];
      for (let j = 0; j < randomInt(1, 5); j++) {
        tags.push(`tag ${randomInt(1, 20)}`);
      }
      dummyBlogs.push({
        id: randomUUID(),
        title: `Judul ${i + 1}`,
        slug: slugify(`Judul ${i + 1}`, { strict: true, lower: true }),
        content: `contoh konten judul ${i + 1}`,
        authorId: random(authors.map(({ id }) => id)),
        featureImageId: random(blogs.map((blog) => blog.featureImageId)),
        tags,
        publishedAt: dayjs('2023-10-03 00:00:00').subtract(i, 'days').toDate(),
        createdAt: dayjs('2023-10-03 00:00:00').subtract(i, 'days').toDate(),
        updatedAt: dayjs('2023-10-03 00:00:00').subtract(i, 'days').toDate(),
      });
    }
    await prisma.blog.createMany({
      data: dummyBlogs,
      skipDuplicates: true,
    });
  }
  // for (const file of files) {
  //   await prisma.file.upsert({
  //     update: file,
  //     create: file,
  //     where: { id: file.id },
  //   });
  // }
  // for (const author of authors) {
  //   const data = {
  //     ...author,
  //     photo: undefined,
  //   };
  //   await prisma.author.upsert({
  //     update: data,
  //     create: data,
  //     where: { id: author.id },
  //   });
  // }
  // for (const blog of blogs) {
  //   const data = {
  //     ...blog,
  //     tags: blog.tags?.join(','),
  //     featureImage: undefined,
  //     author: undefined,
  //   };
  //   await prisma.blog.upsert({
  //     update: data,
  //     create: data,
  //     where: { id: blog.id },
  //   });
  // }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
