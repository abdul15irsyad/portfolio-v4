import { Blog } from '@/types/blog.type';
import { fileDatas } from './files.data';
import { authorDatas } from './authors.data';

export const blogs: Blog[] = [
  {
    id: '6abbfc26-a69f-4522-8f29-b3230750e098',
    title: 'Coba Install Bun di Windows 11',
    slug: 'coba-install-bun-di-windows-11',
    featureImageId: '96180893-c966-44e6-93bd-d351693aa546',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    bun… bun… bun… udah release nii alias v1.0 nya udah muncul, udah agak lama si, bagi kita developer javascript atau node js pasti ga asing sama bun yang baru ini, yap kurang lebih <b>bun adalah all-in-one javascript runtime & toolkit</b>, biasanya kita pakai node.js untuk menjalankan kode program javascript/typescript kita nah bun ini bisa jadi sebagai alternatif nya gitu.
    </p>
    <p>
    di halaman resminya bun mengklaim memiliki <code>http</code> request per second (dengan linux x64) saat mencoba server-side rendering react 2 kali lipat lebih banyak dari deno dan 5 kali lebih banyak dibanding node.js, kalo diliat dari statistik itu aja bun udah nawarin speed yang cukup baik untuk dipertimbangkan penggunaannya.
    </p>
    <img src="/blog/1697788423000.png" alt="1697788423000.png" class="img-sm" />
    <p>
    nah saat kita mau makai bun, pastinya kita perlu install dulu dong di laptop kita, cuma jika kita buka dokumentasi mengenai instalasinya, ternyata belum support sepenuhnya dengan windows, mungkin masih dalam tahap pengembangan (kalau mac dan linux tinggal ikutin aja langkah-langkahnya), cuma kita tetep bisa nyoba install bun di windows kita dengan bantuan windows subsystem for linux atau disingkat WSL.
    </p>
    <p>
    langsung aja langkah-langkah sebagai berikut
    </p>
    <ol>
    <li>
    <b>mengaktifkan WSL</b><br>
    <p>
    pertama-tama kita perlu menyalakan/mengaktifkankan WSL di windows kita, buka tab <b>"Windows Features"</b> dengan search, setelah terbuka lalu cari pilihan <b>"Windows Subsystem for Linux"</b> tinggal kita ceklis deh, lalu klik <b>"OK"</b>
    </p>
    <img src="/blog/1697789820000.png" alt="1697789820000.png" class="img-sm"/>
    </li>
    <li>
    <b>install ubuntu</b><br>
    <p>
    selanjutnya kita perlu install linux distro yang kita mau gunakan, yang saya gunakan di sini "Ubuntu 22.04.2 LTS", bisa kita install melalui windows store, setelah selesai proses penginstallannya lalu klik open
    </p>
    <img src="/blog/1697790102000.png" alt="1697790102000.png" class="img-lg" />
    </li>
    <li>
    <b>setup ubuntu</b><br>
    <p>
    setelah klik open, tunggu proses installation nya, lalu kita diminta untuk memasukkan <b>"UNIX username"</b>, boleh diisi bebas, lalu selanjutnya masukkan <b>"password"</b> yang mau kita gunakan
    </p>
    </li>
    <li>
    <b>install unzip</b><br>
    <p>
    setelah proses instalasi ubuntu selesai, kita memerlukan package <code>unzip</code> untuk mengekstrak saat nanti menginstall bun, di terminal ubuntu yang barusan kita install, kita ketikkan command
    </p>
    <pre>
    <code class="language-bash">$ sudo apt-get install unzip</code>
    </pre>
    <img src="/blog/1697790358000.png" alt="1697790358000.png" class="img-lg" />
    </li>
    <li>
    <b>install bun</b><br>
    <p>
    setelah sudah terinstall <code>unzip</code> nya, kita bisa install bun melaui command yang disediakan di halaman resmi nya lalu tunggu hingga proses instalasinya selesai
    </p>
    <pre>
    <code class="language-bash">$ curl -fsSL https://bun.sh/install | bash</code>
    </pre>
    <img src="/blog/1697790531000.png" alt="1697790531000.png" class="img-lg" />
    <p>
    lalu kita diminta untuk merunning command
    </p>
    <pre>
    <code class="language-bash">$ source /home/{unix-username}/.bashrc</code>
    </pre>
    <p>
    setelah dijalankan kita tinggal mengecek instalasi bun dengan melihat versi dari bun nya
    </p>
    <pre>
    <code class="language-bash">$ bun --version</code>
    </pre>
    <img src="/blog/1697790712000.png" alt="1697790712000.png" class="img-md" />
    <p>
    sip kalo sudah muncul version nya berarti proses instalasi bun nya sudah berhasil, selanjutnya adalah kita perlu buat kode nya dong, kita ikutin aja langkah-langkah quickstart yang ada di dokumentasi
    </p>
    </li>
    <li>
    <b>setup project</b><br>
    <p>
    kita buat folder terlebih dahulu untuk menampung project kita, kita namakan <code>quickstart</code> lalu open folder tersebut
    </p>
    <pre>
    <code class="language-bash">$ mkdir quickstart
$ cd quickstart</code>
    </pre>
    <img src="/blog/1697790911000.png" alt="1697790911000.png" class="img-lg" />
    <p>
    jalankan <code>bun init</code> untuk membuat bun project, lalu klik enter untuk mengatur sesuai default nya
    </p>
    <pre>
    <code class="language-bash">$ bun init</code>
    </pre>
    <img src="/blog/1697791016000.png" alt="1697791016000.png" class="img-lg" />
    <p>
    Kita coba running file <code>index.ts</code> nya
    </p>
    <pre>
    <code class="language-bash">$ bun index.ts</code>
    </pre>
    <img src="/blog/1697791119000.png" alt="1697791119000.png" class="img-lg" />
    </li>
    <li>
    <b>connect vscode</b><br>
    <p>
    nah setelah sudah berhasil, kita mau buka folder projectnya di vscode, misalkan kita sudah punya di windows maka kita bisa membuka folder nya di vscode dengan bantuan extension WSL nya vscode, kita install dulu extensionnya
    </p>
    <img src="/blog/1697791206000.png" alt="1697791206000.png" class="img-lg"/>
    <p>
    lalu tekan <code>Ctrl</code> + <code>Shift</code> + <code>P</code> ketik "wsl" lalu pilih <b>"WSL: Connect to WSL using Distro…"</b> lalu pilih distro yang barusan kita install bun nya, lalu buka terminal vscode nya ketik
    </p>
    <pre>
    <code class="language-bash">$ cd quickstart
$ code .</code>
    </pre>
    <img src="/blog/1697791523000.png" alt="1697791523000.png" class="img-lg" />
    <p>
    yap kita bisa melanjutkan development melalui vscode, kita juga bisa jalanin project bunnya melalui terminal vscode
    </p>
    </li>
    </ol>
    <p>
    oke akhirnya walaupun kita pakai windows, kita bisa ikut nyobain gimana make bun, apalagi sudah ada framework <code>elysia js</code> yang bisa kita kulik tanpa perlu ganti os di laptop kita, atau kalau mau running project node js kita yang sudah ada menggunakan bun juga bisa, yaaa ga terlalu keliatan beda nya si, untuk info bun lebih lanjut bisa langsung liat halaman resmi nya <a href="https://bun.sh" target="_blank">bun.sh</a>
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['bun', 'windows'],
    publishedAt: new Date('2023-10-20 07:08:23+00'),
    createdAt: new Date('2023-10-20 07:08:23+00'),
    updatedAt: new Date('2023-10-20 07:08:23+00'),
  },
  {
    id: '998aeec9-7602-4d9e-98c0-18c2c40f9f59',
    title: 'Javascript Ternary, Falsy dan Truthy',
    slug: 'javascript-ternary-falsy-dan-truthy',
    featureImageId: '21457d36-da60-445c-928d-f9eb2e294bb0',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    oi… gimana kodingannya? aman? manteeeppp… pada kesempatan yang ber-<b>bug</b>-ria ini, saya mau bahas hal yang bisa membuat kita semakin produktif, karena bisa menyingkat kodingan javascript kita yang tadinya agak panjang, menjadi sedikit lebih simpel dan keliatan lebih keren aja, apakah itu? yap, javascript ternary, <code>falsy</code> & <code>truthy</code>.
    </p>
    <p>
    mungkin udah banyak yang implement juga terkait ini, cuma mau saya mau bahas lagi aja. biasanya jika ada suatu kondisi, kita menggunakan if else atau switch case buat solve problemnya, namun beberapa case bisa kita persingkat syntax nya menggunakan operator <code>?</code>, <code>&</code>, <code>|</code>, <code>:</code>. ini sangat berguna biar kodingan kita yang tadinya terdiri dari beberapa baris bisa kita persingkat jumlah baris nya dan lebih elegan juga keliatannya.
    </p>
    <h3>1. ternary condition</h3>
    <p>
    misalkan kita memiliki array <code>users</code> dimana terdapat field <code>name</code> dan <code>age</code>, lalu kita ingin menampilkan teks mengenai apakah user tersebut sudah berumur di atas 20 tahun atau tidak. maka kita perlu membuat logic seperti berikut
    </p>
    <pre>
    <code class="language-javascript">const users = [
  { name: 'irsyad', age: 23 },
  { name: 'roni', age: 16 },
  { name: 'teguh', age: 21 },
  { name: 'rijal', age: 20 },
  { name: 'adam', age: 19 },
];

for (const user of users) {
  let detail;
  if (user.age > 20) {
    detail = 'greater than 20 years old';
  } else {
    detail = 'less than or equal to 20 years old';
  }
  console.log(\`\${user.name} is \${detail}\`);
}</code>
    </pre>
    <p>
    kode tersebut akan menghasilkan output seperti di bawah ini
    <p>
    <img src="/blog/1696494936.jpg" alt="1696494936.jpg" class="img-sm">
    <p>
    kita bisa mempersingkatnya menggunakan ternary condition dengan array <code>users</code> yang sama seperti berikut
    </p>
    <pre>
    <code class="language-javascript">for (const user of users) {
  const detail =
    user.age > 20
      ? 'greater than 20 years old'
      : 'less than or equal to 20 years old';
  console.log(\`\${user.name} is \${detail}\`);
}</code>
    </pre>
    <p>
    yaaa, walaupun tidak terlalu signifikan tapi jika kita menerapkan ini di seluruh project maka kita bisa meringkas banyak kode <code>if else</code> nya. kita pun bisa membuat nested nya lagi di dalam salah satu kondisi jika diinginkan.
    </p>
    <h3>2. falsy dan truthy</h3>
    <p>
    ini terkait dengan <code>falsy</code> dan <code>truthy</code> value akan membuat operator-operator jadi bisa mempersingkat suatu kondisi, jika suatu value dapat diubah menjadi <code>true</code>, maka nilai tersebut disebut <code>truhty</code>. jika suatu value dapat diubah menjadi <code>false</code>, maka nilai tersebut disebut <code>falsy</code>.
    </p>
    <p>
    beberapa value yang bisa diubah menjadi <code>falsy</code>
    </p>
    <table>
    <thead>
    <tr>
    <th>#</th><th>value</th><th>type</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>1</td><td><code>null</code></td><td>Null</td>
    </tr>
    <tr>
    <td>2</td><td><code>undefined</code></td><td>Undefined</td>
    </tr>
    <tr>
    <td>3</td><td><code>false</code></td><td>Boolean</td>
    </tr>
    <tr>
    <td>4</td><td><code>NaN</code></td><td>Number</td>
    </tr>
    <tr>
    <td>5</td><td><code>0</code></td><td>Number</td>
    </tr>
    <tr>
    <td>6</td><td><code>""</code></td><td>String</td>
    </tr>
    <tr>
    <td>7</td><td><code>document.all</code></td><td>Object</td>
    </tr>
    </tbody>
    </table>
    <p>
    selain list di atas maka dapat didefinisikan sebagai <code>truhty</code>, setelah kita tau <code>falsy</code> dan <code>truthy</code>, ada 1 lagi yakni <code>nullish</code>, nah kalau <code>nullish</code> di javascript itu cuma <code>null</code> dan <code>undefined</code>, jadi <code>nullish</code> termasuk <code>falsy</code> juga.
    </p>
    <p>
    dari <code>fasly</code>, <code>truthy</code> dan <code>nullish</code> di atas, ada beberapa operator yang bisa kita gunakan untuk mempersingkat kode kita, yang mau saya bahas di sini ada <code>&&</code>, <code>||</code> dan <code>??</code>.
    </p>
    <ul>
    <li>
    operator <code>&&</code><br>
    <p>
    terlepas dari logical operator, operator ini akan mengecek value yang pertama, jika value yang pertama itu adalah <code>truthy</code>, maka kembalikan value yang kedua, jika <code>falsy</code> maka kembalikan value yang pertama, misal terdapat syntax seperti berikut
    </p>
    <pre>
    <code class="language-javascript">const result = "" && "foo"; // result is assigned "" (empty string)</code>
    </pre>
    <p>
    maka variable result akan berisi empty string (<code>""</code>) karena value yang pertama (sebelah kiri) itu adalah <code>falsy</code>, jadi dia akan mengembalikan value yang pertama yaitu empty string (<code>""</code>), jika value pertama berisi misalkan <code>"bar"</code>, maka akan mengembalikan <code>"foo"</code>, karena <code>"bar"</code> termasuk ke <code>truthy</code>
    </p>
    <pre>
    <code class="language-javascript">const result = "bar" && "foo"; // result is assigned "foo"</code>
    </pre>
    <p>
    ini biasa digunain buat render saat fetching data di react atau next (dalam file <code>.jsx</code> atau <code>.tsx</code>), misal kita punya state <code>isLoading</code>, kita mau merender komponen setelah fetching data itu selesai atau <code>isLoading</code> sama dengan <code>false</code> (default nya <code>true</code>)
    </p>
    <pre>
    <code class="language-javascript">&lt;&gt;
  {!isLoading && (
    &lt;SomeComponent /&gt;
  )}
&lt;/&gt;</code>
    </pre>
    </li>
    <li>
    operator <code>||</code><br>
    <p>
    operator ini kurang lebih kebalikan dari operator <code>&&</code>, yang mana operator ini akan mengecek value yang pertama, jika value yang pertama itu adalah <code>truthy</code>, maka kembalikan value yang pertama, jika <code>falsy</code> maka kembalikan value yang kedua.
    </p>
    <pre>
    <code class="language-javascript">const result = "" || "foo"; // result is assigned "foo"</code>
    </pre>
    </li>
    <li>
    operator <code>??</code><br>
    <p>
    untuk operator yang satu ini mirip seperti operator <code>||</code>, namun bukan <code>truthy</code> atau <code>falsy</code> melainkan menggunakan <code>nullish</code>, jika value yang pertama itu adalah <code>nullish</code>, maka kembalikan value yang kedua, selain <code>nullish</code> maka kembalikan value yang pertama
    </p>
    <pre>
    <code class="language-javascript">const result = "foo" ?? "bar"; // result is assigned "foo"</code>
    </pre>
    <p>
    biasanya seing dipakai untuk membuat default value dari suatu environment variable jika tidak didefinisikan variablenya seperti berikut
    </p>
    <pre>
    <code class="language-javascript">const DB_HOST = process.env.DB_HOST ?? "localhost";</code>
    </pre>
    <p>
    jadi aplikasi kita tidak crash atau error ketika dijalankan tanpa mendefinisikan environment variable <code>DB_HOST</code> di dalam file <code>.env</code> (misalkan), walaupun terkadang ada hal-hal yang memang perlu disetup dahulu sebelum menjalankan aplikasinya
    </p>
    </li>
    </ul>
    <p>
    oke mungkin itu saja untuk kali ini, akhirnya jika kita implementasikan beberapa hal tadi, kodingan kita jadi lebih ringkas dan elegen pastinya apalagi di case yang memang perlu return langsung, mungkin untuk di bahasa pemrogramman lain secara konsep tidak terlalu berbeda, namun perlu ada penyesuaian aja tergantung bahasa pemrogramman nya.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini, semoga bermanfaat 😊
    </p>
    </article>
    `,
    tags: ['javascript', 'ternary', 'falsy', 'truthy', 'nullish'],
    publishedAt: new Date('2023-10-05 08:24:05+00'),
    createdAt: new Date('2023-10-05 08:24:05+00'),
    updatedAt: new Date('2023-10-05 08:24:05+00'),
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
  {
    id: '04cf9b89-3c3d-4250-b617-6233b2bd5063',
    title: 'Array Method .reduce() di Javascript',
    slug: 'array-method-reduce-di-javascript',
    featureImageId: '417db7b7-b046-4d7e-ac07-27bc05550662',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    yohohooo… yohohoo… sehat-sehat semuanya, kali ini saya mau bahas yang ringan-ringan aja dan bisa jadi basic dari javascript/typescript tapi pengen aja gitu bahas ini, daripada berat-berat mulu ya kan, mager juga nulisnya (tapi mau coba konsisten si).
    </p>
    <p>
    oke, yang mau saya bahas adalah suatu array method yang bisa dibilang, terlalu sering digunain? engga, terlalu jarang? engga juga, mungkin method-method array yang udah sering kita pake itu <code>.map()</code>, <code>.filter()</code>, <code>.find()</code>, ini udah sering banget dipake, nah kalo method ini spesial punya kegunaan tersendiri tidak lain tidak bukan yaitu method <code>.reduce()</code>.
    </p>
    <h3>introduction</h3>
    <p>
    pertama-tama untuk definisi singkat <u>menurut saya</u>, method <code>.reduce()</code> ialah method yang akan melooping keseluruhan array dengan membawa nilai di tiap loopnya, untuk returnnya bisa berbeda-beda tergantung proses di dalamnya.
    </p>
    <p>
    selanjutnya kita liat dulu nih parameter-parameter yang ada id method <code>.reduce()</code>, bisa terdapat 1 atau 2 parameter yakni
    </p>
    <ul>
    <li>
    callback function<br>dengan parameter <code>previousValue</code>, <code>currentValue</code>, <code>currentIndex</code>, <code>array</code>. dimana returnnya adalah value yang akan dibawa di looping selanjutnya
    </li>
    <li>
    initial value (opsional)<br>untuk initial value ini opsional, jika didefinisikan maka looping akan dimulai dari value yang diberikan, lalu jika tidak maka looping akan dimulai dari indeks ke-0 dan tipe data dari return nya adalah tipe element di array tersebut.
    </li>
    </ul>
    <pre>
    <code class="language-javascript">const arr = ['1', '2', '3', '4', '5'];

const result = arr.reduce((prev, curr, index) => {
  const theReturn = prev + curr;
  console.log({ index, prev, curr, theReturn });
  return theReturn;
}, 'initial');

console.log(result);</code>
    </pre>
    <p>
    output dari kode tersebut kurang lebih akan menampilkan seperti berikut
    </p>
    <img src="/blog/1695909309.jpg" alt="1695909309.jpg" class="img-md">
    <p>
    Terlihat bahwa saat awal (<code>index</code> nya 0) nilai prev adalah <code>"initial"</code> yang didefinisikan di parameter kedua, namun di looping selanjutnya nilai prev tersebut berubah karena return dari callback function adalah <code>prev</code> + <code>curr</code> menghasilkan <code>"intial1"</code>, dan seterusnya akan dibawa sampai looping yang terakhir hingga menjadi return dari method <code>.reduce()</code> nya yaitu <code>"initial12345"</code>.
    </p>
    <p>
    jika kita coba menghilangkan <code>'initial'</code> dari parameter kedua
    </p>
    <pre>
    <code class="language-javascript">const arr = ['1', '2', '3', '4', '5'];

const result = arr.reduce((prev, curr, index) => {
  const theReturn = prev + curr;
  console.log({ index, prev, curr, theReturn });
  return theReturn;
});

console.log(result);</code>
    </pre>
    <p>
    maka outputnya akan seperti ini
    </p>
    <img src="/blog/1695909878.png" alt="1695909878.png" class="img-md">
    <p>
    looping dimulai dari indeks pertama dari array nya, karena <code>initialValue</code> tidak didefinisikan dan returnnya berupa <code>string</code> karena tipe elementnya adalah <code>string</code>.
    </p>
    <h3>example</h3>
    <p>
    setelah kita udah tau detail dari method <code>.reduce()</code>, sekarang pertanyaannya <b>"kapan kita pake ini method?"</b>, <b>"pas lagi kayak gimana ni kita butuh?"</b>, nah mungkin method ini kita bisa implementasi untuk kondisi-kondisi di bawah, kalo ada keperluan seperti berikut, cocok banget buat dipake ni
    </p>
    <ol>
    <li>
    <b>total nilai</b><br>
    <p>ini kayak hal paling mainstream yang bisa diselesaikan menggunakan method <code>.reduce()</code> ini, yakni kalau kita mau mencari total nilai atau jumlah dari seluruh element di dalam array tersebut. contoh case nya misalkan ada pengguna di suatu e-commerce dimana pengguna memiliki keranjang belanja dan ia hendak checkout, maka aplikasi perlu menghitung total harga dari barang-barang yang dipilih karena pengguna perlu mengetahui berapa jumlah yang perlu ia bayar.
    </p>
    <pre>
    <code class="language-javascript">const cart = [
  { name: 'pensil', price: 2000 },
  { name: 'buku', price: 5000 },
  { name: 'penghapus', price: 6500 },
  { name: 'tipe-x', price: 11000 },
  { name: 'pulpen', price: 4000 },
];

const totalPrice = cart.reduce((prev, curr) => {
  return prev + curr.price;
}, 0);

console.log(totalPrice); // 28500</code>
    </pre>
    <p>
    kita set initial value nya <code>0</code> karena kita ingin return dari method nya berupa <code>number</code> bukan <code>object</code>, hasilnya kita bisa dapet total harga dari keranjang belanja nya sebesar <code>28500</code>.
    </p>
    </li>
    <li>
    <b>nilai maksimum atau minimum</b><br>selain total nilai, kita juga bisa mencari nilai maksimum atau minimum dari suatu array, misal dengan array <code>cart</code> yang sama, kita ingin mencari harga paling mahal dan paling murah dari list tersebut.
    <pre>
    <code class="language-javascript">const maxPrice = cart.reduce((prev, curr) => {
  return Math.max(prev, curr.price);
}, -Infinity);

const minPrice = cart.reduce((prev, curr) => {
  return Math.min(prev, curr.price);
}, Infinity);

console.log(maxPrice); // 11000
console.log(minPrice); // 2000</code>
    </pre>
    <p>
    kita bisa mendapatkan bahwa harga barang paling mahal sebesar <code>11000</code> dan paling murah adalah <code>2000</code>.
    </p>
    </li>
    <li>
    <b>penggabungan method <code>.filter()</code> dan <code>.map()</code></b><br>
    <p>
    menarik ni, maksudnya gimana tu penggabungan 2 method, jadi saya juga baru tau dari temen saya (sebut saja teguh) bahwa method <code>.reduce()</code> bisa jadi pengganti dari <code>.filter()</code> dan <code>.map()</code>, namun kondisinya memang jika menggunakan 2 method itu secara berurutan, <code>.filter()</code> baru abis itu <code>.map()</code>, bahkan secara proses lebih efisien karna proses looping arraynya hanya sekali saja. misal masih dengan array <code>cart</code> yang tadi, kita perlu mencari info tentang nama-nama barang yang harganya lebih besar dari <code>5000</code>, pertama-tama kita coba pakai <code>.filter()</code> dan <code>.map()</code> dulu.
    </p>
    <pre>
    <code class="language-javascript">const itemNameWithPriceMoreThan5000 = cart
  .filter((item) => {
    return item.price > 5000;
  })
  .map((item) => item.name);

console.log(itemNameWithPriceMoreThan5000); // ["penghapus", "tipe-x"]</code>
    </pre>
    <p>
    hasilnya adalah array baru yang isinya <code>"penghapus"</code>, <code>"tipe-x"</code>. item dengan nama <code>"buku"</code> tidak termasuk, karena harganya pas <code>5000</code>. sekarang kita coba menggunakan method <code>.reduce()</code> untuk penggabungan method <code>.filter()</code> dan <code>.map()</code>.
    </p>
    <pre>
    <code class="language-javascript">const itemNameWithPriceMoreThan5000 = cart.reduce((prev, curr) => {
  if (!(curr.price > 5000)) {
    return prev;
  }
  prev.push(curr.name);
  return prev;
}, []);

console.log(itemNameWithPriceMoreThan5000); // ["penghapus", "tipe-x"]</code>
    </pre>
    <p>
    kita mendapatkan hasil yang sama, bahkan looping yang dilakukan hanya sekali, sedangkan jika menggunakan <code>.filter()</code> dan <code>.map()</code> loopingnya sebanyak 2 kali, lebih efisien jadinya kan.
    </p>
    </li>
    </ol>
    <p>
    oke itu tadi beberapa case yang bisa diimplementasi dengan method <code>.reduce()</code>, dengan mengetahui konsep atau flownya, kita bisa menemukan case lain yang juga dapat diselesaikan, jika sekiranya lebih efisien menggunakan <code>.reduce()</code>, bisa dipertimbangkan untuk mengganti penggunaannya (kalo masih ragu jangan, ntar malah nambah bug, hehe)
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini, semoga bermanfaat 😊
    </p>
    </article>
    `,
    tags: ['reduce', 'array', 'javascript'],
    publishedAt: new Date('2023-09-28 07:13:50+00'),
    createdAt: new Date('2023-09-28 07:13:50+00'),
    updatedAt: new Date('2023-09-28 07:13:50+00'),
  },
];

export const blogDatas = blogs
  .map((blog) => {
    return {
      ...blog,
      featureImage: fileDatas.find(({ id }) => id === blog.featureImageId),
      author: authorDatas.find(({ id }) => id === blog.authorId),
    };
  })
  .sort((a, b) => {
    if (!a.publishedAt) return 1;
    else if (!b.publishedAt) return -1;
    return a.publishedAt < b.publishedAt ? 1 : -1;
  });
