import { BASE_URL } from '@/configs/app.config';
import { User } from '../types/user.type';
import { fileDatas } from './files.data';

export const users: User[] = [
  {
    id: '2f5bfc80-f7fe-4759-a281-33e803e92604',
    name: 'Rijal Ghodi',
    photoId: 'e1c49ad2-c4db-46b6-819a-fdb7f1f76487',
    linkedin: 'https://www.linkedin.com/in/rijal-ghodi',
  },
  {
    id: '8c27ac9e-d197-473d-907c-9e162203d072',
    name: 'Raihan Budiyarto',
    photo: {
      id: '0068a1c3-82a0-462f-8da9-0d205773583f',
      path: 'user',
      fileName: 'raihan-budiyarto.jpeg',
      originalFileName: 'raihan-budiyarto.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/raihan-budiyarto-98817321a/',
  },
  {
    id: 'a465903e-683a-4a40-8d13-f1543aed6625',
    name: 'Dito Anggoro',
    photo: {
      id: 'bcbd807d-044d-44d3-a6b3-0772546f76f9',
      path: 'user',
      fileName: 'dito-anggoro.jpeg',
      originalFileName: 'dito-anggoro.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/ditoanggoro/',
  },
  {
    id: '25a009a4-eeb7-42f9-8545-13b479b54ad4',
    name: 'Teguh Irawan',
    photo: {
      id: 'ebaa2777-4a01-42c1-8e7c-d43bd40434b3',
      path: 'user',
      fileName: 'teguh-irawan.jpeg',
      originalFileName: 'teguh-irawan.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/irawan-m-774762229/',
  },
  {
    id: '24f40aa0-3386-4be5-be33-367ecdfcd938',
    name: 'Roni Ardiyanto',
    photo: {
      id: 'e7528dd8-e99b-41bf-bd03-da6eca69efd6',
      path: 'user',
      fileName: 'roni-ardiyanto.jpeg',
      originalFileName: 'roni-ardiyanto.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/roniardiyanto/',
  },
  {
    id: '10b8004a-d98f-4b1f-9545-ea92e38e80cf',
    name: 'Sultan Pasha Abbas',
    photo: {
      id: '2543ce37-8bee-463c-a55d-aa26e9618081',
      path: 'user',
      fileName: 'acha.jfif',
      originalFileName: 'acha.jfif',
      mime: 'image/jfif',
    },
    linkedin: 'https://www.linkedin.com/in/muhammad-sultan-pasha-abbas/',
  },
  {
    id: '16beb85b-6a1a-48a5-bd6e-a5297ac11959',
    name: 'Adam Brilian',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/adam-brilian-633012223/',
  },
  {
    id: '89499fd9-c590-44ef-b727-2d8d934e608d',
    name: 'Chendra Dewangga',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/chendra-dewangga-285318206/',
  },
  {
    id: '0ceb6e1c-a88b-46c1-a7b9-8d6263960758',
    name: 'Dian Kartika',
    photo: {
      id: '30ab60c9-4069-4fbe-a037-ee9743fcd815',
      path: 'user',
      fileName: 'mba-dian.jfif',
      originalFileName: 'mba-dian.jfif',
      mime: 'image/jfif',
    },
    linkedin: 'https://www.linkedin.com/in/diankartikars/',
  },
  {
    id: '3dc9f9a1-22c1-444d-a46e-24ca6b1a2a7f',
    name: 'Kusuma Bambang',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/kusuma-bambang-wijanarko-43007169/',
  },
  {
    id: '4bcf42b3-8624-4ef3-8a38-11f4cf0f712f',
    name: 'Kukuh Prabowo',
    photo: {
      id: '3020e884-7639-4136-b713-a66f8912001d',
      path: 'user',
      fileName: 'mas-kukuh.jfif',
      originalFileName: 'mas-kukuh.jfif',
      mime: 'image/jfif',
    },
    linkedin: 'https://www.linkedin.com/in/kukuh-prabowo-883826246/',
  },
  {
    id: '88365261-588a-4a70-b97e-780a9679e56b',
    name: 'Habib Royni',
    photo: {
      id: 'b35b1e71-806e-4d6d-b3d6-67e66882704d',
      path: 'user',
      fileName: 'mas-roy.jfif',
      originalFileName: 'mas-roy.jfif',
      mime: 'image/jfif',
    },
    linkedin: 'https://www.linkedin.com/in/habib-royni-mujtahid-62726684/',
  },
  {
    id: '51c93428-eb19-48dc-b84d-d659161c85f9',
    name: 'Apriliya Ardiyanto',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/apriliyaard/',
  },
  {
    id: '17f4cca2-0e9d-4e33-baaa-7c7265427934',
    name: 'Puan Nadia',
    photo: {
      id: 'e7ce1939-8781-4d29-a73c-9c41f7038b9c',
      path: 'user',
      fileName: 'puan.jfif',
      originalFileName: 'puan.jfif',
      mime: 'image/jfif',
    },
    linkedin: 'https://www.linkedin.com/in/puannadia/',
  },
  {
    id: '65f72b53-e798-4ba1-9fa9-0d578e0b0140',
    name: 'Elvis M. Rizqy',
    photo: {
      id: '5ce7f774-b281-4086-a39c-002bc5466329',
      path: 'user',
      fileName: 'elvis.jfif',
      originalFileName: 'elvis.jfif',
      mime: 'image/jfif',
    },
    linkedin: 'https://www.linkedin.com/in/elvismuhammad/',
  },
  {
    id: 'ef1b3fd9-b395-404c-b1cd-82d862a05ab3',
    name: 'Sistiandy Syahbana',
    photo: {
      id: '4a405b04-d9bb-4aec-9cff-d41199c93313',
      path: 'user',
      fileName: 'sistiandy-syahbana.jpeg',
      originalFileName: 'sistiandy-syahbana.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/sistiandy/',
  },
  {
    id: '4f2be582-06a8-47a4-af48-7f742544f4cf',
    name: 'Silmi Kaffah',
    photo: {
      id: '5ab97a7d-5f7b-47d5-ad4b-fdb3f26de399',
      path: 'user',
      fileName: 'silmi-kaffah.jpeg',
      originalFileName: 'silmi-kaffah.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/muhammad-silmi-kaffah/',
  },
  {
    id: 'e05b71ec-002e-487c-b101-be953c5ac44d',
    name: 'Zainal Muttaqin',
    photo: {
      id: '6796dd1c-b6aa-4857-b63a-1a0c1a8490bb',
      path: 'user',
      fileName: 'zainal-muttaqin.jpeg',
      originalFileName: 'zainal-muttaqin.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/zainal-muttaqin/',
  },
  {
    id: '69cb835e-efd7-4aa5-8012-6bedbf4eacdc',
    name: 'Fajar',
  },
  {
    id: 'fe0d9a80-bafb-480c-8a5f-ff90e84cb504',
    name: 'Adhyaksa Herdhianto',
    photo: {
      id: 'b3b8735f-5953-4736-9166-8e1e7eb7c55b',
      path: 'user',
      fileName: 'adhyaksa-herdhianto.jpeg',
      originalFileName: 'adhyaksa-herdhianto.jpeg',
      mime: 'image/jpeg',
    },
    linkedin: 'https://www.linkedin.com/in/adhyaksa-herdhianto/',
  },
].map((user) => ({
  ...user,
  photo: user.photo
    ? {
        ...user.photo,
        url: `${BASE_URL}/${user.photo.path}/${user.photo.fileName}`,
      }
    : fileDatas.find(({ id }) => id === user.photoId),
}));
