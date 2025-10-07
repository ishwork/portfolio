// Experience types
export type Experience = {
  company: string;
  period: string;
  title: string;
  link?: string;
  description: {
    [key: number]: string;
  };
  technologies: string[];
};

// Education types
export type Education = {
  institution: string;
  period: string;
  degree: string;
  location: string;
  description: string;
};

// Skills types
export type SkillCategory = {
  category: string;
  skills: string[];
};
