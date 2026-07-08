export type TechGroup = {
  title: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    title: 'AI / ML',
    items: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'LLM Agents', 'Audio Processing', 'Speech Recognition', '3D Geometry']
  },
  {
    title: 'Programming',
    items: ['Python', 'PyTorch', 'Java', 'C', 'SQL', 'Dart/Flutter', 'Assembly']
  },
  {
    title: 'Tools & Platforms',
    items: ['Slurm', 'Git', 'Docker', 'Kubernetes', 'LangGraph', 'JUnit']
  }
];
