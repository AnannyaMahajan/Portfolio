export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  caseStudy: {
    role: string;
    timeline: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  location: string;
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: string;
  stat?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
  views: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}
