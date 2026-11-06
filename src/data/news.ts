export type NewsSegment = {
  text: string;
  link?: string;
  external?: boolean;
};

export type NewsItem = {
  date: string;
  text?: string;
  segments?: NewsSegment[];
  link?: string;
  external?: boolean;
};

export const news: NewsItem[] = [
  {
    date: 'Nov 2026',
    segments: [
      { text: 'Released ' },
      { text: 'LAION-Audio-XL', link: 'https://projects.laion.ai/clap2/', external: true },
      {
        text: ', a web-scale audio-text corpus (365M clips), scaling studies for contrastive language-audio pretraining, and the CLAP2 model family, joint work with LAION.'
      }
    ]
  },
  {
    date: 'Nov 2026',
    segments: [
      { text: 'Finished my M.Sc. at TUM with distinction. Starting in January 2027, I will be a Ph.D. student at the ' },
      { text: 'University of Tübingen, Tübingen AI Center', link: 'https://tuebingen.ai/', external: true },
      { text: ', advised by ' },
      { text: 'A. Sophia Koepke', link: 'https://akoepke.github.io/', external: true },
      { text: ' and Matthias Bethge.' }
    ]
  },
  {
    date: 'Jul 2026',
    segments: [
      { text: "I'm happy to join " },
      { text: 'Sophia Koepke', link: 'https://akoepke.github.io/', external: true },
      { text: ' and ' },
      {
        text: 'Alexei (Alyosha) Efros',
        link: 'https://scholar.google.com/citations?user=d97bGd8AAAAJ&hl=en',
        external: true
      },
      { text: ' at ' },
      { text: 'BAIR, UC Berkeley', link: 'https://bair.berkeley.edu/', external: true },
      { text: ' for my research stay this summer.' }
    ]
  },
  {
    date: 'Apr 2025',
    text: 'Joined the Computer Vision Group (MuMoL) at TUM as a Student Assistant.',
    link: 'https://akoepke.github.io/mumol.html',
    external: true
  },
  {
    date: 'Mar 2025',
    text: 'Paper "Decentralized Reinforcement Learning for Multi-Agent Navigation in Unconstrained Environments" accepted at IEEE IV 2025.',
    link: 'https://spatenfe.github.io/Decentralized_Reinforcement_Learning_for_Multi-Agent-Navigation_in_Unconstrained_Environments/',
    external: true
  }
];
