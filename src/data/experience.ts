export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Student Assistant',
    company: 'Computer Vision Group (MuMoL), TUM',
    location: 'Munich, Germany',
    start: 'Apr 2025',
    end: 'Present',
    bullets: [
      'Adapted open-source software for medical purposes, including local large-scale deployment of LLMs.',
      'Engineered LLM agents with LangGraph and improved performance through custom prompt engineering.',
      'Managed and analyzed datasets as part of ongoing research work.',
      'Reviewed third-party submissions for the IEEE Intelligent Vehicles Symposium (IV) 2025.'
    ],
    tech: ['LLMs', 'LangGraph', 'Prompt Engineering', 'Deployment']
  },
  {
    role: 'Working Student – Software Engineer',
    company: 'Levigo Solutions GmbH',
    location: 'Munich, Germany',
    start: 'Aug 2021',
    end: 'Oct 2024',
    bullets: [
      'Introduced software quality assurance measures for Kubernetes clusters with Testkube and Postman to improve code quality and reduce redundant tasks.',
      'Implemented a PDF/A verification tool for documents in Java as a back-end API.'
    ],
    tech: ['Java', 'Kubernetes', 'REST API', 'Testkube']
  }
];
