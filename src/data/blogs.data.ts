import { BASE_URL } from '@/configs/app.config';

export const blogs = [
  {
    id: 'bd7a365d-b8ca-40c9-81f2-10ebaed28304',
    title: 'Nest JS Setup Database With TypeORM',
    slug: 'nest-js-setup-database-with-typeorm',
    featureImage: {
      originalFileName: 'nest-js-setup-database-with-typeorm.jpg',
      url: `${BASE_URL}/blog/nest-js-setup-database-with-typeorm.jpg`,
    },
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    tags: ['nestjs', 'typeorm', 'typescript'],
    createdAt: '2023-08-24 12:04:34.788 +0700',
    updatedAt: '2023-08-24 12:04:34.788 +0700',
  },
];
