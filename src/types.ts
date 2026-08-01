export type NavigationSection = 
  | 'home'
  | 'projects'
  | 'about'
  | 'services'
  | 'process'
  | 'skills'
  | 'experience'
  | 'testimonials'
  | 'blog'
  | 'gallery'
  | 'faq'
  | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  featured: boolean;
  coverImage: string;
  heroImage: string;
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  galleryImages?: string[];
  wireframes?: string[];
  clientFeedback?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  estimatedTime: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  summary: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: { name: string; level: number; icon: string; experienceYears: string; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectRef?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Photography' | 'Branding' | 'UI' | 'Motion' | 'Concepts';
  image: string;
  aspectRatio: 'aspect-square' | 'aspect-[4/5]' | 'aspect-[16/9]' | 'aspect-[3/4]';
  date: string;
  likes: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Technical';
}
