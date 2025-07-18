import { Blog } from '@/types/blog.type';

import { ENV } from '../configs/app.config';
import { authorDatas } from './authors.data';
import { fileDatas } from './files.data';

export const blogs: Blog[] = [
  {
    id: '620240b7-b046-4c4d-aaf8-bacbcd39b11e',
    title: 'Namain Variable',
    slug: 'namain-variable',
    featureImageId: 'd51c4402-323f-4201-9172-7507cc1e3fa8',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    oi, sehat-sehat semuaaa… kali ini gw mo bahas sesuatu yang paling paling sulit pas lagi ngoding, ini udeh tier tersulit pokoknya dah, terkesan simple tapi gw pribadi pernah bengang bengong cuma mikir <b>"enaknya gw kasih nama ape ni variable?"</b>, lumayan lama lagi mikirnya. yaaa sedikit-sedikit lu yang developer pernah ngerasain pastinya. <b>"yailah tinggal namain doang"</b> nah itu dia, gw juga maunya begitu, tapi ternyata ga sesederhana itu.
    </p>
    <h3>pendahulaun</h3>
    <p>
    oke pertama-tama kita coba simulasikan yak kenapa <b>namain variable</b> jadi concern yang cukup penting bagi gw pribadi pas ngoding, sebenernya ga cuma variable si, namain function, parameter, class, dll. juga termasuk.
    </p>
    <p>
    bayangin misalkan lu lagi kedapetan <b>"rejeki"</b> buat ngelanjutin/nambahin fitur di project lama, kita kesampingkan dulu problem terkait tech stack yang udeh jauh dari versi terbarunya. nah pas lu lagi udeh clone tu reponya, lu mulai menelusuri fitur-fitur yang ada, trus nemuin code kayak gini
    </p>
    <pre>
    <code class="language-javascript">let u;</code>
    </pre>
    <p>
    sekejap lu mulai berasumsi dan menyimpulkan kayaknya variable <code>u</code> ini buat user ni maksdunya, lu lanjut lagi lah tu buat liat-liat yang laen, trus ketemu lah ama code berikut
    </p>
    <pre>
    <code class="language-javascript">let usr = await getUser();</code>
    </pre>
    <p>
    reaksi lu <b>"lah ini variable user, trus tadi buat apaan?"</b>, lu cari-cari tau dulu tu dah tu buat apaan, iya kalo cuma 1 case, kalo banyak case kek gitu, yang seharusnya waktunya bisa lu pake buat mahamin flow yang lain, malah abis buat nyari tau itu variable buat nyimpen apaan, bete si lama-lama. 
    </p>
    <p>
    nah biar ga kejadian sebenernya kita tau lah bisa pake comment, tapi kalo nama variable lu aja udah menggambarkan itu buat apaan dan orang juga ga bingung pas bacanya itu menurut gw lebih bagus si.
    </p>
    <h3>tips namain variable/function menurut gw</h3>
    <p>
    oke kalo gitu, biar hal-hal sebelumnya atau yang lainnya ga perlu terjadi, ini beberapa concern dari gw pribadi pas namain variable atau function di project, disclaimer semuanya berupa opini yee
    </p>
    <ol>
    <li><b>kudu sesuai ama isinya dan tepat</b></li>
    <p>
    bukan cuma sesuai tapi bener-bener tepat, gw ga ngomongin yang nama variable nya <code>age</code> tapi diisi alamat yak, udeh kebangetan itu. tapi yang bisa menimbulkan kebingungan lebih baik dihindari
    misal
    </p>
    <pre>
    <code class="language-javascript">let price = 100_000;
let tax = 0.12;
let newPrice = price - (price * tax);
console.log(newPrice);</code>
    </pre>
    <p>
    sekilas oke oke aja, tapi variable <code>newPrice</code> ini ga jelas maksudnya apa, mending kita buat jadi lebih clear seperti
    </p>
    <pre>
    <code class="language-javascript">let priceAfterTax = price - (price * tax); // lebih clear
console.log(priceAfterTax);</code>
    </pre>
    <li><b>hindarin singkatan yang ga umum</b></li>
    <p>
    kadang-kadang kalo mo pake singkatan buat nama variable oke oke aja malah recommended, tapi kudu singkatan yang emang orang-orang juga tau itu maksudnya apa, yang umum lah pokoknya.
    </p>
    <pre>
    <code class="language-javascript">let cu; // ini kurang jelas, cu itu singkatan apaan
let currentUser; // mending dipanjangin aja kek begini</code>
    </pre>
    <li><b>nama function kudu kata kerja</b></li>
    <p>
    karna function tu bakal dieksekusi, nah enaknya pake kata kerja (verb) bukan pake kata benda (noun), sekalian nandain kalo itu tu function gitu, walaupun di text editor kek vscode warnanya jadi beda si.
    </p>
    <pre>
    <code class="language-javascript">// not recommended ❌
function user() {
  ...
}
user(); // kurang jelas aja pas dipanggil, apani user() maksudnya

// recommended ✅
function approveUser() {
  ...
}
approveUser(); // nah better kan, oh ini eksekusi buat approve user</code>
    </pre>
    <li><b>konsisten case dan usahain ngikut komunitas bahasa pemrogrammannya</b></li>
    <p>
    banyak jenis naming convention (camelCase, snake_case, kebab-case, etc) dan codingan sebenernya jalan-jalan aja mo kita mix penggunaannya, cuma kalo dimix gitu entah kenapa kurang resep aja pas baca code nya.
    </p>
    <p>
    misal di javascript
    </p>
    <pre>
    <code class="language-javascript">let userName = ... ; // camelCase (recommended di js/ts)
let active_menus = ... ; // snake_case</code>
    </pre>
    <p>
    atau misal di php
    </p>
    <pre>
    <code class="language-php">$user_name = ... ; // snake_case (recommended di php)
$activeMenus = ... ; // camelCase</code>
    </pre>
    <p>
    gregetan aja gitu, kenapa kudu mix gitu gaya namain variablenyaaa atau kalo mo beda dari yang banyak dipake komunitas minimal samain aja semua sekalian gapapa dah (menurut gw gapapa). 
    </p>
    <p>
    kira-kira berikut yang banyak komunitas pakai dari berbagai bahasa pemrograman
    </p>
    <table>
    <thead>
    <tr>
    <th>bahasa</th>
    <th>variable/function</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>javascript / typescript</td>
    <td>camelCase</td>
    </tr>
    <tr>
    <td>python</td>
    <td>snake_case</td>
    </tr>
    <tr>
    <td>java</td>
    <td>camelCase</td>
    </tr>
    <tr>
    <td>go</td>
    <td>camelCase (private)<br>PascalCase (public)</td>
    </tr>
    <tr>
    <td>c#</td>
    <td>camelCase (private)<br>PascalCase (public)</td>
    </tr>
    <tr>
    <td>php</td>
    <td>snake_case / camelCase</td>
    </tr>
    <tr>
    <td>rust</td>
    <td>snake_case</td>
    </tr>
    <tr>
    <td>swift</td>
    <td>camelCase</td>
    </tr>
    <tr>
    <td>kotlin</td>
    <td>camelCase</td>
    </tr>
    </tbody>
    </table>
    <li><b>array pake s di belakangnya</b></li>
    <p>
    kalo variablenya buat tipe data <code>array</code>, pake s di belakangnya, sekalian nandain kalo itu <code>array</code> (bisa di-looping), kecuali itu dynamic type, bisa <code>array</code> bisa <code>object</code> misal, nah gapapa dah gapake s
    </p>
    <pre>
    <code class="language-javascript">const activeMenu = ['home', 'products', ... ]; // not recommended ❌
const activeMenus = ['home', 'products', ... ]; // recommended ✅</code>
    </pre>
    <p>
    kan enak pas mau looping, baru tu pake yang singular buat penamaan element nya
    </p>
    <pre>
    <code class="language-javascript">for (const activeMenu of activeMenus){
  ... // statement
}
// atau di method map
activeMenus.map((activeMenu) => {
  ... // statement
});</code>
    </pre>
    <li><b>in english</b></li>
    <p>
    gw recommend banget semua nama variable pake english, agak repot dikit buat nyari translate/istilahnya dalam english, tapi biar lebih clear aja cuy, yaaa gw kadang masih ada bahasa indonesianya si. ini terkait juga sama nomor sebelumnya, misal kalo pake bahasa trus buat <code>array</code>nya jadi agak aneh aja.
    </p>
    <pre>
    <code class="language-javascript">// not recommended ❌
let siswa = ... ;
let siswas = [...]; // apaan siswas? wkwk

// recommended ✅
let student = ... ;
let students = [...]; // clear kan hehe</code>
    </pre>
    <li><b>konsisten terhadap istilah yang punya sinonim</b></li>
    <p>
    beberapa kata contohnya di action, ada yang memiliki sinonim seperti create/add, read/get, update/edit, dan delete/remove. nah ketika udah mutusin pake create misalkan, nah kita tetep konsisten gunain create terus gitu.
    </p>
    <pre>
    <code class="language-typescript">// di user service
function deleteUser (id: string) {
  ... // statement
}

// not recommended ❌
// di product service 
function removeProduct (id: string) { // kenapa di sini pake kata 'remove'?
... // statement
}

// recommended ✅
// di product service
function deleteProduct (id: string) { // nah sama kan lebih enak
  ... // statement
}</code>
    </pre>
    <p>
    intinya konsisten aja, mo pake delete ya delete semua gitu, atau kalo mo pake remove ya remove semua. begitu juga dengan sinonim-sinonim lainnya.
    </p>
    </ol>
    <img src="/blog/naming-variable-meme.jpg" class="img-xs" title="you laugh to this meme until you are in the same situation">
    <h3>penutup</h3>
    <p>
    oke kira-kira itu aja sih yang biasanya gw perhatiin pas buat nama variable, keknya masih ada tapi ga keinget pas nulis jadi yaudah lah yaaa segitu aja. keknya gw udah sering ngomong juga intinya namain variable jadi penting biar orang lain atau kita di masa depan bisa lebih ngebaca kode nya dan kalo lu udah biasa namainnya lebih clear, pasti jadi lebih aware pas baca variable di code project lain.
    </p>
    <br>
    <p>
    kalo berhasil sampe sini, thanks banget udah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat
    </p>
    </article>`,
    tags: ['variable'],
    publishedAt: new Date('2025-07-10 00:30:00+07:00'),
    createdAt: new Date('2025-07-10 19:20:46+07:00'),
    updatedAt: new Date('2025-07-10 19:20:46+07:00'),
    referenceURLs: [
      'https://bennettgarner.medium.com/developers-your-poorly-named-variables-are-hurting-your-team-a8ec31e3cbd5',
    ],
  },
  {
    id: '6ef606ee-2fa9-4f22-b2c9-cd63828486e2',
    title: 'Pros & Cons Foreign Key',
    slug: 'pros-and-cons-foreign-key',
    featureImageId: '318626e4-a35d-4fbc-ae04-640201b87a18',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    bae bae kan kabarnya cuy, kali ini gw mau bahas dikit seputar <b>foreign key</b> dari sepengalaman gw aja selama ngerancang database buat suatu aplikasi khususnya database relational. buat yang berkecimpung di dunia backend atau database pasti tau, banyak dilema yang ditemuin buat ambil keputusan dari yang gampang ampe yang masing-masing keputusan ada plus minus nya termasuk penggunaan foreign key ini, kadang juga gw masih banyak salah pas ngerancang nya. 
    </p>
    <p>
    menurut gw pas di tengah pengembangan kalo kesalahan yang kita buat ada di struktur database itu bete banget, pilihannya antara ngerombak database atau ngakalin query kita supaya tetep bisa ngehasilin data yang kita mau. tapi untuk case foreign key ini sebenernya ga ke arah query, palingan yang mau gw garis bawahi itu di <u>performa</u> nya, yaa walaupun gw gaada benchmark juga hehe, cuma bisa dibayangin aja, jadi langsung aja kita bahas.
    </p>
    <h3>pengenalan foreign key</h3>
    <p>
    secara definisi kurang lebih foreign key itu kolom atau field di table yang ngereferensi-in ke kolom di table yang lain, misal kita punya table <code>users</code> dan table <code>roles</code>, anggap lah case nya 1 user cuma bisa punya 1 role dan 1 role bisa punya banyak user, nah di table <code>users</code> kita akan menambahkan kolom dengan nama <code>role_id</code> misal, kolom <code>role_id</code> tersebut lah yang namanya foreign key, karna isinya nanti adalah <code>id</code> yang ngereferensiin suatu role.
    </p>
    <pre>
    <code class="language-sql">create table roles (
  id int primary key,
  name varchar(100)
);
  
create table users (
  id int primary key,
  name varchar(100),
  role_id int,
  foreign key (role_id) references roles(id)
);</code>
    </pre>
    <p>
    kira-kira dari sql di atas bakal ngehasilin gambaran database seperti di bawah ini, jadi ada kayak benang yang ngehubungin (relation) antara 2 table, dimana data yang ada di table <code>users</code> kolom <code>role_id</code> harus ada di table <code>roles</code> kolom <code>id</code> (kalau gaada akan error saat <code>insert</code> atau <code>update</code>), nah saling terhubung tu tablenya, yak itulah alasan kenapa dinamain <b>database relational</b>.
    </p>
    <img src="/blog/table-result.png" class="img-sm" title="table result">
    <p>
    oke saat ngerancang hal-hal kek gitu sampe semua fitur yang akan ada di aplikasi udah dibuat wadah datanya bakal semakin banyak juga benang yang kebikin. gw ga pernah ngebenchmark secara jelas performanya, tapi gw coba banyangin aja benangnya banyak, semua benangnya harus jelas, pasti ada cost yang dikorbanin, nah itu pros and cons nya.
    </p>
    <h3>pros</h3>
    <ol>
    <li><b>integritas data</b></li>
    <p>
    ketika kita implementasi foreign key, data kita dipastikan pasti konsisten, dan secara diagram bisa kita liat keterkaitan table satu sama lain. seperti ini contohnya
    </p>
    <img src="/blog/database-relation.png" class="img-md" title="database relation">
    <li><b>menghindari data “orphan”</b></li>
    <p>
    ga bakal ada data yang referensinya ga ketemu, kan pas <code>insert</code> atau <code>update</code> table children nya akan error duluan kalo gaada referensinya
    </p>
    <img src="/blog/error-sql-1.png" class="img-sm" title="error sql insert atau update">
    <p>
    dan kalau hapus data parentnya juga akan error misalkan data tersebut masih memiliki children.
    </p>
    <img src="/blog/error-sql-2.png" class="img-sm" title="error sql delete">
    <li><b>gampang pas mau buat query <code>join</code></b></li>
    <p>
    sebenernya kita bisa terapin aturan kalau nama kolom foreign key itu <code>{tableName}_id</code>, tapi kalo udah pake foreign key, biarpun namanya random, orang lain atau diri kita di masa yang akan datang gaakan bingung pas liat struktur database nya.
    </p>
    <img src="/blog/random-foreign-key-name.png" class="img-md" title="random foreign key name">
    <li><b>gampangin pas mau ngehapus yang berantai</b></li>
    <p>
    nah saat deklarasi foreign key, kita bisa set untuk <code>on delete</code> (jika data dihapus) dan </code>on update</code> (jika id referensi diubah), opsinya ada 5 opsinya
    </p>
    <table>
    <tbody>
    <tr>
    <td>restrict</td>
    <td>penghapusan akan gagal kalau data masih memiliki children, ini default nya kalau ga kita kasih</td>
    </tr>
    <tr>
    <td>cascade</td>
    <td>data di children dengan referensi id ikut kehapus</td>
    </tr>
    <tr>
    <td>no action</td>
    <td>mirip seperti restrict tapi pengecekan foreign key ada di akhir eksekusi</td>
    </tr>
    <tr>
    <td>set null</td>
    <td>data di children akan diset null (ini berlaku jika kolom foreign key nullable</td>
    </tr>
    <tr>
    <td>set default</td>
    <td>data di children akan diset ke default nya. (ini berlaku jika kolom foreign key punya nilai default)</td>
    </tr>
    </tbody>
    </table>
    <p>
    kadang kita buat table mendukung table lain, dimana isinya biasanya data-data yang kalau data utamanya dihapus yaa ikut hapus aja, untuk case ini kita bisa set ke <code>on delete cascade</code>, jadi pas ngehapus suatu data utama data-data childrennya ikut dihapus aja sekalian ga perlu ngehapus lagi.
    </p>
    </ol>
    <p>
    Itu dia pros nya, sebelum kita bahas cons kita perlu tau juga keterkaitan foreign key dan <b>indexing</b> di database
    </p>
    <h3>foreign key dan indexing</h3>
    <p>
    pas kita buat table dengan foreign key, beberapa database ga sekaligus bikin indexing untuk kolom tersebut, contohnya di postgresql, kita perlu define sendiri indexing buat kolom foreign key nya. akibatnya, kalau ga pake indexing, query yang ngelakuin <code>join</code> atau pencarian berdasarkan foreign key bisa bikin lemot, begitu juga fitur <code>on delete cascade</code> atau <code>on update cascade</code>.
    </p>
    <p>
    solusinya kita bisa define dulu indexing buat kolom foreign key nya, singkatnya indexing bisa ngebantu mempercepat pencarian data, ningkatin performa pas ngecek relasi, ngurangin beban pas cascading.
    </p>
    <p>
    baru dah kita masuk ke cons nya.
    </p>
    <h3>cons</h3>
    <ol>
    <li><b>performance bisa kehambat</b></li>
    <p>
    ini nyambung ke indexing si, pas <code>insert</code>, <code>update</code> dan <code>delete</code> tu sebenernya akan selalu ngelakuin indexing ulang, nah karna kita implement foreign key + indexing nya, ini perlu kita pertimbangin.
    </p>
    <li><b>kurang cocok kalau misal datanya nyebar</b></li>
    <p>
    pas udah implementasi micro-service, biasanya kita perlu misahin data ke beberapa service/server juga, nah gabisa tu kita pake fitur foreign key nya.
    </p>
    <li><b>perlu fokus ekstra saat migrasi data</b></li>
    <p>
    pas migrasi data, kita perlu faham urutan create table nya, urutan insert data nya. ini bisa kita akalin dengan matiin pengecekan foreign key sementara saat migrasi, setelah selesai bisa dinyalain lagi.
    </p>
    <pre>
    <code class="language-sql">set foreign_key_checks = 0;
-- execute query
set foreign_key_checks = 1;</code>
    </pre>
    <li><b>lemot pas data nya udah membludak</b></li>
    <p>
    kalo query-query yang bakal kita eksekusi bakal ngolah data yang banyak, better buat pertimbangin gausa pake foreign key buat ngejar performa nya.
    </p>
    </ol>
    <p>
    nah kurang lebih kondisi-kondisi yang perlu kita perhatiin pake foreign key atau engga
    <p>
    <table>
    <tbody>
    <tr>
    <td>✅</td>
    <td>aplikasi masih monolitik karna datanya masih nyatu</td>
    </tr>
    <tr>
    <td>✅</td>
    <td>kita perlu banget data integrity</td>
    </tr>
    <tr>
    <td>✅</td>
    <td>aturan penamaan join table tidak beraturan</td>
    </tr>
    <tr>
    <td>✅</td>
    <td>database masih oke secara performanya</td>
    </tr>
    <tr>
    <td>❌</td>
    <td>aplikasi microservices</td>
    </tr>
    <tr>
    <td>❌</td>
    <td>validasi udah dilakuin di service/backend layer, jadi sebelum ke database udah pure bersih dari kesalahan</td>
    </tr>
    <tr>
    <td>❌</td>
    <td>butuh banget query dengan performa tinggi</td>
    </tr>
    </tbody>
    </table>
    <h3>penutup</h3>
    <p>
    penggunaan foreign key ini emang biasanya diwajibin pas kita lagi belajar buat fundamental database, gw pun berpikir gitu awalnya, tapi pas makin kesini ternyata kita perlu nyesuain sama keadan data di aplikasi kita, bisa perlu bisa engga, jadi gabisa kita pukul rata dan disesuain case nya. sekarang mindsetnya tiap ada feature pasti ada cost nya, so pilih aja konsekuensinya.
    </p>
    <br>
    <p>
    kalo berhasil sampe sini, thanks udah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat
    </p>
    </article>`,
    tags: ['database', 'foreign key'],
    publishedAt: new Date('2025-06-22 01:30:00+07:00'),
    createdAt: new Date('2025-06-23 19:20:46+07:00'),
    updatedAt: new Date('2025-06-23 19:20:46+07:00'),
    referenceURLs: ['https://www.w3schools.com/sql/sql_foreignkey.asp'],
  },
  {
    id: '55ab0cad-81aa-4a21-9b52-d6b44dc94fa1',
    title: 'Generic di Golang',
    slug: 'generic-di-golang',
    featureImageId: '178cab2c-9a50-40b6-9f62-5fbda0e89071',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    selamat berpuasa buat yang ngejalanin… puasa-puasa gini kita kudu tetep produktif, kali ini kita mau bahas sesuatu mengenai dunia per-type-safety-an, yaitu konsep generic di bahasa pemrogramman, kita ambil contohnya di bahasa pemrogramman golang aja (di bahasa lain seperti java, c++, typescript juga ada sebenernya). 
    </p>
    <p>
    awalnya saya mau bahas pakai typescript, tapi coba sesekali lah pake golang, secara konsep mirip-mirip hanya ada perbedaan sedikit saja menyesuaikan bahasanya.
    </p>
    <h3>sekilas tentang generic</h3>
    <p>
    generic tu kurang lebih fitur suatu bahasa pemrogramman yang memungkinkan kita ngebuat suatu tipe data yang dinamis atau dapat berubah menyesuaikan kebutuhan tipe data nya saat digunakan, ini bisa <b>ngurangin penggunaan <code>interface{}</code> atau <code>any</code></b> dalam kode golang kita. generic sendiri di golang seringkali dipake saat mendefinisikan fungsi ataupun struct (class).
    </p>
    <blockquote>
    Generic Programming adalah salah satu metode dalam penulisan kode program, di mana tipe data dalam kode didefinisikan menggunakan suatu tipe yang tipe pastinya ditulis belakangan saat kode tersebut di-call atau dieksekusi
    </blockquote>
    <h3>kenapa perlu generic?</h3>
    <p>
    ketika kita ga pake generic, kita akan ngadepin keadaan dimana sebuah kode sudah kita tulis sebelumnya namun ada kebutuhan untuk mengolah variable dengan tipe data yang berbeda dan <b>kode itu masih berfungsi walaupun menggunakan tipe data yang berbeda</b>. 
    </p>
    <p>
    dengan pake generic kita ga perlu nulis ulang sebuah kode yang mirip untuk tipe data baru itu, cukup ngebuat dinamis tipe data nya dan akan didefinisiin tipe data nya saat digunain kode tersebut akhirnya kode kita makin lebih bersih dan reusable
    </p>
    <h3>cara kerja generic</h3>
    <p>
    kita bisa pake generic melalui type parameter, biasanya ditandain sama huruf <code>T</code> (bebas aja sebenernya), kalau <code>T</code> sudah digunakan, kita bisa pake <code>U</code> atau <code>K</code> atau apapun selama type tersebut belum digunakan. contoh sederhana generic:
    </p>
    <pre>
    <code class="language-golang">func PrintSlice[T any](slice []T) {
    for _, value := range slice {
        fmt.Println(v)
    }
}</code>
    </pre>
    <p>
    <code>T</code> di atas adalah type parameter dan <code>any</code> adalah constraints atau batasan dari tipe <code>T</code> tersebut, jika constraints nya adalah <code>any</code> maka <code>T</code> bisa berupa tipe data apa aja.
    </p>
    <h3>type constraints</h3>
    <p>
    beberapa built-in yang bisa kita pake seperti <code>any</code> (buat tipe apapun) dan <code>comparable</code> (buat tipe yang bisa dibandingkan) atau kita bisa buat type constraints sendiri pakai <code>interface</code>.
    </p>
    <pre>
    <code class="language-golang">type Number interface {
    int | float64
}

func Add[T Number](a, b T) T {
    return a + b
}</code>
    </pre>
    <p>
    tipe data <code>T</code> di parameter fungsi <code>Add</code> dibatasi dengan interface <code>Number</code>, dimana cuma bisa <code>int</code> dan <code>float64</code> aja.
    </p>
    <h3>contoh penggunaan generic</h3>
    <ol>
    <li><b>generic di fungsi</b></li>
    <p>
    kita bisa membuat tipe data generic di parameter suatu fungsi agar fungsi tersebut bisa menerima berbagai macam tipe data
    <p>
    <pre>
    <code class="language-golang">func IndexOfSlice[T comparable](slice *[]T, value T) int {
    for i, item := range *slice {
        if value == item {
            return i
        }
    }
    return -1
}</code>
    </pre>
    <p>
    fungsi <code>IndexOfSlice</code> bisa digunakan untuk slice <code>int</code>, <code>string</code> atau tipe lain yang bisa dibandingkan, pada contoh di atas tipe yang digunakan adalah <code>string</code> (bisa dibandingkan), jika fungsinya kita panggil maka akan seperti ini:
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"

func main() {
    fruits := []string{"apple", "banana", "mango"}
    fmt.Println(IndexOfSlice[string](&fruits, "banana"))
}</code>
    </pre>
    <p>
    variable <code>fruits</code> merupakan slice dari string, jadi tipe data <code>string</code> masih masuk ke type constraints <code>comparable</code>. output dari kode di atas adalah <code>1</code> karena nilai index dari string <code>"banana"</code> adalah <code>1</code>.
    </p>
    <li><b>generic di struct</b></li>
    <p>
    kita bisa bikin tipe data generic di struct seperti berikut:
    </p>
    <pre>
    <code class="language-golang">type Queue[T any] struct {
    items []T
}

func (q *Queue[T]) Push(item T) {
    q.items = append(q.items, item)
}

func (q *Queue[T]) Pop() T {
    item := q.items[0]
    q.items = q.items[1:]
}</code>
    </pre>
    <p>
    struct <code>Queue</code> bisa menampung tipe data apapun, misalkan kita panggil dengan tipe <code>string</code>.
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"

func main() {
    queue := Queue[string]{}

    queue.Push("luffy")
    fmt.Println(queue.items)

    queue.Push("zoro")
    fmt.Println(queue.items)

    queue.Pop()
    fmt.Println(queue.items)

    queue.Push("sanji")
    fmt.Println(queue.items)
    
    queue.Pop()
    fmt.Println(queue.items)
}</code>
    </pre>
    <li><b>penggunaan tipe data generic lebih dari 1</b></li>
    <p>
    jika tipe generic lebih dari 1, maka tipe generic tersebut bisa kita namai <code>U</code> atau apapun selama belum digunakan, misalkan kita ingin membuat sebuah fungsi reduce seperti yang ada di javascript
    </p>
    <pre>
    <code class="language-golang">func ReduceSlice[T any, U any](
    slice *[]T,
    reducer func(prev U, curr T) U,
    initial U,
) U {
    accumulator := initial
    for _, v := range *slice {
        accumulator = reducer(accumulator, v)
    }
    return accumulator
}</code>
    </pre>
    <p>
    fungsi tersebut memiliki 2 tipe data generic yaitu <code>T</code> dan <code>U</code>, jika kita panggil fungsi tersebut maka seperti ini:
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    people := []Person{
        {"curry", 36},
        {"lebron", 34},
        {"doncic", 26},
        {"antetokounmpo", 30},
        {"durant", 36},
        {"wembanyama", 21},
    }
    sumAge := ReduceSlice[Person, int](&people, func(prev int, curr Person) int {
        return prev + curr.Age
    }, 0)
    fmt.Println(sumAge)
}</code>
    </pre>
    <p>
    maka kedua tipe generic tersebut bisa kita didefinisikan
    </p>
    </ol>
    <h3>keuntungan dan tantangan penggunaan generic</h3>
    <h5>keuntungan</h5>
    <ul>
    <li><b>kode lebih bersih :</b> ga perlu nulis fungsi yang sama untuk tipe yang berbeda</li>
    <li><b>reusable code :</b> 1 fungsi atau struct bisa dipake untuk berbagai tipe data</li>
    <li><b>type safety :</b> tetap mengimplementasikan type safety walaupun kode yang ditulis dinamis</li>
    </ul>
    <h5>tantangan</h5>
    <ul>
    <li><b>kompleksitas :</b> tingkat kompleksitas meningkat, sehingga membuat kita perlu effort lebih untuk memahami kode</li>
    <li><b>tidak selalu diperlukan :</b> ga semua case perlu generic, jika kode yang ditulis memang sederhana mungkin belum diperlukan penggunaannya</li>
    </ul>
    <h3>kesimpulan</h3>
    <p>
    generic merupakan fitur yang cukup powerful jika kita menggunakannya di situasi yang tepat, membuat kode yang kita tulis lebih fleksible dan reusable. dengan memahami cara kerja dan best practice nya kita bisa meningkatkan kualitas kode kita, recommended banget si penggunaanya biar tetep type safety.
    </p>
    <br>
    <p>
    kalo berhasil sampe sini, thanks banget udah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat
    </p>
    </article>
    `,
    tags: ['golang', 'generic'],
    publishedAt: new Date('2025-03-09 08:30:00+07:00'),
    createdAt: new Date('2025-03-09 19:20:46+07:00'),
    updatedAt: new Date('2025-03-09 19:20:46+07:00'),
    referenceURLs: [
      'https://go.dev/doc/tutorial/generics',
      'https://dasarpemrogramangolang.novalagung.com/A-golang-generics.html',
    ],
  },
  {
    id: '5826cad7-ed5c-4dcb-baa9-3d9b7675f9fb',
    title: 'Optimasi React/Next JS pakai useMemo dan useCallback',
    slug: 'optimasi-react-next-js-pakai-use-memo-dan-use-callback',
    featureImageId: '4d4a2fd2-7fb0-4d1f-b59e-4e2fdf5ba518',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    yoo, long time no see, nyoba bahas sesuatu tentang frontend kali yak, yang ringan-ringan aja. pas kita bikin web pake react/next js, selain bikin tampilannya sesama mungkin dengan design ui/ux (kalo ada), hal yang juga perlu kita perhatiin itu adalah <b>optimasi life cycle komponen-komponennya</b>, seperti yang kita tau tiap ada perubahan state di suatu komponen pasti akan dilakukan re-render komponen tersebut dengan state-state terbarunya, nah kalo kita kebanyakan re-render yang ga perlu bisa aja nurunin performa aplikasi yang kita bangun.
    </p>
    <p>
    buat ngatasin masalah itu, react nyediain 2 hook yang menurut saya sangat berguna yang bisa kita pake, yaitu <code>useMemo</code> dan <code>useCallback</code>, mungkin sekilas ga keliatan perbedaannya, kita coba bahas tipis-tipis dah, gass.
    </p>
    <h3>problem performa di react/next js</h3>
    <p>
    re-rendering bisa jadi tantangan dalam pengembangan aplikasi react based, beberapa masalah yang bisa muncul
    </p>
    <ul>
    <li>penggunaan memori yang ga efisien</li>
    <p>
    kalo kita tidak memperhatikan re-render di aplikasi, memori client atau browser pengguna bisa naik tinggi, trus untuk pengguna yang device nya cukup kentang jadi berasa banget tuh
    </p>
    <li>waktu rendering bertambah</li>
    <p>
    yaa nambah lama dikit aja mungkin, tapi tetep aja ngaruh, kalo bisa lebih kenceng kenapa engga kaaann
    </p>
    </ul>
    <h3>perbedaan keduanya</h3>
    <p>
    definisinya sendiri ini lumayan mirip-mirip si, based on dokumentasi nya <code>useMemo</code> merupakan hooks yang bisa kita pake untuk cache suatu <b>value</b> hasil dari perhitungan/fungsi sedangkan <code>useCallback</code> bisa kita pake untuk cache <b>deklarasi</b> fungsi saat re-render.
    </p>
    <h3>apatu useMemo?</h3>
    <p>
    <code>useMemo</code> kurang lebih hook yang dipake buat memoisasi hasil perhitungan yang cukup berat, bakal ada dependensi state yang bisa diatur, jadi perhitungannya bakal dilakukan ulang kalo salah satu state yang ada di dependensi berubah.
    </p>
    <pre>
    <code class="language-typescript">const memoizedValue = useMemo(() => {
  return calculation(a, b);
}, [a, b]);</code>
    </pre>
    <h3>kapan make useMemo?</h3>
    <p>
    saat kita punya suatu perhitungan yang berat, agar tidak selalu melakukan perhitungan saat re-render component. pada contoh di atas, fungsi <code>calculation</code> hanya akan dieksekusi ketika ada salah satu antara state a atau b yang berubah.
    </p>
    <h3>contoh implementasi useMemo</h3>
    <h5>ga pake useMemo</h5>
    <pre>
    <code class="language-typescript">'use client'
import { useState } from "react";

export const WithoutUseMemo = ({ 
  users
} : {
  users: {
    name: string,
    isActive: boolean,
  }[]
}) => {
  const [activeStatus] = useState(true);

  const filteredUsers = users.reduce<string[]>((prev, curr) => {
    if (curr.isActive === activeStatus) return [...prev, curr.name];
    return prev;
  }, []); // akan selalu dieksekusi saat re-render

  return <div>{filteredUsers.join(', ')}</div>;
}</code>
    </pre>
    <p>
    kalau kita liat, state <code>filteredUsers</code> tersebut akan selalu dieksekusi saat re-render dilakukan, padahal setelah itu value dari state <code>filteredUsers</code> tetep sama karena memang tidak ada perubahan value di dalam fungsi filternya namun secara state berubah (kondisi ini yang ingin kita hindari).
    </p>
    <h5>pake useMemo</h5>
    <pre>
    <code class="language-typescript">'use client';

import { useMemo, useState } from 'react';

export const WithUseMemo = ({
  users,
}: {
  users: {
    name: string;
    isActive: boolean;
  }[];
}) => {
  const [activeStatus] = useState(true);

  const filteredUsers = useMemo(
    () =>
      users.reduce<string[]>((prev, curr) => {
        if (curr.isActive === activeStatus) return [...prev, curr.name];
        return prev;
      }, []),
    [users, activeStatus]
  );

  return <div>{filteredUsers.join(', ')}</div>;
}</code>
    </pre>
    <p>
    nah kalo kita implement <code>useMemo</code>, filter nya akan dieksekusi kalau ada perubahan dari state dependensi nya, yaitu state <code>users</code> dan <code>activeStatus</code>
    </p>
    <h3>apatu useCallback?</h3>
    <p>
    <code>useCallback</code> mirip seperti <code>useMemo</code>, tapi ini kali ini yang dimemoisasi adalah deklarasi fungsinya. sama kayak hook sebelumnya bakal ada dependensi state yang bisa diatur, jadi deklarasi fungsinya cuma dilakukan ulang kalo salah satu state yang ada di dependensi berubah
    </p>
    <pre>
    <code class="language-typescript">const memoizedCallback = useCallback(() => {
  console.log({ a, b });
}, [a, b]);</code>
    </pre>
    <h3>kapan make useCallback</h3>
    <p>
    secara sederhana kita perlu pakai <code>useCallback</code> kalau kita deklarasi suatu fungsi di dalam client component agar deklarasi fungsi tidak dilakukan berulang kali
    </p>
    <h3>contoh implementasi useCallback</h3>
    <h5>ga pake useCallback</h5>
    <pre>
    <code class="language-typescript">'use client';

import { useState } from 'react';

export const WithoutUseCallback = () => {
  const [activeStatus, setActiveStatus] = useState(true);

  const handleToggle = () => {
    setActiveStatus((value) => !value);
  }; // akan selalu dideklarasi saat re-render

  return (
    &lt;div&gt;
      &lt;div&gt;{activeStatus}&lt;/div&gt;
      &lt;button onClick={handleToggle}&gt;Toggle Active Status&lt;/button&gt;
    &lt;/div&gt;
  );
}</code>
    </pre>
    <p>
    kalo kita liat, fungsi <code>handleToggle</code> akan selalu dideklarasi ulang ketika re-render
    </p>
    <h5>pake useCallback</h5>
    <pre>
    <code class="language-typescript">'use client';

import { useCallback, useState } from 'react';

export const WithUseCallback = () => {
  const [activeStatus, setActiveStatus] = useState(true);

  const handleToggle = useCallback(() => {
    setActiveStatus((value) => !value);
  }, []);

  return (
    &lt;div&gt;
      &lt;div&gt;{activeStatus}&lt;/div&gt;
      &lt;button onClick={handleToggle}&gt;Toggle Active Status&lt;/button&gt;
    &lt;/div&gt;
  );
}</code>
    </pre>
    <p>
    nah kalo kita implement <code>useCallback</code>, fungsinya akan dideklarasi ulang kalau ada perubahan dari state dependensi nya, kebetulan karena dependensinya kosong berarti artinya fungsi tersebut gaakan dideklarasi ulang kecuali ada refresh aplikasi
    </p>
    <h3>eslint 'react-hooks/exhaustive-deps'</h3>
    <p>
    oke setelah kita tau apa itu <code>useMemo</code> dan <code>useCallback</code>, ini ada config eslint yang sekiranya bisa ngebantu kita saat nentuin dependensi di kedua hooks tersebut, yaitu config <code>react-hooks/exahustive-deps</code>.
    </p>
    <p>
    config ini termasuk di dalam package <code>eslint-plugin-react-hooks</code>, sangat direkomendasikan pakai plugin eslint ini guna mempermudah proses development aplikasi react/next js kita.
    </p>
    <h3>kesimpulan</h3>
    <p>
    udah si gitu aja sebenernya penggunaan <code>useMemo</code> dan <code>useCallback</code>, sekilas kalo hanya ada 1 case di aplikasi kita yang tidak optimize mungkin engga terlalu berasa, tapi kalo di semua komponen jadi cukup mengganggu performa aplikasi.
    </p>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['reactjs', 'nextjs', 'optimize'],
    publishedAt: new Date('2025-02-10 08:30:00+07:00'),
    createdAt: new Date('2025-02-10 08:30:00+07:00'),
    updatedAt: new Date('2025-02-10 08:30:00+07:00'),
    referenceURLs: [
      'https://react.dev/reference/react/useMemo',
      'https://react.dev/reference/react/useCallback',
    ],
  },
  {
    id: '6f41a0f6-d239-44f7-85d6-3fc28976d5e6',
    title: 'SQL Aggregations',
    slug: 'sql-aggregations',
    featureImageId: '53a3d049-2147-41c2-8f3c-2329c9aff761',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <br>
    <p>
    abis libur panjang biar refresh pikirannya kita bahas sedikit mengenai sql database (no-sql minggir dulu, canda), harusnya ini udah jadi makanan sehari-hari buat backend dev apalagi data engineer/analis si, tapi gapapa kalo udah ngerasa khatam sql boleh di-skip aja kalo mau lanjut juga boleh, siapa tau dapet insight baru ya kan. 
    </p>
    <p>
    saya juga mungkin terkadang masih ada sedikit error ketika nulis query sql (udah nyaman pake orm hehe), entah apapun itu, tapi yaa harusnya tetep bisa disolve dari informasi error execution databasenya.
    </p>
    <h3>definisi</h3>
    <p>
    buat yang bingung, sql (structured query language) itu kurang lebih bahasa yang dipake untuk ngelola dan manipulasi data di dalam database relational (mysql, postgresql, mssql, oracle, dkk). nah salah satu fitur yang ada di sql itu ada <b>sql aggregations</b>, dimana kita bisa ngelakuin aggregasi pada beberapa data yang ada, seperti menghitung total nilai, rata-rata, dll. ini jadi penting dalam konteks data ketika kita butuh analisis terhadap data yang kita punya, atau pembuatan laporan dalam periode tertentu, kurang lebih seperti ringkasan informasi dari seluruh data secara efisien dan akurat.
    </p>
    <p>
    nah di kesempatan kali ini, saya mau bahas 5 fungsi yang menurut saya sering digunakan di <b>sql aggregations</b> yaitu <code>count()</code>, <code>sum()</code>, <code>avg()</code>, <code>max()</code> dan <code>min()</code>, yang mana masing-masing fungsi punya peran penting dalam ngerangkum dan nganalisis data di banyak case.
    </p>
    <p>
    jadi walaupun sekarang orm (object relational mapping) udah bertebaran dimana-mana dan sangat memudahkan kita dalam mengakses data dari database, tapi biasanya ada hal-hal tertentu yang rumit pastinya namun orm tersebut belum provide secara fitur, makanya disediakan fungsi <b>raw query</b> buat nulis query sql nya sendiri. cuma yaa pas mapping hasil query nya ke aplikasi backend nya agak repot si, karna kudu dimapping satu-satu, belum lagi kalau nama field kita di database pake snake_case tapi nama variable/property di backend kita pake camelCase.
    </p>
    <h3>implementasi</h3>
    <p>
    oke sebelum kita bahas, enaknya kita siapin dulu data dummy yang bisa kita pake buat dieksekusi sama query-query nya, kita buat aja misal table product yang punya 50 data dan order_detail yang punya 20 data.
    </p>
    <h6 style="text-align: center">table product (<a href="/codes/product.sql" target="_blank">product.sql</a>)</h6>
    <table>
    <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>price</th>
      <th>category</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Pulpen</td>
      <td>3000</td>
      <td>Alat Tulis</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Buku Tulis</td>
      <td>15000</td>
      <td>Alat Tulis</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Penggaris</td>
      <td>7000</td>
      <td>Alat Tulis</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Kopi Susu</td>
      <td>20000</td>
      <td>Minuman</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Celana Pendek</td>
      <td>30000</td>
      <td><code>NULL</code></td>
    </tr>
    <tr>
      <td>50</td>
      <td>Celana Panjang</td>
      <td>90000</td>
      <td><code>NULL</code></td>
    </tr>
    </tbody>
    </table>
    <h6 style="text-align: center">table order_detail (<a href="/codes/order_detail.sql" target="_blank">order_detail.sql</a>)</h6>
    <table>
    <thead>
    <tr>
      <th>id</th>
      <th>order_id</th>
      <th>product_id</th>
      <th>quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
      <td>5</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>1</td>
      <td>10</td>
      <td>3</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>18</td>
      <td>9</td>
      <td>21</td>
      <td>3</td>
    </tr>
    <tr>
      <td>19</td>
      <td>9</td>
      <td>25</td>
      <td>1</td>
    </tr>
    <tr>
      <td>20</td>
      <td>10</td>
      <td>33</td>
      <td>2</td>
    </tr>
    </tbody>
    </table>
    <ol>
    <li><code>count()</code></li>
    <p>
    gunanya buat ngitung jumlah baris/record selain <code>NULL</code> yang ada di dalam table atau dari hasil query yang kita jalankan, misal jika kita tulis query seperti di bawah ini
    </p>
    <pre>
    <code class="language-sql">SELECT count(*) FROM product;</code>
    </pre>
    <p>
    maka hasil query tersebut adalah 1 baris record dengan nama field "count(*)” dengan nilai jumlah baris di table product, untuk case kita kali ini nilai nya 50.
    </p>
    <p>
    di dalem tanda kurung ada tanda <code>*</code> maksudnya apa tu? itu maksudnya adalah data yang dihitung adalah data seluruh field/kolom yang ada di table product, apa bedanya sama <code>count(product.id)</code>, outputnya sama tapi dalam eksekusinya yang dihitung hanya kolom <code>id</code> saja, saya lebih prefer yang pakai <code>product.id</code>, karena id tidak mungkin <code>NULL</code> jadi bisa mewakili keseluruhan baris saat proses menghitung jumlah baris dan jadi lebih efisien.
    </p>
    <p>
    sekarang kita coba <code>count(product.category)</code>
    </p>
    <pre>
    <code class="language-sql">SELECT count(product.category) FROM product</code>
    </pre>
    <p>
    outputnya sekarang berbeda, sekarang hasil perhitungannya adalah <code>48</code>, kenapa bisa hasilnya bukan <code>50</code>, karena di data kita ada 2 data yang kolom <code>category</code> nya bernilai <code>NULL</code> yakni di data dengan id 49 dan 50, jika nilai dari kolomnya adalah <code>NULL</code>, maka data tersebut tidak diikutsertakan dalam penghitungan.
    </p>
    <li><code>sum()</code></li>
    <p>
    gunanya buat ngejumlahin nilai dari kolom yang tipe nya <code>number</code>, pada contoh table product, ada 1 kolom yang tipe nya <code>int</code> (bagian dari number) yaitu kolom <code>price</code> atau harga barang.
    </p>
    <pre>
    <code class="language-sql">SELECT sum(product.price) FROM product</code>
    </pre>
    <p>
    maka hasilnya adalah <code>983000</code>, tapi kayaknya query itu bakal jarang diexecute karena ngapain juga ya kan ngambil total harga seluruh produk
    </p>
    <p>
    kita coba kombinasiin sama table order_detail biar lebih menarik, misal kita perlu informasi <b>"total harga dari setiap order yang ada"</b>, jika kita perhatiin di table order_detail ada kolom <code>order_id</code>, <code>product_id</code>, dan <code>quantity</code>, flow nya adalah 
    </p>
    <ul>
    <li>kita cari tau dulu harga akhir di tiap produk nya yaitu kalikan harga produk dengan quantity</li>
    <li>kita gunakan sum dengan parameter hasil dari perhitungan sebelumnya</li>
    <li>lalu kita group dengan <code>order_id</code></li>
    </ul>
    <p>
    maka query yang perlu kita jalankan adalah
    </p>
    <pre>
    <code class="language-sql">SELECT 
  order_detail.order_id,
  sum(product.price * order_detail.quantity) AS amount
FROM order_detail
INNER JOIN product
ON order_detail.product_id = product.id
GROUP BY order_detail.order_id</code>
    </pre>
    <p>
    outputnya sebagai berikut
    </p>
    <table>
    <thead>
    <tr>
      <th>order_id</th>
      <th>amount</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>278000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>20000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>55000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>60000</td>
    </tr>
    <tr>
      <td>5</td>
      <td>57000</td>
    </tr>
    <tr>
      <td>6</td>
      <td>130000</td>
    </tr>
    <tr>
      <td>7</td>
      <td>122000</td>
    </tr>
    <tr>
      <td>8</td>
      <td>20000</td>
    </tr>
    <tr>
      <td>9</td>
      <td>105000</td>
    </tr>
    <tr>
      <td>10</td>
      <td>120000</td>
    </tr>
    </tbody>
    </table>
    <li><code>avg()</code></li>
    <p>
    oke selanjutnya fungsi <code>avg()</code>, sesuai namanya ini gunanya buat ngitung average atau rata-rata dari data dengan tipe data <code>number</code> juga. misalkan dari table product kita mau dapet informasi rata-rata harga seluruh barang, maka query yang perlu kita tulis adalah:
    </p>
    <pre>
    <code class="language-sql">SELECT avg(product.price) FROM product </code>
    </pre>
    <p>
    maka kita dapet rata-rata harga dari seluruh produk yang ada adalah <code>19660</code>
    </p>
    <li><code>max()</code> dan <code>min()</code></li>
    <p>
    terakhir ini saya gabungin, karena fungsi nya berkebalikan satu sama lain, misal kita perlu mengambil harga produk termahal dan termurah maka kita bisa pake fungsi ini
    </p>
    <pre>
    <code class="language-sql">SELECT max(product.price), min(product.price) FROM product</code>
    </pre>
    <p>
    outputnya adalah
    </p>
    <table>
    <thead>
    <tr>
      <th>max(product.price)</th>
      <th>min(product.price)</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>90000</td>
      <td>2000</td>
    </tr>
    </tbody>
    </table>
    </ol>
    <h3>condition</h3>
    <p>
    oke kalu kita pake aggregations dan mau perlu ada condition nya di hasil aggregasi nya, kita gabisa pake keyword <code>WHERE</code> ni, tapi kita pake keyword <code>HAVING</code>. misalkan dari contoh query sum yang kedua kita mau tambahin kondisi yang <code>amount</code> nya di atas <code>100000</code> maka kita bisa pakai <code>HAVING</code>
    </p>
    <pre>
    <code class="language-sql">SELECT 
  order_detail.order_id,
  sum(product.price * order_detail.quantity) AS amount
FROM order_detail
INNER JOIN product
ON order_detail.product_id = product.id
GROUP BY order_detail.order_id
HAVING amount > 100000</code>
    </pre>
    <table>
    <thead>
    <tr>
      <th>order_id</th>
      <th>amount</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>278000</td>
    </tr>
    <tr>
      <td>6</td>
      <td>130000</td>
    </tr>
    <tr>
      <td>7</td>
      <td>122000</td>
    </tr>
    <tr>
      <td>9</td>
      <td>105000</td>
    </tr>
    <tr>
      <td>10</td>
      <td>120000</td>
    </tr>
    </tbody>
    </table>
    <h3>penutup</h3>
    <p>
    itu dia 5 tungsi yang sering digunain, sangat ngebantu pas butuh informasi ringkasan apalagi biasanya kalau aplikasinya ada dashboard pasti gunain fungsi aggregasi ini. perlu diinget kalau ada kebutuhan terkait aggregasi sebisa mungkin hindari aggregasi di aplikasi backend selama masih bisa dihandle di query sql biar lebih efisien.
    </p>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['sql', 'database'],
    publishedAt: new Date('2024-09-15 09:00:00+07:00'),
    createdAt: new Date('2024-09-15 09:00:00+07:00'),
    updatedAt: new Date('2024-09-15 09:00:00+07:00'),
    referenceURLs: [],
  },
  {
    id: '9256ea62-0c70-4738-abaf-af835cac0950',
    title: 'Faker JS Buat Bikin Data Dummy Makin Natural',
    slug: 'faker-js-buat-bikin-data-dummy-makin-natural',
    featureImageId: 'e8d1ce4e-47dc-484d-86fc-7812367e09cb',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    how was your life lately guys? (inspired by someone), semoga di akhir bulan agustus ini kita semua dipenuhi dengan kebaikan dan keberkahan, aamiin. kali ini saya mau bahas hal yang impact nya mungkin ga terlalu signifikan terhadap pengembangan suatu project (yang sebelumnya juga ga terlalu si), tapi bisa membuat aplikasi kita terlihat dan tervisualisasi lebih jelas saat digunakan oleh banyak user nantinya, apalagi kalo bukan <strong>faker js</strong>
    <p>
    <h3>apa itu faker js?</h3>
    <p>
    faker js merupakan sebuah library javascript yang memungkinkan kita untuk menghasilkan data palsu atau data dummy dengan cepat dan mudah. data ini bisa mencakup berbagai jenis informasi seperti nama, alamat, nomor telepon, email, dan masih banyak lagi
    </p>
    <h3>kenapa perlu data dummy?</h3>
    <p>
    saat pengembangan aplikasi, seringkali kita membutuhkan data dummy untuk berbagai keperluan seperti:
    </p>
    <ol>
    <li><strong>testing fungsi</strong></li>
    <p>
    kita harus memastikan bahwa fitur seperti <strong>pagination</strong> perlu dicek apakah data yang tampil sudah sesuai dengan halamannya, lalu ada fitur <strong>searching</strong> atau <strong>filtering</strong> yang perlu dipastikan apakah data sudah tersaring sesuai dengan <code>query</code> searchnya dan filternya, kemudian ada fitur <strong>sorting</strong> yang juga perlu dipastikan apakah data sudah terurutkan dengan benar.
    </p>
    <li><strong>testing performance atau beban</strong></li>
    <p>
    tentunya kita tidak ingin aplikasi kita berjalan lambat dan sempurna, maka dari itu kita perlu simulasikan saat aplikasi kita menghandle data yang banyak, karena bisa saja terjadi aplikasi mengalami masalah ketika menghandle data yang banyak. biasanya perlu dicek apakah <code>query find all</code> kita mengandun <strong>N+1 problem</strong> atau tidak, karena jika iya maka performa aplikasi akan menjadi lamban.
    </p>
    <li><strong>pengembangan frontend</strong></li>
    <p>
    saat membuat user interface (UI), data dummy digunakan untuk melihat bagaimana tampilan dan fungsionalitas aplikasi bekerja dengan data nyata. ini penting untuk memastikan ui/ux yang baik dan sangat membantu frontend memastikan apakah fitur sudah sesuai seperti yang diinginkan.
    </p>
    </ol>
    <h3>manfaat faker js</h3>
    <p>
    menggunakan <strong>faker js</strong> dalam pengembangan dan pengujian aplikasi memiliki beberapa manfaat yaitu:
    </p>
    <ul>
    <li><strong>variatif dan natural</strong></li>
    <p>
    <strong>faker js</strong> dapat menghasilkan data yang sangat bervariasi dan realistis, yang membantu dalam menciptakan skenario pengujian yang lebih mendekati kondisi dunia nyata
    </p>
    <li><strong>hemat waktu dan effort</strong></li>
    <p>
    pastinya akan sangat melelahkan jika kita membuat data dummy secara manual, dengan <strong>faker js</strong> pembuatan data dummy semakin cepat dan mudah.
    </p>
    <li><strong>skalabilitas</strong></li>
    <p>
    kita dapat menghasilkan sejumlah besar data dengan <strong>faker js</strong>, yang sangat berguna untuk pengujian beban dan performance.
    </p>
    </ul>
    <h3>penggunaan faker js untuk data pengguna</h3>
    <p>
    untuk menggunakan <strong>faker js</strong>, pertama-tama kita perlu menginstalnya dalam project. kita bisa gunakan <code>npm</code> (node package manager) atau <code>yarn</code>.
    </p>
    <pre>
    <code class="language-bash">npm install -D @faker-js/faker

yarn add -D @faker-js/faker</code>
    </pre>
    <p>
    selanjutnya kita dapat meng-<code>import</code> package tersebut ke seeder kita, <strong>faker js</strong> menyediakan beberapa data <code>locale</code> atau terjemahan, agar lebih realistis kita bisa gunakan locale <code>ID</code> untuk bahasa
    </p>
    <pre>
    <code class="language-typescript">import { faker } from "@faker-js/faker/locale/id_ID";

const names: string[] = [];
for (let i = 0; i < 10; i++) {
  const name = faker.person.fullName();
  names.push(name);
}
console.log(names);</code>
    </pre>
    <p>
    maka akan men-generate 10 nama secara acak
    </p>
    <img src="/blog/10-names.jpg" class="img-md" title="10 nama">
    <p>
    namun kalau kita perhatikan ada sedikit anomali alias <strong style="color: red">bug</strong> yaitu nama depan yang berulang, namun dari yang saya sudah telusuri hanya terjadi kalau kita pakai <strong>faker js</strong> yang bahasa indonesia, maka dari itu kita perlu sedikit memanipulasi agar sempurna menjadi
    </p>
    <pre>
    <code class="language-typescript">const names: string[] = [];
for (let i = 0; i < 10; i++) {
  const name = faker.person.fullName();
  const updatedName =
    name.split(' ')[0] === name.split(' ')[1]
      ? name.split(' ').slice(1).join(' ')
      : name;
  names.push({ name, updatedName });
}
console.table(names);</code>
    </pre>
    <p>
    akhirnya semua nama depan yang berulang sudah ditangani
    </p>
    <img src="/blog/10-names-fix.jpg" class="img-md" title="10 nama fix">
    <p>
    masih banyak lagi untuk generate data-data lainnya seperti alamat, email, nomor telepon
    </p>
    <pre>
    <code class="language-typescript">const city = faker.location.city();
const address = faker.location.streetAddress();
const email = faker.internet.email();
const phoneNumber = faker.phone.number();
console.log({ city, address, email, phoneNumber });</code>
    </pre>
    <p>
    output
    </p>
    <img src="/blog/other-function-in-user.jpg" class="img-md" title="fungsi lainnya">
    <br>
    <p>
    nah dari fungsi-fungsi tersebut, kita bisa buat data-data palsu untuk data <strong>pengguna</strong> untuk keperluan development dan testing.
    </p>
    <pre>
    <code class="language-typescript">const users: {
  name: string;
  email: string;
  city: string;
  phoneNumber: string;
}[] = [];
for (let i = 0; i < 10; i++) {
  const name = faker.person.fullName();
  const updatedName =
    name.split(" ")[0] === name.split(" ")[1]
      ? name.split(" ").slice(1).join(" ")
      : name;
  const email = faker.internet.email({
    firstName: updatedName.split(" ")[0],
    lastName: updatedName.split(" ")[1],
  });
  const city = faker.location.city();
  const phoneNumber = faker.phone.number();
  users.push({ name: updatedName, email, city, phoneNumber });
}
console.table(users);</code>
    </pre>
    <p>
    output
    </p>
    <img src="/blog/10-data-users.jpg" class="img-lg" title="10 data pengguna">
    <p>
    oke kita berhasil ngebuat 10 data pengguna yang siap kita inject ke database <strong>DEVELOPMENT</strong> kita, inget database <strong>DEVELOPMENT</strong> yak, jangan ke database <strong style="color: red">production</strong>. Tinggal kita kombinasiin sama seeder kita dan jadilah data-data itu sudah siap kita pakai.
    </p>
    <h3>penggunaan untuk hal-hal lain</h3>
    <ol>
    <li><strong>Internet</strong></li>
    <pre>
    <code class="language-typescript">console.log(faker.internet.userName()); 
// Contoh: 'Jasmin_Gleichner'

console.log(faker.internet.password());
// Contoh: '0rAefpo74OPPMcV'

console.log(faker.internet.url()); 
// Contoh: 'https://weird-boulevard.id/'</code>
    </pre>
    <p>
    untuk <code>password</code> biasanya saya buat statis si, yang mudah diingat seperti <code>Qwerty123</code>, karena biasanya untuk testing fitur autentikasi juga seperti login di beberapa pengguna yang memiliki role berbeda, cukup capek untuk mengingat ketika kita buat <code>password</code> yang berbeda saat proses pengembangan
    </p>
    <li><strong>Perusahaan (Company)</strong></li>
    <p>
    <code>faker.company.name()</code> untuk menghasilkan nama perusahaan acak dan <code>faker.company.catchPhrase()</code> untuk menghasilkan slogan perusahaan acak
    </p>
    <pre>
    <code class="language-typescript">console.log(faker.company.name()); 
// Contoh: 'PT Hudson'

console.log(faker.company.catchPhrase()); 
// Contoh: 'Organic client-server intranet'</code>
    </pre>
    <li><strong>Tanggal</strong></li>
    <p>
    <code>faker.date.past()</code> untuk menghasilkan tanggal di masa lalu, <code>faker.date.future()</code> untuk menghasilkan tanggal di masa depan dan <code>faker.date.recent()</code> untuk menghasilkan tanggal baru-baru ini.
    </p>
    <pre>
    <code class="language-typescript">console.log(faker.date.past()); 
// Contoh: '2023-11-01T00:47:37.003Z'

console.log(faker.date.future()); 
// Contoh: '2025-01-06T16:30:29.760Z'

console.log(faker.date.recent()); 
// Contoh: '2024-08-24T01:15:43.313Z'</code>
    </pre>
    <li><strong>Finance</strong></li>
    <p>
    <code>faker.finance.amount()</code> untuk menghasilkan jumlah uang acak, <code>faker.finance.accountNumber()</code> untuk menghasilkan nomor akun acak dan <code>faker.finance.currencyCode()</code> untuk menghasilkan kode mata uang acak
    </p>
    <pre>
    <code class="language-typescript">console.log(faker.finance.amount()); 
// Contoh: '519.07'

console.log(faker.finance.accountNumber()); 
// Contoh: '53731418'

console.log(faker.finance.currencyCode()); 
// Contoh: 'HKD'</code>
    </pre>
    <li><strong>Commerce</strong></li>
    <p>
    <code>faker.commerce.productName()</code> untuk menghasilkan nama produk acak, <code>faker.commerce.price()</code> untuk menghasilkan harga produk acak dan <code>faker.commerce.productDescription()</code> untuk menghasilkan deskripsi produk acak
    </p>
    <pre>
    <code class="language-typescript">console.log(faker.commerce.productName()); 
// Contoh: 'Small Wooden Hat'

console.log(faker.commerce.productDescription()); 
// Contoh: 'Small Wooden Hat'

console.log(faker.commerce.price()); 
// Contoh: '99.00'</code>
    </pre>
    <li><strong>Image</strong></li>
    <p>
    <code>faker.image.url()</code> untuk menghasilkan URL gambar acak dan <code>faker.image.avatar()</code> untuk menghasilkan URL gambar avatar acak
    </p>
    <pre>
    <code class="language-typescript">console.log(faker.image.url()); 
// Contoh: 'https://picsum.photos/seed/H1Xtul/640/480'

console.log(faker.image.avatar()); 
// Contoh: 'https://avatars.githubusercontent.com/u/74441702'</code>
    </pre>
    <li><strong>Lorem Ipsum (Teks Acak)</strong></li>
    <p>
    <code>faker.lorem.word()</code> untuk menghasilkan kata acak, <code>faker.lorem.sentence()</code> untuk menghasilkan kalimat acak dan <code>faker.lorem.paragraph()</code> untuk menghasilkan paragraf acak
    </p>
    <pre>
    <code class="language-typescript" style="white-space: pre-wrap">console.log(faker.lorem.word()); 
// Contoh: 'clementia'

console.log(faker.lorem.sentence()); 
// Contoh: 'Adficio cunae ver hic tum tertius caritas quod adulatio textilis.'

console.log(faker.lorem.paragraph()); 
// Contoh: 'Cariosus supplanto desipio volaticus verbera aptus caries verbum caveo defleo. Stultus tumultus dapifer advenio. Quia patria appello bellicus reiciendis patria aperio iusto'</code>
    </pre>
    <li><strong>Helper Function</strong></li>
    <p>
    <code>faker.helpers.arrayElement()</code> untuk menghasilkan nilai acak dari array yang diberikan dan <code>faker.helpers.shuffle()</code> untuk mengacak urutan elemen dalam array
    </p>
    <pre>
    <code class="language-typescript">const roles = ['Super Admin', 'User', 'Editor'];
console.log(faker.helpers.arrayElement(roles)); 
// Contoh: 'User'

console.log(faker.helpers.shuffle(roles)); 
// Contoh: ['User', 'Editor', 'Super Admin']</code>
    </pre>
    </ol>
    <h3>kesimpulan</h3>
    <p>
    <strong>faker.js</strong> adalah solusi yang sangat berguna bagi kita para developer yang perlu data dummy atau palsu untuk testing atau demo. api-nya mudah digunakan dan dukungan untuk berbagai tipe data, kita bisa dengan cepet ngebuat data palsu tanpa kesulitan. perlu dipertimbangin banget si penggunaan <strong>faker.js</strong> saat ngembangin proyek kita.
    </p>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['fakerjs', 'seeder', 'database'],
    publishedAt:
      ENV !== 'production'
        ? new Date('2024-08-25 07:20:00+07:00')
        : new Date('2024-08-26 10:00:00+07:00'),
    createdAt: new Date('2024-08-25 07:20:00+07:00'),
    updatedAt: new Date('2024-08-25 07:20:00+07:00'),
    referenceURLs: ['https://github.com/faker-js/faker'],
  },
  {
    id: 'acb38df5-a3ac-4ff4-b06f-d6ca07287634',
    title: 'Kenalan sama Required, Partial, Pick dan Omit di typescript',
    slug: 'kenalan-sama-required-partial-pick-dan-omit-di-typescript',
    featureImageId: '799ee782-faef-4ac4-a4af-2d2a0870b98e',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    how's your day? is it good? alhamdulillah kalo gitu, abis libur enaknya nulis sesuatu kali ya
    </p>
    <p>
    nah ini mungkin udah banyak yang pake juga, kurang lebih topiknya tentang beberapa utility di typescript yang bisa kita pakai untuk memanipulasi <code>type</code> atau <code>interface</code> yang udah ada. sebenernya masih ada lagi utility-utility lainnya, tapi coba kita fokus ke 4 utility yang saya pribadi mungkin sering gunain di project, yaitu <code>Required</code>, <code>Partial</code>, <code>Pick</code> dan <code>Omit</code>.
    </p>
    <h3>Latar Belakang</h3>
    <p>
    pernah ga si, misal kita udah buat interface atau type gitu yang sudah mendeskripsikan propertinya apakah itu wajib atau opsional, nah ada satu kondisi kita mau buat interface baru dengan properti yang sama tapi dengan ketentuan yang beda-beda tipis aja gitu, daripada kita buat ulang interfacenya, mending kita manipulasi aja interface yang udah ada trus disesuain deh jadi ga perlu ada interface yang redundant atau buang2 baris kode buat deskripsiin interface baru, belom lagi kalau ntar ada perubahan di interface utama nya, kalo redundant jadi perlu ngubah semua.
    </p>
    <h3>Pembahasan</h3>
    <p>
    coba kita bahas satu per satu utilitynya:
    </p>
    <ol>
    <b><li>Required</li></b>
    <p>
    oke yang pertama ini utility <code>Required</code>, dari namanya aja mungkin udah ketebak kegunaan dari utility ini yaitu bakal ngebuat suatu properti di interface menjadi <b>wajib diisi</b> semua walaupun di deskripsiin sebelumnya ada yang opsional, misal kita punya interface <code>User</code> dengan spesifikasi sebagai berikut:
    </p>
    <pre>
    <code class="language-typescript">export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  imageUrl?: string,
  address?: string
}</code>
    </pre>
    <p>
    bisa kita lihat di interface tersebut, properti <code>imageUrl</code> dan <code>address</code> bersifat opsional alias boleh kosong tu, nah cuma somehow kita ada fungsi yang punya parameter object dari <code>User</code> tapi wajib memiliki <code>imageUrl</code> atau <code>address</code>, nah daripada kita deskripsiin interface baru yang sama kayak <code>User</code>, mending kita pake aja utility <code>Required</code> seperti berikut:
    </p>
    <pre>
    <code class="language-typescript">export interface RequiredUser extends Required&lt;User&gt; {}</code>
    </pre>
    <p>
    nah cukup dengan seperti itu kita udah ngebuat properti <code>imageUrl</code> dan <code>address</code> di object <code>RequiredUser</code> menjadi wajib ada, kalau kita comment atau hilangkan properti <code>imageUrl</code> maka akan muncul error seperti berikut dari typescript
    </p>
    <img src="/blog/kenalan-sama-required-partial-pick-dan-omit-1.png" class="img-lg" title="error typescript Pick">
    <b><li>Partial</li></b>
    <p>
    nah selanjutnya ini <code>Partial</code>, kegunaan dari utility ini adalah kebalikan dari <code>Required</code>, yakni memanipulasi suatu interface agar propertinya bersifat opsional semuanya, misal dengan interface <code>User</code> yang sama seperti di atas, kita buat interface baru yakni <code>PartialUser</code> dengan meng-extends interface <code>User</code> dibungkus dengan utility <code>Partial</code>
    </p>
    <pre>
    <code class="language-typescript">export interface PartialUser extends Partial&lt;User&gt; {}</code>
    </pre>
    <p>
    setelah kita buat seperti itu jika kita buat object dengan interface <code>PartialUser</code>, maka kita bisa menghilangkan properti <code>password</code> yang padahal tidak opsional di deskripsi interface <code>User</code>, begitu juga dengan properti yang lainnya jika dibutuhkan untuk dikosongkan
    </p>
    <pre>
    <code class="language-typescript">const partialUser: PartialUser = {
  id: '9e1cdde1-5edb-4133-bf65-1e34ed8204ce',
  name: 'Hamid',
  email: 'hamid@email.com',
  imageUrl: '/assets/image-2.jpg',
  address: 'Jakarta',
};</code>
    </pre>
    <b><li>Pick</li></b>
    <p>
    kegunaan dari utility <code>Pick</code> ini adalah untuk membuat interface baru dengan list properti yang dimasukkan di parameter kedua dipisahkan dengan tanda garis lurus <code>|</code> dengan aturan opsional yang sama, misal dengan interface <code>User</code> yang sama, kita perlu interface untuk <code>Credential</code> authentication, maka kita cukup ambil <code>email</code> dan <code>password</code> dari <code>User</code> seperti berikut
    </p>
    <pre>
    <code class="language-typescript">export interface Credential extends Pick&lt;User, 'email' | 'password'&gt; {}</code>
    </pre>
    <p>
    maka kita bisa buat object <code>credential</code> dengan interface <code>Credential</code> yang hanya memiliki properti <code>email</code> dan <code>password</code>
    </p>
    <pre>
    <code class="language-typescript">const credential: Credential = {
  email: 'abdul@email.com',
  password: 'Qwerty123',
};</code>
    </pre>
    <b><li>Omit</li></b>
    <p>
    utility ini kebalikannya dari <code>Pick</code>, dimana list properti di parameter kedua adalah properti yang dihilangkan dari interface, misal kita mau ambil semua properti dari interface <code>User</code> kecuali <code>password</code>, kalau kita gunakan <code>Pick</code> juga bisa, tapi list properti yang ada di parameter kedua akan panjang, agar lebih singkat kita bisa gunakan <code>Omit</code> seperti berikut
    </p>
    <pre>
    <code class="language-typescript">export interface UserProfile extends Omit&lt;User, 'password'&gt; {}</code>
    </pre>
    <p>
    dengan begitu, interface <code>UserProfile</code> tidak lagi memiliki properti <code>password</code> karena mungkin memang <code>password</code> tidak ditampilkan di halaman profile, jika kita menambahkan properti <code>password</code> maka akan error seperti berikut
    </p>
    <img src="/blog/kenalan-sama-required-partial-pick-dan-omit-2.png" class="img-lg" title="error typescript Omit" />
    </ol>
    <h3>Kesimpulan</h3>
    <p>
    dari utility-utility di atas kita masih dapat mengkreasikannya dengan menggabungkannya satu sama lain menyesuaikan kebutuh type di project masing-masing, jadi lebih efisien lagi dalam penulisan type di kodingan kita. 
    <p>
    penggunaannya sangat direkomendasikan dibanding menulis semua interface satu per satu, selain <b>lebih singkat</b>, kita juga jadi <b>lebih mudah ketika ada perubahan</b> serta kodingan kita menjadi <b>lebih konsisten</b> sehingga lebih mudah dipahami oleh developer lain ketika join ke dalam project yang sedang kita kerjakan atau <b>dibaca kembali</b> oleh kita di kemudian hari.
    </p>
    <p>
    itu aja buat kali ini, masih banyak utility-utility lainnya yang dapat mepermudah kita, mungkin kalau ada waktu bisa kita bahas next time.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['typescript', 'required', 'partial', 'pick', 'omit'],
    publishedAt:
      ENV !== 'production'
        ? new Date('2024-06-18 20:00:00+07:00')
        : new Date('2024-06-19 10:00:00+07:00'),
    createdAt: new Date('2024-06-18 21:48:46+07:00'),
    updatedAt: new Date('2024-06-18 21:48:46+07:00'),
  },
  {
    id: '58c93c2d-edf5-4728-b229-fa38af396251',
    title: 'Bahas Pointers',
    slug: 'bahas-pointers',
    featureImageId: 'f1fe4ba8-5eed-4f3a-8236-00716ddc1e0c',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    halo minal aidin wal faidzin semuaaaa.... mohon maaf lahir batin 🙏🏽, buat pemanasan abis libur lama, ada sesuatu yang cukup penting di dunia pengkodingan, pertama kali denger kata ini pas kuliah semester 1 di matkul dasar-dasar pemrograman, yaitu <b>pointers</b>, mungkin dosennya udah nerangin dengan cukup jelas, tapi namanya baru lulus sma, for loop aja masih muter-muter (ya bener), akhirnya di-skip aja dulu soal mahamin gimana itu cara kerjanya. awalnya, pas belom ngerti agak bingung ini gunanya buat apa? kenapa harus dipake? kalo ga dipake apakah bakal error? tapi begitu udah ngeh, jadinya bermanfaat banget buat efisiensi saat membuat program atau aplikasi.
    </p>
    <p>
    penerapan pointer di beberapa bahasa ada yang udah otomatis (karena lebih mengedepankan simplicity) dan ada yang manual (kita bisa atur pointer nya), jadi tergantung kita lagi pakai bahasa pemrograman apa. contoh bahasa yang otomatis itu ada php, javascript, python, dll. lalu kalau yang manual itu ada c++, golang, java, dll. di java penyebutannya itu reference, ada perbedaan tapi secara konsep mirip dengan pointers.
    </p>
    <blockquote>
    pointers merupakan suatu penyimpanan yang tidak menyimpan suatu nilai secara langsung, melainkan menyimpan alamat memori dari variabel lain.
    </blockquote>
    <img src="/blog/1713364910.jpg" class="img-md" title="ilustrasi pointers">
    <p>
    contoh sederhana, misalkan kita punya variabel <code>name</code> yang menyimpan nilai <code>"john doe"</code>, maka kita bisa membuat variabel baru yang menyimpan alamat memori dari variabel <code>name</code> tersebut.
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"

func main(){
  var name string = "john doe"
  var pointers *string = &name
  fmt.Println(name, pointers, *pointers)
}</code>
    </pre>
    <p>
    pada contoh di atas tipe data <code>*string</code> menandakan bahwa variabel tersebut merupakan sebuah pointers dengan tipe data <code>string</code>, ketika kita coba tampilkan value dari variabel <code>pointers</code>, maka akan muncul alamat memori dari variable <code>name</code>, jika kita ingin menampilkan value dari variabel yang ada di dalam alamat memori kita bisa gunakan tanda <code>*</code> di depan variabelnya seperti <code>*pointers</code>.
    </p>
    <p>
    kalo ga pake pointers apa bakal error kodingannya? engga juga, tapi ada beberapa keuntungan yang ga bisa kita pakai dan sayang buat dilewatin, lebih jelasnya kita bahas <b>pass by value</b> dan <b>pass by reference</b>.
    </p>
    <h4>
    pass by value
    </h4>
    <p>
    maksudnya adalah mempassing variabel ke sebuah fungsi berdasarkan value yang dimiliki variabel tersebut. contoh, misalkan kita punya sebuah fungsi <code>duplicate</code> untuk mengalikan parameter yang dimasukkan dengan 2.
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"
    
func duplicate(number int){
  number = number * 2
}
    
func main(){
  age := 19
  duplicate(age)
  fmt.Println(age)
}</code>
    </pre>
    <p>
    saat diprint setelah fungsi <code>duplicate</code> dipanggil, maka value dari variabel <code>age</code> tetap <code>19</code>, karena value dari variabel <code>number</code> merupakan variabel dengan alamat memori yang berbeda dengan <code>age</code> (yang dipassing adalah data copy dari variabel <code>age</code>), jadi value yang dikalikan 2 hanya variable <code>number</code> yang ada di dalam fungsi <code>duplicate</code>
    </p>
    <h4>
    pass by reference
    </h4>
    <p>
    maksudnya adalah mempassing variabel ke sebuah fungsi berdasarkan alamat memori yang dimiliki variabel tersebut. contoh dengan fungsi yang sama.
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"

func duplicate(number *int) {
  *number = *number * 2
}

func main() {
  age := 19
  duplicate(&age)
  fmt.Println(age)
}</code>
    </pre>
    <p>
    saat diprint setelah fungsi <code>duplicate</code> dipanggil, maka value dari variabel <code>age</code> menjadi <code>38</code>, karena yang dimasukkan ke fungsi <code>duplicate</code> adalah alamat memori nya, jadi saat ada perubahan value di dalam fungsi akan berpengaruh terhadap seluruh variabel yang memiliki alamat memori yang sama (bila ada variabel pointers yang lain).
    </p>
    <p>
    jika tetap ingin menggunakan <b>pass by value</b> untuk case tersebut, maka kita perlu merubah sedikit fungsinya supaya memiliki nilai <code>return</code> dan diassign ke variabel asal seperti berikut
    </p>
    <pre>
    <code class="language-golang">package main

import "fmt"

func duplicate(number int) int {
  return number * 2
}

func main() {
  age := 19
  age = duplicate(age)
  fmt.Println(age)
}</code>
    </pre>
    <p>
    maka yang akan muncul adalah <code>38</code> sama seperti <b>pass by reference</b>, namun cara ini tidak direkomendasikan takutnya nanti jadi kebiasaan hehe.
    </p>
    <h3>
    kesimpulan
    </h3>
    <p>
    penggunaan pointers sangat dianjurkan untuk efisiensi memori dan meningkatkan performance, karena value yang disimpan ialah alamat memorinya, valuenya tetap ada di satu tempat, apalagi valuenya berupa array yang cukup besar, maka akan disayangkan jika kita gunakan <b>pass by value</b>, karena array tersebut akan dicopy data menjadi data baru lalu diassign ke variabel yang ada di dalam fungsi.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['pointers', 'golang'],
    publishedAt:
      ENV !== 'production'
        ? new Date('2024-04-17 20:00:00+07:00')
        : new Date('2024-04-18 10:00:00+07:00'),
    createdAt: new Date('2024-04-17 21:45:46+07:00'),
    updatedAt: new Date('2024-04-17 21:45:46+07:00'),
    referenceURLs: [
      'https://www.instagram.com/p/C9NMPHAy7MP/?utm_source=ig_web_copy_link',
      'https://github.com/abdul15irsyad/portfolio-v4',
    ],
  },
  {
    id: '16571800-1536-43d7-8950-cb4dfe295325',
    title: 'Soft Delete: Solusi untuk Salah Hapus',
    slug: 'soft-delete-solusi-untuk-salah-hapus',
    featureImageId: '26b99b44-5713-4b51-890e-8429382d3716',
    authorId: '7ed2fcd9-78e2-426b-84e0-527f80c654b5',
    content: `
    <article>
    <p>
    halo halo, gimana kabarnya para bug-bender? semoga semakin ahli dalam mengendalikan bug-bug yang berseliweran itu. di kesempatan kali ini, kita bahas sesuatu yang menarik ni
    </p>
    <p>
    coba bayangin kita punya data di suatu project yang sedang kita bangun, di project tersebut terdapat fitur menghapus data, saat pengguna menggunakan fitur tersebut, ternyata terdapat kesalahan dalam pemilihan data yang mau dihapus terlepas dari apapun alasannya, pengguna mau data yang dihapus tadi dikembalikan, jika kita tidak nyiapin mekanisme untuk nge-handle kondisi tersebut maka data yang telah terhapus akan benar-benar hilang. nah solusi yang bisa kita implement untuk fitur itu bisa kita sebut <b>"soft delete"</b>
    </p>
    <h3>apa tuh soft delete?</h3>
    <p>
    mungkin udah banyak yang tau soal soft delete ini, tapi kurang lebih soft delete merupakan konsep dimana data ga dihapus secara permanen dari database pas user ngelakuin penghapusan, data tersebut ditandain "dihapus" atau "tidak aktif", tetapi sebenernya masih ada di database, ini memungkinkan pengguna buat ngembaliin data yang dihapus di kemudian hari jika dibutuhkan.
    </p>
    <p>
    dengan menggunakan konsep tersebut, kita bisa nyimpen sementara data yang telah dihapus, jadi ga langsung dihapus gitu.
    </p>
    <h3>gimana cara implementasi nya?</h3>
    <ol>
    <b><li>tambahin kolom status</li></b>
    <p>
    pertama-tama kita perlu suatu field atau kolom di database yang nyimpen informasi terkait status data tersebut apakah sudah dihapus atau belum, sebelumnya kita mention bisa nandain dengan <code>boolean</code>, tapi lebih bagus lagi kita simpen dengan tipe <code>timestamp</code> dan akan kita kasih nama <code>deleted_at</code> yang berarti berisi waktu saat datanya dihapus, kalau belum dihapus maka akan berisi <code>null</code>.
    </p>
    <pre>
    <code class="language-sql">ALTER TABLE table_name\nADD COLUMN deleted_at TIMESTAMP;</code>
    </pre>
    <b><li>ubah logika hapus/delete data</li></b>
    <p>
    selanjutnya kita perlu ubah proses penghapusan datanya, daripada kita paka query sql <code>DELETE</code>, saat implemen fitur soft delete kita pakai query <code>UPDATE</code> dimana kolom status yang kita siapin di langkah pertama, kita set atau ubah aja jadi waktu sekarang.
    </p>
    <pre>
    <code class="language-sql">UPDATE table_name\nSET deleted_at = CURRENT_TIMESTAMP\nWHERE id = 'some_id';</code>
    </pre>
    <b><li>ubah logika penampilan data</li></b>
    <p>
    sekarang kita perlu ubah saat proses read data, dimana data yang kita tampilin itu data yang kolom statusnya <code>NULL</code> aja (di beberapa framework seperti nestjs udah dihandle) yakni data-data yang belum dihapus
    </p>
    <pre>
    <code class="language-sql">SELECT * FROM table_name\nWHERE deleted_at IS NULL;</code>
    </pre>
    <b><li>tambahin fitur recovery</li></b>
    <p>
    setelah udah kita sesuain logika fitur soft delete nya, kita bisa nambahin fitur recovery, baik itu yang bisa banyak (pilih data yang mau direcovery di menu trash) atau fitur undo (setelah data dihapus munculkan fitur untuk ngembaliin langsung data nya)
    </p>
    <b><li>buat cron job hapus data permanen</li></b>
    <p>
    jika kita ga pengen terus-terusan nyimpen semua data-data yang udah dihapus di database, nah kita perlu buat cron untuk bener-bener ngehapus datanya, mungkin bisa diatur waktunya seminggu sekali dangan waktu <code>deleted_at</code> sebulan ke belakang dari sekarang.
    </p>
    </ol>
    <h3>tantangan soft delete</h3>
    <p>
    beberapa tantangan ketika kita implementasi fitur soft delete, yakni integrasi dengan <b>unique key</b> di database, dimana <b>unique key</b> akan mengalami error jika terdapat data baru yang ditambahkan tetapi terdapat data yang sama dengan yang sudah dihapus, maka dari itu perlu kita atur <b>unique key</b> nya dengan kondisi kolom <code>deleted_at</code> yang berisi <code>null</code> saja. 
    </p>
    <p>
    lalu selanjutnya table relationship, yang akan menjadi ambigu ketika kita membuat join dengan data yang sudah dihapus, seharusnya data tersebut tidak ditemukan, jadi kita perlu menggunakan kondisi saat join table di database, lagi-lagi hanya join yang <code>deleted_at</code> yang berisi <code>null</code> saja.
    </p>
    <p>
    dan mungkin masih ada tantangan-tantangan lainnya yang menanti, keep calm.
    </p>
    <h3>penutup</h3>
    <p>
    oke, saat kita mengembangkan project, pengelolaan data adalah suatu hal yang sangat penting, teknik soft delete ini menawarkan solusi yang bisa membuat <b>user experience</b> lebih nyaman dengan kejadian salah hapus atau klik yang tidak disengaja apalagi data-data yang diolah adalah data-data yang sangat penting seperti data keuangan, aset, dll.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['soft delete', 'database'],
    publishedAt:
      ENV !== 'production'
        ? new Date('2024-03-11 17:00:00+07:00')
        : new Date('2024-03-11 17:00:00+07:00'),
    createdAt: new Date('2024-03-11 17:00:00+07:00'),
    updatedAt: new Date('2024-03-11 17:00:00+07:00'),
  },
  {
    id: '4bd064ba-76dc-4545-80b6-28277284b8ac',
    title: 'Bagaimana Komputer Bekerja? Bagian 1 Dunia Di Mata Komputer',
    slug: 'bagaimana-komputer-bekerja-bagian-1-dunia-di-mata-komputer',
    featureImageId: '25ea8ebd-3339-49e7-81dd-60480d021401',
    authorId: '06ebb3cb-9393-4455-90bb-07f935d00562',
    content: `
    <article>
    <h2>Pendahuluan</h2>
    <p>
    Komputer adalah tulang punggung peradaban modern. Ia adalah aktor utama dalam lahirnya teknologi-teknologi mutakhir abad ini, seperti aplikasi smartphone, internet, kecerdasan buatan, hingga block-chain. Namun, pernahkah kamu bertanya, bagaimana sebenarnya komputer bekerja? Bagaimana komputer menulis, menghitung, bermain game, bahkan berpikir mandiri?
    </p>
    <p>
    Dalam artikel ini, kita akan berkenalan dengan komputer, sedikit mengurai "kabel-kabel" di dalamnya agar dapat melihatnya bekerja dari jarak dekat. 
    </p>
    <p>
    Tulisan ini akan terbagi menjadi tiga bagian: 
    </p>
    <ul>
    <li>
    Bagian pertama: <i>Dunia Di Mata Komputer</i>. Ini menjelaskan bagaiamana komputer menangkap informasi dunia dan mengolahnya. Di sini kita akan berkenalan dengan bit dan gerbang logika
    </li>
    <li>
    Bagian kedua: <i>Bahan-Bahan Membuat Komputer</i>. Ini menjelaskan perangkat keras utama komputer, meliputi CPU, memori, perangkat input dan output.
    </li>
    <li>
    Bagian terakhir: <i>Melatih Komputer Berpikir</i>. Ini akan menjelaskan bagaimana cara komputer diprogram. Kita akan berkenalan dengan perangkat lunak, sistem operasi dan bahasa pemrograman.
    </li>
    </ul>
    <p>
    Ini adalah tulisan santai yang lebih enak disantap dengan kopi dan biskuit daripada buku catatan besar. Jadi siapkan posisi Anda. Kita meluncur!
    </p>
    <h2>Cara Komputer Menangkap Informasi</h2>
    <p>
    Di antara temuan-temuan manusia, komputer adalah temuan paling istimewa karena fleksibilitasnya dalam memproses informasi. Satu unit komputer mampu memproses huruf untuk menulis laporan, mengolah angka untuk perhitungan pajak, mengelola suara untuk menyetel musik, bahkan memproses gambar untuk mengedit foto dan video. Lihat seberapa fleksibelnya komputer dalam mengolah informasi.
    </p>
    <p>
    Tapi bagaimana komputer menangkap informasi-informasi itu? Apakah komputer benar-benar menangkap angka, huruf, dan gambar sebagaimana adanya? Jawabannya tidak. Komputer pada dasarnya hanyalah rongsokan silikon bodoh yang buta huruf, buta angka, dan buta warna. Untuk menangkap informasi, komputer mengandalkan sebuah elemen. Komputer menangkap seluruh informasi dalam bahasa elemen itu. Elemen ajaib itu adalah "bit".
    </p>
    <blockquote>
    Komputer pada dasarnya hanyalah rongsokan silikon bodoh yang buta huruf, buta angka, dan buta warna
    </blockquote>
    <h4>Apa itu Bit?</h4>
    <p>
    Bit adalah sesuatu yang punya dua kondisi.
    </p>
    <p>
    Sebagai contoh, koin yang dilempar adalah bit, karena memiliki dua nilai yang mungkin: ANGKA atau GAMBAR. Lampu kamar mandi juga merupakan bit karena memiliki dua kondisi yang mungkin: ON atau OFF.
    </p>
    <p>
    Komputer adalah rumah bagi miliaran bit. Di dalam komputer, terdapat ruang-ruang kecil yang selalu berada dalam salah satu dari dua kondisi: MATI atau MENYALA. Jika ada listrik yang mengalirinya, ia menyala. Jika aliran listrik terputus, ia mati.
    </p>
    <p>
    Secara umum, dua nilai bit umumnya disimbolkan dengan 1 dan 0. Artinya, 1 untuk kondisi bit menyala dan 0 untuk kondisi bit mati. Penyimbolan ini hanyalah untuk mempermudah penulisan, karena sebenarnya tidak ada angka 1 dan 0 berada di dalam komputer. Jika diinginkan, kamu dapat memberikan simbol lain seperti A dan B, atau X dan Y. Namun, sudah menjadi kesepakatan umum bahwa 1 dan 0 adalah simbol nilai bit dalam dunia komputer.
    </p>
    <h4>Apa fungsi bit?</h4>
    <p>
    Seperti manusia yang menggunakan kata-kata untuk berkomunikasi, komputer menggunakan bit sebagai bahasa mereka. Dengan kata lain, bit digunakan komputer untuk menangkap informasi.
    </p>
    <p>
    Satu bit memiliki kemampuan untuk merepresentasikan dua buah informasi, seperti Ya/Tidak, Mati/Menyala, atau SATU atau NOL. Jika kamu mengaitkan satu bit dengan lampu lalu lintas, maka kamu bisa memberi dua informasi kepada pengemudi: JALAN atau BERHENTI.
    </p>
    <p>
    Untuk menangkap banyak informasi, komputer membutuhkan lebih banyak bit. Dengan 8 bit, komputer mampu merepresentasikan 256 huruf Latin, termasuk huruf abjad, angka, dan tanda baca. Dengan 16 bit, komputer mampu merepresentasikan lebih dari 60.000 karakter Hanzi (huruf Mandarin). Dengan 24 bit, komputer mampu merepresentasikan 16 juta warna. Dan dengan 32 bit, komputer mampu merepresentasikan seluruh karakter, simbol, dan aksara di dunia, termasuk emoji, ikon, dan sebagainya.
    </p>
    <img src="/blog/1700730668.png" class="img-sm" title="Kode ASCII, sebuah standar representasi huruf latin ke dalam 8 bit.">
    <h2>Cara Komputer Mengolah Informasi</h2>
    <p>
    Baiklah, kita sudah mengetahui bahwa bit merupakan potongan informasi. Tetapi, bagaimana komputer mengolah informasi itu? Dengan kata lain, bagaimana komputer memanipulasi bit-bit yang ada di dalamnya? 
    </p>
    <p>
    Seperti lampu kamar mandi, bit dalam komputer juga dapat dihidupkan dan dimatikan menggunakan saklar. Kita tahu, mati-nyala-nya bit bergantung pada apakah ada listrik yang mengalirinya. Nah, "saklar komputer" bertugas untuk menghambat atau menyambung aliran listrik menuju bit. 
    </p>
    <p>
    Keistimewaan "saklar komputer" terletak pada ukurannya yang sangat kecil dan kemampuannya untuk beralih kondisi miliaran kali dalam sekejap! Perbedaan lainnya terletak pada cara mengontrol tuas "saklar komputer". Alih-alih menggunakan jari tangan secara mekanik, kita bisa mengontrol tuas "saklar komputer" semi-otomatis dengan bit input. Jika bit input teraliri listrik, tuas akan menutup. Jika bit input kosong dari listrik, tuas akan terbuka.
    </p>
    <p>
    Nama keren untuk "saklar komputer" adalah <b>Transistor</b>.
    </p>
    <img src="/blog/1700731121.gif" class="img-xs" title="Gambar saklar dikontrol secara mekanik oleh tangan">
    <img src="/blog/1700731301.gif" class="img-xs" title="Gambar transistor dikontrol oleh bit input">
    <h4>Apa itu Gerbang Logika?</h4>
    <p>
    Satu transistor saja tidak cukup untuk menciptakan keajaiban, karena hanya dapat mengedipkan bit dengan cara biasa. Transistor harus bergabung bersama, membentuk suatu rangkaian, untuk menciptakan sebuah saklar dengan aturan baru dan berguna untuk pengolahan informasi.
    </p>
    <p>
    Nama keren rangkaian transistor adalah "gerbang logika"
    </p>
    <p>
    Pada dasarnya, setiap komponen dalam komputer, seperti RAM, ALU (Arithmetic Logic Unit), dan Control Unit, dapat dianggap sebagai gerbang logika. Di dalamnya, terdapat serangkaian transistor yang tersusun secara cermat, membentuk aturan-aturan khusus untuk memproses bit sehingga menghasilkan informasi yang bermanfaat.
    </p>
    <p>
    Dasar dari semua gerbang logika adalah gerbang NOT dan gerbang AND. Cukup bermodal dua gerbang ini, kita bisa membangun seluruh gerbang logika yang ada di dunia, bahkan membangun komputer utuh.
    </p>
    <p>
    Gerbang NOT memiliki satu input dan satu output. Fungsi utamanya adalah membalikkan nilai inputnya. Dengan kata lain, jika bit input menyala maka bit output akan mati, dan sebaliknya.
    </p>
    <img src="/blog/1700731497.gif" class="img-xs" title="Gambar NOT Gate">
    <img src="/blog/1700731562.gif" class="img-xs" title="Gambar AND Gate">
    <p>
    Gerbang AND memiliki dua atau lebih input dan satu output. Aturan main gerbang ini berbunyi: bit output hanya akan menyala, jika semua bit input menyala. Jika ada salah satu bit input yang mati, maka bit output akan mati.
    </p>
    <p>
    Jika punya waktu luang, kita bisa mengkombinasikan gerbang AND dan NOT dengan berbagai kombinasi, menyambungkannya secara seri, atau secara pararel, dengan begitu kita bisa mendapatkan lebih banyak gerbang logika dengan aturan-aturan baru.
    </p>
    <h2>Kesimpulan</h2>
    <p>
    Pada dasarnya komputer hanyalah silikon yang buta huruf, buta angka, dan buta warna. Komputer pada akhirnya mampu menangkap informasi dari dunia luar dan mengolahnya berkat dua benda ajaib dan sederhana: bit dan gerbang logika. 
    </p>
    <p>
    Bit komputer dalam jumlah yang besar, mampu menangkap informasi yang sangat kompleks. Gerbang logika dengan susunan yang baik dan tepat dapat mengontrol bit-bit dalam komputer untuk menghasilkan output informasi yang bermanfaat.
    </p>
    <br>
    <br>
    <p>
    kalo berhasil sampai di sini, thanks sudah baca blog ini 🙏🏽🙏🏽🙏🏽, semoga bermanfaat :-)
    </p>
    </article>
    `,
    tags: ['komputer'],
    publishedAt:
      ENV !== 'production'
        ? new Date('2023-11-23 17:00:00+07:00')
        : new Date('2023-11-24 17:00:00+07:00'),
    createdAt: new Date('2023-11-23 17:00:00+00'),
    updatedAt: new Date('2023-11-23 17:00:00+00'),
  },
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
    oke akhirnya walaupun kita pakai windows, kita bisa ikut nyobain gimana make bun, apalagi sudah ada framework <code>elysia js</code> yang bisa kita kulik tanpa perlu ganti os di laptop kita, atau kalau mau running project node js kita yang sudah ada menggunakan bun juga bisa, yaaa ga terlalu keliatan beda nya si, untuk info bun lebih lanjut bisa langsung liat halaman resmi nya <a href="https://bun.sh" target="_blank" rel="noopener noreferrer">bun.sh</a>
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
    pagi, siang, malam teman-teman... dimanapun kalian berada semoga sehat selalu. saya mau share lagi mengenai nest js, untuk sekarang ini adalah fitur otentikasi (authentication) menggunakan <a href="https://www.passportjs.org/" target="_blank" rel="noopener noreferrer">Passport JS</a>, yakni kurang lebih fitur login pengguna, dan bagaimana membatasi endpoint yang hanya bisa diakses dengan jwt (json web token) yang valid sebagai tanda bahwa pengguna tersebut telah melakukan proses login yang mana ini adalah tulisan lanjutan dari tulisan <a href="/blog/nest-js-setup-database-with-typeorm" target="_blank" rel="noopener noreferrer">Nest JS Setup Database With TypeORM</a>.
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
