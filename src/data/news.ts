export type NewsItem = {
  date: string;
  text: string;
  link?: string;
  external?: boolean;
};

export const news: NewsItem[] = [
  {
    date: 'July 2026',
    text: 'I\'m doing a Research Stay at BAIR, UC Berkeley with Sophia Koepke and Alexei (Alyosha) Efros for the summer of 2026.',
    link: 'https://bair.berkeley.edu/',
    external: true
  },
  {
    date: 'Feb 2026',
    text: 'Published an ML benchmark for VBF Higgs-pair events with Lars Schneider and Johannes Mesner, advised by LMU Munich.',
    link: '/projects/vbf-event-classifier'
  },
  {
    date: 'Mar 2025',
    text: 'Paper "Decentralized Reinforcement Learning for Multi-Agent Navigation in Unconstrained Environments" accepted at IEEE IV 2025.',
    link: '/projects/decentralized-rl-multi-agent-navigation'
  },
  {
    date: 'Oct 2024',
    text: 'Started the M.Sc. Computer Science program at the Technical University of Munich.'
  },
  {
    date: 'Sep 2024',
    text: 'Joined the Computer Vision Group (MuMoL) at TUM as a Student Assistant.'
  }
];
