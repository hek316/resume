import data from "./resume.json";

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export interface CareerSummaryData {
  tagline: string;
  description: string;
  highlights: string[];
  closing: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  background?: string;
  analysis?: string;
  solution: string;
  results: string[];
}

export interface Experience {
  company: string;
  team: string;
  role: string;
  period: string;
  description: string;
  achievements: Achievement[];
}

export interface Project {
  title: string;
  client?: string;
  period?: string;
  techStack: string[];
  achievements: Achievement[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  year: string;
}

export interface Training {
  name: string;
  period: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface ResumeData {
  profile: Profile;
  careerSummary: CareerSummaryData;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  training: Training[];
  links: Link[];
}

export const resume: ResumeData = data as ResumeData;
