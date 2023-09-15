import { authors } from '../data/authors.data';
import { blogs } from '../data/blogs.data';
import { files } from '../data/files.data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.file.createMany({ data: files, skipDuplicates: true });
  await prisma.author.createMany({ data: authors, skipDuplicates: true });
  await prisma.blog.createMany({ data: blogs, skipDuplicates: true });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
