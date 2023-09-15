import { Blog } from '@/types/blog.type';

export const blogs: Blog[] = [
  {
    id: 'bd7a365d-b8ca-40c9-81f2-10ebaed28304',
    title: 'Nest JS Setup Database With TypeORM',
    slug: 'nest-js-setup-database-with-typeorm',
    featureImageId: 'b21f2576-b044-481c-a030-bdad3d31c334',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    halo kawan-kawan semuaaa... pada kesempatan ini saya ingin sharing mengenai setup database (dalam contoh ini saya pakai postgresql) di <code>nest js</code> menggunakan typeorm, mengapa <code>nest js</code>? karena menurut saya mengerjakan project dengan <code>typescript</code> dapat mempermudah proses pengembangan suatu aplikasi serta beberapa library <code>nest js</code> yang mudah untuk diintegrasikan dengan teknologi lain.
    </p>
    <p>
    sebelum kita lanjut pastikan kita sudah memahami <code>prerequisites</code> berikut biar ga bingung di pertengahan nantinya
    </p>
    <ul>
      <li>node js dasar (termasuk <code>typescript</code>-nya)</li>
      <li>database (<code>postgresql</code> atau <code>mysql</code>)</li>
    </ul>
    <p>
    oke jika sudah clear maka langsung saja kita masuk ke langkah yang pertama
    </p>
    <h3>1. Setup Nest JS</h3>
    <p>
    pertama-tama kita create project nya dengan <code>nest cli</code> dengan mengetikkan command berikut di terminal
    </p>
    <pre>
    <code class="language-bash">$ npm i -g @nestjs/cli\n$ nest new nest-typeorm</code>
    </pre>
    <p>
    akan muncul pertanyaan mengenai package manager yang kita gunakan, pilih yang diinginkan (saya pilih <code>yarn</code> karena sudah terbiasa) setelah itu tunggu sampai proses instalasi selesai, jika sudah akan terbuat directory/folder baru dengan nama <code>nest-typeorm</code> (sesuai nama project nya), buka directory tersebut dengan visual studio code
    </p>
    <pre>
    <code class="language-bash">$ code nest-typeorm</code>
    </pre>
    <p>
    langsung aja kita coba jalanin projectnya pakai mode development dengan command berikut (di terminal vs-code)
    </p>
    <pre>
    <code class="language-bash">$ yarn start:dev</code>
    </pre>
    <p>
    jika tidak ada error maka project kita berhasil berjalan di port <code>3000</code> (default), kita bisa mengeceknya dengan mengetikkan <code>http://localhost:3000</code> di browser, akan muncul pesan <code>Hello World!</code>
    </p>
    <h3>2. Install TypeORM</h3>
    <p>
    kita buat dulu database <code>postgresql</code> yang mau kita pakai di project ini, bisa menggunakan <code>psql</code> atau di aplikasi database viewer seperti dbeaver, heidisql, dll.
    </p>
    <pre>
    <code class="language-bash">$ psql -U postgres -c "create database \\"nestjs-typeorm\\""</code>
    </pre>
    <p>
    selanjutnya kita akan install library <code>typeorm</code>, di nestjs ada library <code>@nestjs/typeorm</code> untuk mempermudah integrasi nya, kita install terlebih dahulu
    </p>
    <pre>
    <code class="language-bash">$ yarn add @nestjs/typeorm typeorm pg</code>
    </pre>
    <h3>3. Datasource</h3>
    <p>
    setelah selesai diinstall, buat folder <code>database</code> di dalam folder <code>src</code>, kegunaannya adalah untuk menyimpan segala file yang berkaitan dengan database. Lalu kita buat file <code>datasource.ts</code> di dalam folder <code>src/database</code>, untuk konfigurasi database yang akan kita pakai, kita akan gunakan file ini saat <code>migration</code> (karna migration dapat dilakukan meski server sedang tidak berjalan)
    </p>
    <pre>
    <code class="language-typescript">import { join } from 'path';\nimport { DataSource } from 'typeorm';
\nconst datasource = new DataSource({\n  type: 'postgres',\n  host: 'localhost',\n  port: 5432,\n  username: 'postgres',\n  password: 'contoh-password', // sesuaikan dengan password masing-masing\n  database: 'nestjs-typeorm',\n  entities: [join(__dirname, '..', '**', 'entities', '*.entity.{ts,js}')],\n  migrations: [join(__dirname, 'migrations', '*')],\n  migrationsTableName: 'migrations',\n  synchronize: false,\n  logging: false,\n});
\nexport default datasource;</code>
    </pre>
    <h3>4. Migration</h3>
    <p>
    setelah koneksi berhasil maka selanjutnya adalah membuat <code>migration</code> dari table-table yang akan kita gunakan di dalam project, yang saya ketahui terdapat 2 cara untuk membuat <code>migration</code>, yang pertama membuat file <code>migration</code> lalu mendeskripsikan <code>migration</code>-nya, atau yang kedua membuat <code>entity</code> terlebih dahulu, lalu men-<code>generate</code> <code>migration</code> berdasarkan <code>entity</code>, pada kesempatan kali ini kita lakukan yang pertama, misalkan buat <code>migration</code> untuk create table <code>users</code> dengan <code>typeorm cli</code>
    </p>
    <pre>
    <code class="language-bash">$ npx typeorm-ts-node-commonjs migration:create src/database/migrations/create-table-users</code>
    </pre>
    <p>
    command tersebut akan membuat file <code>{timestamp}-create-table-users.ts</code> di dalam folder <code>src/database/migrations</code>, lalu kita ubah file tersebut seperti ini
    </p>
    <pre>
    <code class="language-typescript">import { MigrationInterface, QueryRunner, Table } from 'typeorm';
\nexport class CreateTableUsers1692867883026 implements MigrationInterface {\n  public async up(queryRunner: QueryRunner): Promise<void> {\n    await queryRunner.createTable(\n      new Table({\n        name: 'users',\n        columns: [\n          { name: 'id', type: 'uuid', isPrimary: true },\n          { name: 'name', type: 'varchar' },\n          { name: 'email', type: 'varchar', isUnique: true },\n          { name: 'password', type: 'varchar' },\n        ],\n      }),\n      true,\n    );\n  }
\n  public async down(queryRunner: QueryRunner): Promise<void> {\n    await queryRunner.dropTable('users', true);\n  }\n}</code>
    </pre>
    <p>
    jika sudah kita bisa running semua migrasi (yang belum dijalankan) dengan command berikut
    </p>
    <pre>
    <code class="language-bash">$ npx typeorm-ts-node-commonjs -d src/database/datasource.ts migration:run</code>
    </pre>
    <p>
    jika berhasil maka table <code>users</code> sudah berhasil dibuat, kita bisa mengecek dengan <code>psql</code> di terminal
    </p>
    <pre>
    <code class="language-bash">$ psql -U postgres -d "nestjs-typeorm" -c "\\d"</code>
    </pre>
    <img src="/blog/1693065764.jpg" alt="1693065764.jpg" class="img-md">
    <h3>5. Persiapan Seeder</h3>
    <p>
    selanjutnya adalah <code>seeder</code>, mengapa perlu <code>seeder</code>? dalam suatu aplikasi pastinya jika ada data-data yang diperlukan maka kita akan input ke dalam database baik itu data production ataupun data dummy, dalam hal ini kita bisa memanfaatkan <code>seeder</code> agar developer lain (jika ada) saat meng-<code>clone</code> project nya cukup menjalankan <code>seeder</code> yang ada.
    </p>
    <p>
    Sebelum kita membuat <code>seeder</code>, kita buat terlebih dahulu <code>entity</code>/<code>table</code> untuk menyimpan history seeding (belum dibuat otomatis dari library seperti migrations), buat file entity <code>seeder.entity.ts</code> di folder <code>src/database/entities</code>
    </p>
    <pre>
    <code class="language-typescript">import {\n  Column,\n  CreateDateColumn,\n  Entity,\n  PrimaryGeneratedColumn,\n} from 'typeorm';\n@Entity('seeders')\n\nexport class SeederEntity {\n  @PrimaryGeneratedColumn('increment')\n  id: number;\n  @Column('varchar')\n  name: string;\n  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })\n  createdAt: Date;\n}</code>
    </pre>
    <p>
    lalu buat <code>migration</code> nya
    </p>
    <pre>
    <code class="language-bash">$ npx typeorm-ts-node-commonjs migration:create src/database/migrations/create-table-seeders</code>
    </pre>
    <p>
    isi file <code>migration</code> yang baru dibuat dengan kode berikut, dimana kita membuat 3 field saja yakni <code>id</code>, <code>name</code>, <code>created_at</code>
    </p>
    <pre>
    <code class="language-typescript">import { MigrationInterface, QueryRunner, Table } from 'typeorm';
\nexport class CreateTableSeeders1692874947883 implements MigrationInterface {\n  public async up(queryRunner: QueryRunner): Promise<void> {\n    await queryRunner.createTable(\n      new Table({\n        name: 'seeders',\n        columns: [\n          {\n            name: 'id',\n            type: 'int4',\n            isPrimary: true,\n            isGenerated: true,\n            generationStrategy: 'increment',\n          },\n          {\n            name: 'name',\n            type: 'varchar',\n          },\n          {\n            name: 'created_at',\n            type: 'timestamp with time zone',\n            default: 'now()',\n          },\n        ],\n      }),\n      true,\n    );\n  }
\n  public async down(queryRunner: QueryRunner): Promise<void> {\n    await queryRunner.dropTable('seeders');\n  }\n}</code>
    </pre>
    <p>
    jalankan <code>migration</code> nya
    </p>
    <pre>
    <code class="language-bash">$ npx typeorm-ts-node-commonjs -d src/database/datasource.ts migration:run</code>
    </pre>
    <h3>6. Membuat User Entity</h3>
    <p>
    buat file <code>user.entity.ts</code> untuk user di folder <code>user/entites</code>
    </p>
    <pre>
    <code class="language-typescript">import { Column, Entity, PrimaryColumn } from 'typeorm';
\n@Entity('users')\nexport class User {\n  @PrimaryColumn('uuid')\n  id: string;
\n  @Column('varchar')\n  name: string;
\n  @Column('varchar')\n  email: string;
\n  @Column('varchar', { select: false })\n  password: string;\n}</code>
    </pre>
    <h3>7. Membuat Utililty Hash Password</h3>
    <p>
    install library <code>bcrypt</code> dan types nya
    </p>
    <pre>
    <code class="language-bash">$ yarn add bcrypt\n$ yarn add -D @types/bcrypt</code>
    </pre>
    <p>
    buat file <code>password.util.ts</code> di folder <code>src/shared/utils</code> untuk mempermudah proses <code>hashing password</code>
    </p>
    <pre>
    <code class="language-typescript">import { genSaltSync, hashSync } from 'bcrypt';
\nexport const hashPassword = (password: string) {\n  return hashSync(password, genSaltSync(10));\n}</code>
    </pre>
    <h3>8. Seeder</h3>
    <p>
    sebelum membuat <code>seeder</code>, kita perlu menginstall <code>library</code> berikut
    </p>
    <pre>
    <code class="language-bash">$ yarn add @jorgebodega/typeorm-seeding uuid</code>
    </pre>
    <p>
    saat tulisan ini dibuat, saya belum menemukan library lain yang dapat digunakan dan sebenarnya library ini juga fork dari library resmi nya namun saat ingin pull request ke repo utama, pembuat library ini tidak dapat menghubungi owner dari library resmi, maka dari itu ia mempublish library ini.
    </p>
    <p>
    sekarang kita akan membuat file seeder nya, kita bisa create file di dalam folder <code>src/database/seeders</code> (buat jika belum ada), agar dapat mengurutkan berdasarkan timestamp, kita copy saja nama file timestamp dari migration <code>create-table-users</code>, lalu tambahkan nama file nya, misal jadi <code>1692867883026-users.seeder.ts</code> lalu isi file tersebut dengan
    </p>
    <pre>
    <code class="language-javascript">import { DataSource, DeepPartial } from 'typeorm';\nimport { Seeder } from '@jorgebodega/typeorm-seeding';\nimport { SeederEntity } from '../entities/seeder.entity';\nimport { v4 as uuidv4 } from 'uuid';\nimport { hashPassword } from '../../shared/utils/password.util';\nimport { User } from '../../user/entities/user.entity';
\nexport default class UsersSeeder1692867883026 extends Seeder {\n  public async run(datasource: DataSource): Promise<void> {\n    // if seeder already executed\n    if (\n      await datasource\n        .getRepository(SeederEntity)\n        .findOneBy({ name: UsersSeeder1692867883026.name })\n    )\n      return;
\n    const users: DeepPartial&lt;User&gt;[] = [\n      {\n        name: 'Roni',\n        email: 'roni@email.com',\n        password: 'Qwerty123',\n      },\n      {\n        name: 'Teguh',\n        email: 'teguh@email.com',\n        password: 'Qwerty123',\n      },\n      {\n        name: 'Rijal',\n        email: 'rijal@email.com',\n        password: 'Qwerty123',\n      },\n    ];
\n    await datasource.getRepository(User).save(\n      users.map((user) => ({\n        ...user,\n        id: user.id ?? uuidv4(),\n        password: hashPassword(user.password),\n      })),\n    );
\n    // add to seeders table\n    await datasource\n      .getRepository(SeederEntity)\n      .save({ name: UsersSeeder1692867883026.name });\n  }\n}\n</code>
    </pre>
    <p>
    di <code>seeder</code> tersebut kita menambahkan 3 data pengguna ke table <code>users</code>, tambahkan data lain jika diperlukan, terakhir jalankan seluruh <code>seeder</code> yang ada
    </p>
    <pre>
    <code class="language-bash">$ npx ts-node node_modules/@jorgebodega/typeorm-seeding/dist/cli.js seed -d src/database/datasource.ts src/database/seeders/*.seeder.ts</code>
    </pre>
    <p>
    untuk command yang sekiranya panjang kita bisa persingkat dengan menaruhnya di <code>package.json</code> di dalam object <code>scripts</code>
    </p>
    <p>
    baik itu saja setup <code>database</code> di <code>nest js</code> dengan <code>typeorm</code>, masih banyak yang bisa dilakukan mengenai <code>migration</code> & <code>seeder</code> nya, tinggal disesuaikan dengan kebutuhan masing-masing project dan tips dari saya adalah buatkan logika untuk data <code>dummy</code> yang tidak akan dimasukkan di environment <code>production</code>, karena sesuai namanya data tersebut hanyalah data untuk contoh saja.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['nestjs', 'typeorm', 'postgresql', 'typescript'],
    publishedAt: new Date('2023-08-28 05:04:34+00'),
    createdAt: new Date('2023-08-28 05:04:34+00'),
    updatedAt: new Date('2023-08-28 05:04:34+00'),
  },
  {
    id: '79d35e33-c391-473c-a0a5-0e9c504f2cf6',
    title: 'Penggunaan Seeder di Suatu Project',
    slug: 'penggunaan-seeder-di-suatu-project',
    featureImageId: 'a67191bf-24af-4aeb-8936-28ef81cfead8',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    halooooo.... kali ini saya mau sharing mengenai konsep sedikit yakni penggunaan <code>seeder</code> di suatu project, pada umumnya <code>seeding</code> adalah proses mengisi data di suatu table yang sudah ada di seluruh environment yang ada baik itu <code>production</code>, <code>staging</code>, maupun <code>dev</code>. 
    </p>
    <p>
    bayangin kita punya suatu aplikasi <code>e-commerce</code> dimana terdapat halaman list produk-produk yang akan dilihat oleh publik, dari bagian <code>frontend developer</code> sudah membuat code untuk tampilan produk dengan data <code>endpoint</code> dari backend, namun belum ada data yang dapat ditampilkan, maka akan menimbulkan kekhawatiran apakah sudah sesuai dengan yang direncanakan atau belum (yaaa walaupun misal <code>frontend</code> sudah mencoba dengan data <code>static</code> pastinya), nah maka dari itu <code>seeder</code> dapat menjadi solusi untuk menyelesaikan permasalahan tersebut.
    </p>
    <p>
    oke kita bahas dulu keuntungan menggunakan <code>seeder</code> di project yang sedang kita kembangkan
    </p>
    <ul>
    <li><strong>mempermudah proses <code>development</code></strong><br>misal ketika kita membuat fitur <code>pagination</code>, kita perlu menge-test apakah fitur tersebut bekerja dengan baik saat data halaman ke-2 atau seterusnya diambil, maka dari itu kita perlu data-data contoh atau data <code>dummy</code>, karena jika tidak ada data maka kita belum yakin apakah sudah berjalan dengan baik atau belum.
    </li>
    <li><strong>mempermudah proses <code>deployment</code></strong><br>jika terdapat data yang dibutuhkan untuk <code>production</code>, maka kita cukup membuat <code>seeder</code> untuk data tersebut, saat sudah di-<code>push</code> ke server <code>production</code> tinggal dijalankan <code>seeder</code> nya maka data tersebut sudah ditambahkan ke <code>database production</code>.
    </li>
    <li><strong>mempermudah tim <code>developer</code> (jika dikerjakan lebih dari 1 orang)</strong><br>saat project dikerjakan lebih dari 1 orang, maka masing-masing ada kemungkinan memerlukan data <code>production</code>, yang bisa jadi akan menjadi <code>bug</code> (level no data) jika <code>developer</code> lain menjalankan projectnya namun data yang dibutuhkan tidak ada, dengan adanya <code>seeder</code>, kondisi tersebut dapat diatasi dengan mudah.
    </li>
    <li><strong>mempermudah <code>frontend developer</code></strong><br>saat frontend developer membuat tampilan, akan lebih baik jika terdapat contoh data untuk memvisualisasikan tampilan yang sudah dibuat, agar lebih yakin bahwa sudah sesuai dengan desain yang diharapkan
    </li>
    </ul>
    <p>
    mungkin masih banyak keuntungan-keuntungan lain yang saya kurang ngeh, setelah kita telah tahu apa keuntungannya, ada beberapa hal yang perlu kita perhatikan saat membuat seeder agar nantinya kita tidak mengalami kesulitan di kemudian hari
    </p>
    <h3>Timestamp Nama File</h3>
    <p>
    di beberapa orm seperti <code>typeorm</code> (dengan library <a href="https://www.npmjs.com/package/@jorgebodega/typeorm-seeding" target="_blank"><code>@jorgebodega/typeorm-seeding</code></a>), <code>seeder</code> akan dijalankan berdasarkan urutan nama file di folder yang telah ditentukan, akan lebih mudah jika kita menamakan semua file <code>seeder</code> berdasarkan kapan waktu file tersebut dibuat lalu dilanjut nama file seperti biasa, jadi ketika kita menambahkan <code>seeder</code> baru, maka otomatis sudah terurutkan (kira-kira seperti ini <code>1692867883026-users.seeder.ts</code>).
    </p>
    <h3>Environment</h3>
    <p>
    kita perlu membuat kondisi untuk <code>seeder</code> apa saja yang akan dijalankan di <code>environment</code> tertentu, pastinya data <code>dummy</code> tidak akan ditambahkan di <code>production</code>, karena data tersebut diperuntukkan hanya di <code>environment development</code>. cukup menambahkan logic <code>if</code> di awal file <code>seeder</code> nya seperti berikut
    </p>
    <pre>
    <code class="language-typescript">if (process.env.NODE_ENV !== 'production') {\n  \/\/ isi dari seedernya\n}</code>
    </pre>
    <h3>Historical Seeder</h3>
    <p>
    seperti tulisan saya sebelumnya <a href="/blog/nest-js-setup-database-with-typeorm" target="_blank">di sini</a>, diperlukan table <code>seeder</code> (di beberapa <code>orm</code> belum dibuatkan) untuk menyimpan data-data <code>seeder</code> yang telah dieksekusi agar <code>seeder</code> yang telah dijalankan tidak dieksekusi 2 kali, dan saat menjalankan <code>seeder</code> yang baru hanya perlu running semua <code>seeder</code> (otomatis hanya menjalankan yang belum dieksekusi karena telah dicek kondisinya).
    </p>
    <pre>
    <code class="language-typescript">if (\n  await datasource\n    .getRepository(SeederEntity)\n    .findOneBy({ name: UsersSeeder1692867883026.name }) // diambil dari nama seeder nya\n){\n  return;\n}</code>
    </pre>
    <h3>Buat Id Untuk Data Production Menjadi Static</h3>
    <p>
    saya pernah mengalami kendala ketika saya membuat data <code>seeder</code> untuk <code>production</code> (misal seperti data <code>role</code>), saya men-generate <code>uuid</code> saat proses <code>seeder</code> dijalankan, namun <code>id</code> yang ada di <code>development</code> berbeda dengan <code>id</code> yang ada di <code>production</code>, ini akan menjadi problem ketika kita hendak migrasi <code>database</code> ke server lain, walaupun case ini jarang, namun saya lebih menyarankan untuk membuat <code>id</code> nya menjadi static (dibuatkan manual <code>uuid</code> nya), bisa melalui website berikut <a href="https://www.uuidgenerator.net/" target="_blank">Online UUID Generator Tool</a>.
    </p>
    <pre>
    <code class="language-typescript">const roles: DeepPartial&lt;Role&gt;[] = [\n  {\n    id: 'b7a32203-9ec2-46ab-bb15-fefbd688cfee',\n    name: 'Super Administrator',\n    slug: 'super-administrator' \n  },\n  {\n    id: 'dc3c5465-4429-45ea-be10-9e39cba6997f',\n    name: 'User',\n    slug: 'user' \n  },\n  {\n    id: '9b3d9a9f-05a5-4ee4-9220-854042e88c5a',\n    name: 'Editor',\n    slug: 'editor' \n  }\n];</code>
    </pre>
    <h3>Tidak Mengubah Seeder Yang Sudah Dijalankan Di Production</h3>
    <p>
    ada kalanya kita salah input data atau ada perubahan table di <code>migration</code> nya, maka dari itu perlu ada penyesuaian pula di data-data nya melalui <code>seeder</code>. dibanding mengubah <code>seeder</code> yang ada, akan lebih baik jika perubahan-perubahan data yang baru dibuatkan <code>seeder</code> baru pula (ini berlaku juga dalam case <code>migration</code>), karena <code>seeder</code> yang lama tidak akan dijalankan lagi di <code>production</code>.
    </p>
    <br>
    <br>
    <p>
    oke itu saja yang mau saya share, mungkin saja ada hal-hal lain yang perlu diperhatikan saat pembuatan <code>seeder</code> menyesuaikan kondisi dari project tersebut.
    </p>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['seeder', 'uuid', 'postgresql', 'typescript'],
    publishedAt: new Date('2023-09-04 07:08:23+00'),
    createdAt: new Date('2023-09-04 07:08:23+00'),
    updatedAt: new Date('2023-09-04 07:08:23+00'),
  },
  {
    id: '0287abee-7fff-4174-b5c1-988165c1081c',
    title: 'Nest JS Authentication Menggunakan Passport JS - Part 1',
    slug: 'nest-js-authentication-menggunakan-passport-js-part-1',
    featureImageId: '7ad95cdf-d9bc-4115-8420-7ed88d009333',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    pagi, siang, malam teman-teman... dimanapun kalian berada semoga sehat selalu. saya mau share lagi mengenai nest js, untuk sekarang ini adalah fitur otentikasi (authentication) menggunakan <a href="https://www.passportjs.org/" target="_blank">Passport JS</a>, yakni kurang lebih fitur login pengguna, dan bagaimana membatasi endpoint yang hanya bisa diakses dengan jwt (json web token) yang valid sebagai tanda bahwa pengguna tersebut telah melakukan proses login yang mana ini adalah tulisan lanjutan dari tulisan <a href="/blog/nest-js-setup-database-with-typeorm" target="_blank">Nest JS Setup Database With TypeORM</a>.
    </p>
    <p>
    kenapa aplikasi memerlukan otentikasi? jika web aplikasi yang kita bangun seperti landing page maka kita tidak memerlukan otentikasi karena semua pengguna hanya diperuntukkan untuk melihat informasi yang ditampilkan, namun jika kita memiliki suatu aplikasi yang hanya bisa diakses oleh orang tertentu atau perlu dibatasi antara masing-masing pengguna maka kita akan membatasi dengan proses otentikasi tersebut.
    </p>
    <p>
    apa itu library passport? <strong>"passport merupakan pustaka otentikasi node js yang paling populer, sudah dikenal oleh banyak developer dan berhasil digunakan dalam banyak aplikasi"</strong> (generate dari chat gpt 😝). di nest js sendiri memiliki library untuk integrasi dengan passport yaitu <code>@nestjs/passport</code>. passport memiliki banyak strategi yang dapat diimplementasi dalam proses otentikasi seperti facebook, twitter, google, dll. namun yang ingin saya gunakan kali ini hanyalah local strategy (username & password) dan jwt strategy.
    </p>
    <p>
    langsung aja dah gaaass...
    </p>
    <h3>1. Install Dependencies & Setup</h3>
    <p>
    oke pertama-tama kita implementasi yang local terlebih dahulu, kita perlu install beberapa dependencies yang dibutuhkan beserta package types nya
    </p>
    <pre>
    <code class="language-bash">$ yarn add @nestjs/passport passport passport-local\n$ yarn add -D @types/passport-local</code>
    </pre>
    <p>
    setelah berhasil meng-install, kita buat modul <code>auth</code> beserta service nya dengan <code>nestjs cli</code>, sebenernya bisa buat manual tapi biar keren aja
    </p>
    <pre>
    <code class="language-bash">$ nest generate module auth\n$ nest generate service auth --no-spec</code>
    </pre>
    <p>
    flag <code>--no-spec</code> agar tidak men-generate file testing (tidak diperlukan untuk tulisan ini), command <code>generate module</code> tesebut juga sudah otomatis menambahkan modul yang dibuat ke dalam list modul yang ada di file <code>app.module.ts</code>, jadi ga biar keren doangan.
    </p>
    <p>
    lalu kita akan buat module <code>user</code> dan servicenya untuk memisahkan service yang berkaitan dengan user, agar dapat digunakan di tempat lain nantinya. kita bisa menyingkat command-nya agar lebih cepet kalo ngetik, lebih lengkapnya bisa lihat di dokumentasi <a href="https://docs.nestjs.com/cli/usages" target="_blank">nest js cli</a>.
    </p>
    <pre>
    <code class="language-bash">$ nest g mo user\n$ nest g s user --no-spec</code>
    </pre>
    <p>
    untuk penamaan nama modul dibebaskan mau menggunakan singular atau plural, tapi menurut saya yang harus diperhatikan adalah konsistensi di keseluruhan aplikasi agar tidak membingungkan nantinya dan kesepakatan sesama developer (kalo dikerjakan lebih dari 1 orang), jika memilih singular maka seluruh nama modul yang ada harus menggunakan singular, begitu pula jika memilih plural, di sini saya memilih singular.
    </p>
    <p>
    pastikan kita sudah meng-import <code>TypeOrmModule</code> di <code>app.module.ts</code> dengan options <code>datasource</code> yang sudah dibuat sebelumnya, agar kita bisa menggunakan repository yang ada di typeorm.
    </p>
    <pre>
    <code class="language-typescript">import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { AuthModule } from './auth/auth.module';\nimport { UserModule } from './user/user.module';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport datasource from './database/datasource';\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot({ ...datasource.options, autoLoadEntities: true }),\n    AuthModule,\n    UserModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}</code>
    </pre>
    <h3>2. Membuat UserService</h3>
    <p>
    selanjutnya kita perlu meng-import <code>TypeOrmModule.forFeature</code> dan menyertakan entity <code>User</code> di file <code>src/user/user.module.ts</code>, jika tidak diimport maka kita tidak bisa meng-injectnya ke dalam service, kemudian sekalian kita masukkan <code>UserService</code> ke list <code>exports</code> supaya bisa digunakan di modul selain user (nanti akan kita gunakan di <code>AuthService</code>).
    </p>
    <pre>
    <code class="language-typescript">import { Module } from '@nestjs/common';\nimport { UserService } from './user.service';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { User } from './entities/user.entity';\n\n@Module({\n  imports: [TypeOrmModule.forFeature([User])],\n  providers: [UserService],\n  exports: [UserService],\n})\nexport class UserModule {}</code>
    </pre>
    <p>
    jika sudah ditambahkan maka kita bisa meng-inject repository ke dalam file user service yang akan kita buat seperti berikut
    </p>
    <pre>
    <code class="language-typescript">import { Injectable } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { User } from './entities/user.entity';\n\n@Injectable()\nexport class UserService {\n  constructor(@InjectRepository(User) private userRepo: Repository&lt;User&gt;) {}\n}</code>
    </pre>
    <p>
    setelah itu tambahkan method <code>findOneWithPassword</code> di dalam <code>UserService</code> untuk mengambil 1 user dengan password, karena di tulisan sebelumnya diset untuk password default nya tidak akan ditampilkan (<code>select : false</code>)
    </p>
    <pre>
    <code class="language-typescript">async findOneWithPassword(options: FindOptionsWhere&lt;User&gt;): Promise&ltUser&gt {\n  return this.userRepo.findOne({\n    where: options,\n    select: { id: true, password: true },\n  });\n}</code>
    </pre>
    <h3>3. Membuat AuthService</h3>
    <p>
    import terlebih dahulu <code>UserModule</code> ke dalam <code>AuthModule</code> dengan <code>forwardRef</code> (agar tidak terjadi circular dependencies)
    </p>
    <pre>
    <code class="language-typescript">import { Module, forwardRef } from '@nestjs/common';\nimport { AuthService } from './auth.service';\nimport { UserModule } from '../user/user.module';\n\n@Module({\n  imports: [forwardRef(() => UserModule)],\n  providers: [AuthService],\n})\nexport class AuthModule {}</code>
    </pre>
    <p>
    setelah berhasil import, kita buatkan method <code>validateUser</code> untuk memvalidasi email dan password yang di masukkan oleh pengguna (jangan lupa meng-inject <code>UserService</code> di constructor <code>AuthService</code>)
    </p>
    <pre>
    <code class="language-typescript">import { Injectable } from '@nestjs/common';\nimport { UserService } from '../user/user.service';\nimport { compareSync } from 'bcrypt';\n\n@Injectable()\nexport class AuthService {\n  constructor(private userService: UserService) {}\n\n  async validateUser(email: string, password: string) {\n    const user = await this.userService.findOneWithPassword({ email });\n    if (!user || !compareSync(password, user.password)) return null;\n    return user;\n  }\n}</code>
    </pre>
    <h3>4. Implement Passport Local</h3>
    <p>
    buat file <code>local.strategy.ts</code> di dalam folder auth, dan tambahkan kode berikut
    </p>
    <pre>
    <code class="language-typescript">import { Strategy } from 'passport-local';\nimport { PassportStrategy } from '@nestjs/passport';\nimport { Injectable, UnauthorizedException } from '@nestjs/common';\nimport { AuthService } from './auth.service';\n\n@Injectable()\nexport class LocalStrategy extends PassportStrategy(Strategy) {\n  constructor(private authService: AuthService) {\n    super({ usernameField: 'email' });\n  }\n\n  async validate(email: string, password: string) {\n    const user = await this.authService.validateUser(email, password);\n    if (!user) throw new UnauthorizedException();\n    return user;\n  }\n}</code>
    </pre>
    <p>
    kita menambahkan sedikit konfigurasi karena default field credential dari <code>pasport-local</code> adalah username, karena kita menggunakan email maka perlu ditambahkan konfigurasi di dalam method <code>super()</code> seperti di atas jika menggunakan username maka biarkan kosong.
    <p>
    </p>
    selanjutnya menambahkan class <code>PassportModule</code> dan <code>LocalStrategy</code> ke dalam <code>AuthModule</code>.
    </p>
    <pre>
    <code class="language-typescript">import { PassportModule } from '@nestjs/passport';\nimport { LocalStrategy } from './local.strategy';\n\n@Module({\n  imports: [forwardRef(() => UserModule), PassportModule],\n  providers: [AuthService, LocalStrategy],\n})\nexport class AuthModule {}</code>
    </pre>
    <h3>5. Implementasi di Controller</h3>
    <p>
    buat file <code>auth.controller.ts</code> lalu kita buat routing untuk login sebagai contoh dari implementasi <code>passport-local</code> nya
    </p>
    <pre>
    <code class="language-typescript">import { Controller, Post, Request, UseGuards } from '@nestjs/common';\nimport { AuthGuard } from '@nestjs/passport';\nimport { User } from '../user/entities/user.entity';\n\n@Controller('auth')\nexport class AuthController {\n  @UseGuards(AuthGuard('local'))\n  @Post('login')\n  async login(@Request() req: Request & { user: User }) {\n    return req.user;\n  }\n}</code>
    </pre>
    <p>
    import class <code>AuthController</code> ke dalam <code>AuthModule</code> di list <code>controllers</code> seperti berikut:
    </p>
    <pre>
    <code class="language-typescript">import { AuthController } from './auth.controller';\n\n@Module({\n  imports: [forwardRef(() => UserModule), PassportModule],\n  controllers: [AuthController],\n  providers: [AuthService, LocalStrategy],\n})</code>
    </pre>
    <p>
    oke, sekarang kita bisa coba buat request menggunakan postman dengan method <code>POST</code> ke url <code>/auth/login</code>, untuk <code>{{base_url}}</code> bisa disesuaikan dengan base url masing-masing.
    </p>
    <img src="/blog/1694288499.jpg" alt="1694288499.jpg" class="img-lg">
    <p>
    untuk sementara seperti itu menandakan bahwa implementasi authentication <code>passport-local</code> sudah berjalan, nantinya dapat diolah informasi user <code>id</code> yang ada untuk dibuatkan token
    </p>
    <img src="/blog/1694288438.jpg" alt="1694288438.jpg" class="img-lg">
    <p>
    begitu pula jika password yang diinput tidak sesuai, maka akan menampilkan status error 401 unauthorized. jika ingin menampilkan pesan error, saya menyarankan untuk tidak memberitahu apakah emailnya belum terdaftar atau passwordnya yang salah, cukup memberitahu bahwa email atau password tidak valid.
    </p>
    <p>
    oke untuk part 1 sampai di sini terlebih dahulu, di part selanjutnya kita akan implementasi <code>json web token</code> untuk endpoint-endpoint yang ingin dibatasi aksesnya.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini, semoga bermanfaat 😊
    </p>
    </article>
    `,
    tags: ['nestjs', 'auth', 'passport'],
    publishedAt: new Date('2023-09-11 07:13:50+00'),
    createdAt: new Date('2023-09-11 07:13:50+00'),
    updatedAt: new Date('2023-09-11 07:13:50+00'),
  },
];
