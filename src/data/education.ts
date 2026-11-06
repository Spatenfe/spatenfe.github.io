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
    degree: 'Ph.D. Student (incoming)',
    university: 'University of Tübingen, Tübingen AI Center',
    location: 'Tübingen, Germany',
    start: 'Starting Jan 2027',
    end: '',
    highlights: ['Advised by Dr. A. Sophia Koepke and Prof. Matthias Bethge.']
  },
  {
    degree: 'M.Sc. Computer Science',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2024',
    end: '2026',
    highlights: [
      'Passed with distinction; grade: 1.2 (German scale, 1.0 = highest).',
      'Thesis: Scaling Laws for Contrastive Language-Audio Pretraining on Web-Scale Data.',
      'Interdisciplinary project with LMU Munich physicists: built a machine learning benchmark for classifying Higgs-pair coupling strength, comparing 12+ models under severe class imbalance.',
      'Practical course on foundation models in computer vision: developed a virtual try-on pipeline chaining six vision foundation models such as SAM2 and StableVITON, deployed locally on a GPU cluster.'
    ]
  },
  {
    degree: 'B.Sc. Computer Science',
    university: 'Technical University of Munich (TUM)',
    location: 'Munich, Germany',
    start: 'Oct 2021',
    end: 'Sep 2024',
    highlights: [
      'Specialized in Artificial Intelligence and Economics.',
      "Bachelor's thesis on decentralized multi-agent reinforcement learning (Computer Vision Group, TUM; grade: 1.0).",
      'Analyzed building materials with U-Nets and GANs (grade: 1.3).'
    ]
  }
];
