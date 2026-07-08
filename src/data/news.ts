export type NewsItem = {
  date: string;
  text: string;
  link?: string;
};

export const news: NewsItem[] = [
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
