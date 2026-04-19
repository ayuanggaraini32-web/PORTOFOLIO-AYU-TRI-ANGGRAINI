export interface Poster {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  screenshotUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  instagram: string;
}
