import { Poster, Project } from './types';

export const POSTERS: Poster[] = [
  {
    id: '1',
    title: 'Hari kartini Poster',
    category: 'Poster',
    imageUrl: 'image/AYU TRI ANGGRAINI_HARI KARTINI.png',
    description: 'Poster bertema klasik, yang berjudul HARI KARTINI, untuk memperingati hari kartini tanggal 21 april 2026.'
  },
  {
    id: '2',
    title: 'Uangmu, Masa Depanmu',
    category: 'Infografis',
    imageUrl: 'image/INFOGRAFIS_AYU TRI ANGGRAINI.png',
    description: 'Infografis yang berjudul "UANGMU,MASA DEPANMU" ditujukan untuk anak muda agar bisa mangatur dan mengelola keuangan.'
  },
  {
    id: '3',
    title: 'Generasi Muda ',
    category: 'Poster',
    imageUrl: 'image/poster generasi muda.jpeg',
    description: 'Poster Generasi Muda ini memvisualisasikan bahwa generasi muda sekarang adalah pilar Indonesia emas 2045.'
  },
  {
    id: '4',
    title: 'Indonesia Emas',
    category: 'Poster',
    imageUrl: 'image/poster lomba indonesia emas.jpeg',
    description: 'Poster ini menunjukan aktivitas sebagia pelajar, dan pelajar yang hebat dapat mewujudkan indonesai emas 2045.'
  },
  {
    id: '5',
    title: 'Perpustakaan Digital',
    category: 'Infografis',
    imageUrl: 'image/poster infografis.jpeg',
    description: 'Poster infografis ini membahas mengenai perpustakaan digital yang menjadi sahabat literasi kalangan milenial & Gen Z di era digital.'
  },
  {
    id: '6',
    title: 'Syajaah',
    category: 'Infografis',
    imageUrl: 'image/poster infografis syajaah.jpeg',
    description: 'Poster infografis ini membahsa mengenai pengertian syajaah.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ecoTrack-Smart-Waste',
    description: 'EcoTrack adalah platform edukasi digital yang membantu Anda memahami jenis sampah, menghitung dampak lingkungan, dan menemukan solusi pengelolaan sampah yang berkelanjutan.',
    screenshotUrl: 'image/Screenshot (68).png',
    techStack: ['React', 'Tailwind', 'Firebase', 'Node.js'],
    liveUrl: 'https://ecotrack-smart-waste.vercel.app/',
    githubUrl: 'https://github.com/ayu-tri/ecotrack-smart-waste'
  },
  {
    id: '2',
    title: 'Portal Ramadhan',
    description: 'Ramadhan Portal merupakan pusat informasi dan fitur ibadah Ramadhan yang memudahkan pengguna mengakses jadwal imsakiyah, doa harian, doa sahur dan berbuka, dzikir, serta berbagai konten Islami lainnya.',
    screenshotUrl: 'image/Screenshot (77).png',
    techStack: ['React', 'Motion', 'Tailwind'],
    liveUrl: 'https://ayuanggaraini32-web.github.io/portal-ramadhan/',
    githubUrl: 'https://ayuanggaraini32-web.github.io/portal-ramadhan/'
  },
];

