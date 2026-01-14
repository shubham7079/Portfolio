
export interface Project {
  id: string;
  title: string;
  hook: string;
  timeline: string;
  role: string;
  problem: string;
  thinking: string;
  techChoices: string;
  challenges: string;
  results: string;
  learnings: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
