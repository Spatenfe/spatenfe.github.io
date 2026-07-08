export type EducationEntry = {
  degree: string;
  university: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'M.Sc. Computer Science',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2024',
    end: 'Present',
    highlights: [
      'Grade: 1.3. Specializing in Computer Vision, Natural Language Processing, and Deep Learning for 3D Geometry.',
      'Built a deep learning pipeline combining open-source models including Stable Diffusion 2.5, SAM 2, and pose estimation (grade: 1.0).'
    ]
  },
  {
    degree: 'B.Sc. Computer Science',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2021',
    end: 'Sep 2024',
    highlights: [
      'Grade: 2.0. Specialized in Artificial Intelligence and Economics, with hands-on deep learning experience in Python, PyTorch, and Computer Vision.',
      "Bachelor's thesis on Multi-Agent Reinforcement Learning (grade: 1.0).",
      'Analyzed building materials with U-Nets and GANs (grade: 1.3).'
    ]
  }
];
