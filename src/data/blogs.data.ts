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
    content: `
    <article>
    <p>
    halo kawan-kawan semuaaa... pada kesempatan ini saya ingin sharing mengenai setup database (dalam contoh ini saya pakai postgresql) di <code>nest js</code> menggunakan typeorm, mengapa <code>nest js</code>? karena menurut saya mengerjakan project dengan <code>typescript</code> dapat mempermudah proses pengembangan suatu aplikasi serta beberapa library <code>nest js</code> yang mudah untuk diintegrasikan dengan teknologi lain.
    </p>
    <p>
    sebelum kita lanjut pastikan kita sudah memahami prerequisites berikut biar ga bingung di pertengahan nantinya
    </p>
    <ul>
      <li>node js dasar (termasuk <code>typescript</code>-nya)</li>
      <li>database (<code>postgresql</code> atau <code>mysql</code>)</li>
    </ul>
    <p>
    oke jika sudah clear maka langsung saja kita masuk ke langkah yang pertama
    </p>
    <h3>1. setup nest js</h3>
    <p>
    pertama-tama kita create project nya dengan <code>nest cli</code> dengan mengetikkan command berikut di terminal
    </p>
    <pre>
    <code>
    npm i -g @nestjs/cli
    nest new nest-typeorm
    </code>
    </pre>
    <p>
    akan muncul pertanyaan mengenai package manager yang kita gunakan, pilih yang diinginkan (saya pilih <code>yarn</code> karena sudah terbiasa) setelah itu tunggu sampai proses instalasi selesai, jika sudah akan terbuat directory/folder baru dengan nama <code>nest-typeorm</code> (sesuai nama project nya), buka directory tersebut dengan visual studio code
    </p>
    <pre>
    code nest-typeorm
    </pre>
    <p>
    langsung aja kita coba jalanin projectnya pakai mode development dengan command berikut (di terminal vs-code)
    </p>
    <pre>
    yarn start:dev
    </pre>
    <p>
    jika tidak ada error maka project kita berhasil berjalan di port <code>3000</code> (default), kita bisa mengeceknya dengan mengetikkan <code>http://localhost:3000</code> di browser, akan muncul pesan <code>Hello World!</code>
    </p>
    <h3>2. install typeorm</h3>
    <p>
    kita buat dulu database <code>postgresql</code> yang mau kita pakai di project ini, bisa menggunakan <code>psql</code> atau di aplikasi database viewer seperti dbeaver, heidisql, dll.
    </p>
    <pre>
    psql -U postgres -c "create database \\"nestjs-typeorm\\""
    </pre>
    <p>
    selanjutnya kita akan install library <code>typeorm</code>, di nestjs ada library <code>@nestjs/typeorm</code> untuk mempermudah integrasi nya, kita install terlebih dahulu
    </p>
    <pre>
    yarn add @nestjs/typeorm typeorm pg
    </pre>
    <h3>3. datasource</h3>
    <p>
    setelah selesai diinstall, buat folder <code>database</code> di dalam folder <code>src</code>, kegunaannya adalah untuk menyimpan segala file yang berkaitan dengan database. Lalu kita buat file <code>datasource.ts</code> di dalam folder <code>src/database</code>, untuk konfigurasi database yang akan kita pakai, kita akan gunakan file ini saat <code>migration</code> (karna migration dapat dilakukan meski server sedang tidak berjalan)
    </p>
    <pre>
    <code class="js">
    import { join } from 'path';
    import { DataSource } from 'typeorm';

    const datasource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'contoh-password',
      database: 'nestjs-typeorm',
      entities: [join(__dirname, '..', '**', 'entities', '*.entity.{ts,js}')],
      migrations: [join(__dirname, 'migrations', '*')],
      migrationsTableName: 'migrations',
      synchronize: false,
      logging: false,
    });

    export default datasource;
    </code>
    </pre>
    <h3>4. migration</h3>
    <p>
    setelah koneksi berhasil maka selanjutnya adalah membuat <code>migration</code> dari table-table yang akan kita gunakan di dalam project, yang saya ketahui terdapat 2 cara untuk membuat <code>migration</code>, yang pertama membuat file <code>migration</code> lalu mendeskripsikan <code>migration</code>-nya, atau yang kedua membuat <code>entity</code> terlebih dahulu, lalu men-<code>generate</code> <code>migration</code> berdasarkan <code>entity</code>, pada kesempatan kali ini kita lakukan yang pertama, misalkan buat <code>migration</code> untuk create table <code>users</code> dengan <code>typeorm cli</code>
    </p>
    <pre>
    npx typeorm-ts-node-commonjs migration:create src/database/migrations/create-table-users
    </pre>
    <p>
    command tersebut akan membuat file <code>{timestamp}-create-table-users.ts</code> di dalam folder <code>src/database/migrations</code>, lalu kita ubah file tersebut seperti ini
    </p>
    <pre>
    import { MigrationInterface, QueryRunner, Table } from 'typeorm';

    export class CreateTableUsers1692867883026 implements MigrationInterface {
      public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              { name: 'id', type: 'uuid', isPrimary: true },
              { name: 'name', type: 'varchar' },
              { name: 'email', type: 'varchar', isUnique: true },
              { name: 'password', type: 'varchar' },
            ],
          }),
          true,
        );
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true);
      }
    }
    </pre>
    <p>
    jika sudah kita bisa running semua migrasi (yang belum dijalankan) dengan command berikut
    </p>
    <pre>
    npx typeorm-ts-node-commonjs -d src/database/datasource.ts migration:run
    </pre>
    <p>
    jika berhasil maka table <code>users</code> sudah berhasil dibuat, kita bisa mengecek dengan <code>psql</code> di terminal
    </p>
    <pre>
    psql -U postgres -d "nestjs-typeorm" -c "\\d"
    </pre>
    <img src="/blog/1693065764.jpg" alt="1693065764.jpg" class="img-md">
    <h3>5. persiapan seeder</h3>
    <p>
    selanjutnya adalah <code>seeder</code>, mengapa perlu <code>seeder</code>? dalam suatu aplikasi pastinya jika ada data-data yang diperlukan maka kita akan input ke dalam database baik itu data production ataupun data dummy, dalam hal ini kita bisa memanfaatkan <code>seeder</code> agar developer lain (jika ada) saat meng-<code>clone</code> project nya cukup menjalankan <code>seeder</code> yang ada.
    </p>
    <p>
    Sebelum kita membuat <code>seeder</code>, kita buat terlebih dahulu <code>entity</code>/<code>table</code> untuk menyimpan history seeding (belum dibuat otomatis dari library seperti migrations), buat file entity <code>seeder.entity.ts</code> di folder <code>src/database/entities</code>
    </p>
    <pre>
    import {
      Column,
      CreateDateColumn,
      Entity,
      PrimaryGeneratedColumn,
    } from 'typeorm';
    
    @Entity('seeders')
    export class SeederEntity {
      @PrimaryGeneratedColumn('increment')
      id: number;
    
      @Column('varchar')
      name: string;
    
      @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
      createdAt: Date;
    }
    </pre>
    <p>
    lalu buat <code>migration</code> nya
    </p>
    <pre>
    npx typeorm-ts-node-commonjs migration:create src/database/migrations/create-table-seeders
    </pre>
    <p>
    isi file <code>migration</code> yang baru dibuat dengan kode berikut, dimana kita membuat 3 field saja yakni <code>id</code>, <code>name</code>, <code>created_at</code>
    </p>
    <pre>
    import { MigrationInterface, QueryRunner, Table } from 'typeorm';

    export class CreateTableSeeders1692874947883 implements MigrationInterface {
      public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'seeders',
            columns: [
              {
                name: 'id',
                type: 'int4',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'created_at',
                type: 'timestamp with time zone',
                default: 'now()',
              },
            ],
          }),
          true,
        );
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('seeders');
      }
    }
    </pre>
    <p>
    jalankan <code>migration</code> nya
    </p>
    <pre>
    npx typeorm-ts-node-commonjs -d src/database/datasource.ts migration:run
    </pre>
    <h3>6. membuat user entity</h3>
    <p>
    buat file <code>user.entity.ts</code> untuk user di folder <code>user/entites</code>
    </p>
    <pre>
    import { Column, Entity, PrimaryColumn } from 'typeorm';

    @Entity('users')
    export class User {
      @PrimaryColumn('uuid')
      id: string;

      @Column('varchar')
      name: string;

      @Column('varchar')
      email: string;

      @Column('varchar', { select: false })
      password: string;
    }
    </pre>
    <h3>7. membuat utililty hash password</h3>
    <p>
    install library <code>bcrypt</code> dan types nya
    </p>
    <pre>
    yarn add bcrypt
    yarn add -D @types/bcrypt
    </pre>
    <p>
    buat file <code>password.util.ts</code> di folder <code>src/shared/utils</code> untuk mempermudah proses <code>hashing password</code>
    </p>
    <pre>
    import { genSaltSync, hashSync } from 'bcrypt';

    export const hashPassword = (password: string) =>
      hashSync(password, genSaltSync(10));
    </pre>
    <h3>8. seeder</h3>
    <p>
    sebelum membuat <code>seeder</code>, kita perlu menginstall <code>library</code> berikut
    </p>
    <pre>
    yarn add @jorgebodega/typeorm-seeding uuid
    </pre>
    <p>
    saat tulisan ini dibuat, saya belum menemukan library lain yang dapat digunakan dan sebenarnya library ini juga fork dari library resmi nya namun saat ingin pull request ke repo utama, pembuat library ini tidak dapat menghubungi owner dari library resmi, maka dari itu ia mempublish library ini.
    </p>
    <p>
    sekarang kita akan membuat file seeder nya, kita bisa create file di dalam folder <code>src/database/seeders</code> (buat jika belum ada), agar dapat mengurutkan berdasarkan timestamp, kita copy saja nama file timestamp dari migration <code>create-table-users</code>, lalu tambahkan nama file nya, misal jadi <code>1692867883026-users.seeder.ts</code> lalu isi file tersebut dengan
    </p>
    <pre>
    import { DataSource, DeepPartial } from 'typeorm';
    import { Seeder } from '@jorgebodega/typeorm-seeding';
    import { SeederEntity } from '../entities/seeder.entity';
    import { v4 as uuidv4 } from 'uuid';
    import { hashPassword } from '../../shared/utils/password.util';
    import { User } from '../../user/entities/user.entity';

    export default class UsersSeeder1692867883026 extends Seeder {
      public async run(datasource: DataSource): Promise<void> {
        // if seeder already executed
        if (
          await datasource
            .getRepository(SeederEntity)
            .findOneBy({ name: UsersSeeder1692867883026.name })
        )
          return;

        const users: DeepPartial<User>[] = [
          {
            name: 'Roni',
            email: 'roni@email.com',
            password: 'Qwerty123',
          },
          {
            name: 'Teguh',
            email: 'teguh@email.com',
            password: 'Qwerty123',
          },
          {
            name: 'Rijal',
            email: 'rijal@email.com',
            password: 'Qwerty123',
          },
        ];

        await datasource.getRepository(User).save(
          users.map((user) => ({
            ...user,
            id: user.id ?? uuidv4(),
            password: hashPassword(user.password),
          })),
        );

        // add to seeders table
        await datasource
          .getRepository(SeederEntity)
          .save({ name: UsersSeeder1692867883026.name });
      }
    }
    </pre>
    <p>
    di <code>seeder</code> tersebut kita menambahkan 3 data pengguna ke table <code>users</code>, tambahkan data lain jika diperlukan
    </p>
    <p>
    terakhir jalankan seluruh <code>seeder</code> yang ada
    </p>
    <pre>
    npx ts-node node_modules/@jorgebodega/typeorm-seeding/dist/cli.js seed -d src/database/datasource.ts src/database/seeders/*.seeder.ts
    </pre>
    <p>
    untuk command yang sekiranya panjang kita bisa persingkat dengan menaruhnya di <code>package.json</code> di dalam object <code>scripts</code>
    </p>
    <p>
    baik itu saja setup <code>database</code> di <code>nest js</code> dengan <code>typeorm</code>, masih banyak yang bisa dilakukan mengenai <code>migration</code> & <code>seeder</code> nya, tinggal disesuaikan dengan kebutuhan masing-masing project dan tips dari saya adalah buatkan logika untuk data <code>dummy</code> yang tidak akan dimasukkan di environment <code>production</code>, karena sesuai namanya data tersebut hanyalah data untuk contoh saja.
    </p>
    <p>
    jika ada kekurangan mohon maaf, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['nestjs', 'typeorm', 'postgresql', 'typescript'],
    createdAt: '2023-08-24 12:04:34.788 +0700',
    updatedAt: '2023-08-24 12:04:34.788 +0700',
  },
  // {
  //   id: 'bd7a365d-b8ca-40c9-81f2-10ebaed28304',
  //   title: 'Judul Baru',
  //   slug: 'judul-baru',
  //   featureImage: {
  //     originalFileName: 'gsms.jpg',
  //     url: `${BASE_URL}/portfolio/gsms-1.png`,
  //   },
  //   content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  //   <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  //   tags: ['nestjs', 'frontend', 'kemdikbud', 'fullstack'],
  //   createdAt: '2023-02-27 01:50:34.788 +0700',
  //   updatedAt: '2023-08-26 12:04:34.788 +0700',
  // },
];
