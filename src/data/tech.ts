export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'ML / DL',
    items: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'LLM Agents', 'Audio Processing', 'Speech Recognition', '3D Geometry']
  },
  {
    title: 'Programming & Tools',
    items: ['Python', 'PyTorch', 'Java', 'C', 'SQL', 'Dart/Flutter', 'Assembly', 'Slurm', 'Git', 'Docker', 'Kubernetes', 'LangGraph', 'JUnit']
  }
];
