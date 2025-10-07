import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Styled Components',
      'Redux',
      'Redux Toolkit',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'DynamoDB',
    ],
  },
  {
    category: 'Testing',
    skills: ['React Testing Library', 'Playwright E2E Testing'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'AWS', 'GitHub Actions'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Tools & Others',
    skills: ['Postman', 'Figma'],
  },
];
