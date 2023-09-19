import { authors } from '../data/authors.data';
import { blogs } from '../data/blogs.data';
import { files } from '../data/files.data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  // await prisma.file.createMany({ data: files, skipDuplicates: true });
  // await prisma.author.createMany({ data: authors, skipDuplicates: true });
  // await prisma.blog.createMany({ data: blogs, skipDuplicates: true });
  for (const file of files) {
    await prisma.file.upsert({
      update: file,
      create: file,
      where: { id: file.id },
    });
  }
  for (const author of authors) {
    const data = {
      ...author,
      photo: undefined,
    };
    await prisma.author.upsert({
      update: data,
      create: data,
      where: { id: author.id },
    });
  }
  for (const blog of blogs) {
    const data = {
      ...blog,
      tags: blog.tags.join(','),
      featureImage: undefined,
      author: undefined,
    };
    await prisma.blog.upsert({
      update: data,
      create: data,
      where: { id: blog.id },
    });
  }
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
