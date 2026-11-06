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
    role: 'Visiting Researcher',
    company: 'BAIR, UC Berkeley',
    location: 'Berkeley, USA',
    start: 'Jun 2026',
    end: 'Present',
    bullets: [
      'Ongoing research stay at Berkeley AI Research (BAIR) on multi-modal representation learning; advised by Prof. Alexei A. Efros and Dr. A. Sophia Koepke.'
    ],
    tech: ['Representation Learning', 'Audio']
  },
  {
    role: 'Research Collaborator (M.Sc. Thesis)',
    company: 'LAION & Jülich Supercomputing Centre (JSC)',
    location: 'Remote',
    start: 'Dec 2025',
    end: 'Present',
    bullets: [
      'Led audio captioning, model design, and the scaling study for LAION-Audio-XL (365M audio-text pairs from 1.47B samples); advised by Dr. Jenia Jitsev and Dr. A. Sophia Koepke.',
      'Captioned ~500M clips and trained NaFlex audio-text models at 5 scales (27M–340M) on the JUPITER supercomputer; fit compute scaling laws over 85k+ GH200 GPU hours.',
      'Resulting open CLAP2-L model scores 53.6% on MAEB-30 vs. 35.2% for LAION-CLAP and 44.1% for GLAP.'
    ],
    tech: ['Contrastive Pretraining', 'Scaling Laws', 'JUPITER', 'Slurm', 'vLLM']
  },
  {
    role: 'Student Assistant',
    company: 'Multimodal Learning Group (MuMoL), TUM & German Heart Center',
    location: 'Munich, Germany',
    start: 'Apr 2025',
    end: 'Present',
    bullets: [
      'Clinic Canvas: led development of an open-source, on-premises agentic LLM system that drafts medical letters from clinical records; advised by Dr. A. Sophia Koepke and Prof. Thorsten Kessler (now Saarland University Hospital).',
      'Designed and ran an ethics-approved, 3-week prospective study at the German Heart Center with 19 physicians and 347 AI-assisted letters; mean editing time fell by 27%, from 15 to 11 minutes per letter.',
      'Leading external validation with 6 physicians at Saarland University Hospital.'
    ],
    tech: ['LLM Agents', 'LangGraph', 'vLLM', 'User Study']
  },
  {
    role: 'Working Student – Software Engineer',
    company: 'Levigo Solutions GmbH',
    location: 'Munich, Germany',
    start: 'Aug 2021',
    end: 'Oct 2024',
    bullets: [
      'Developed a scalable, containerized Java service for automated PDF/A document verification.',
      'Built Kubernetes-based quality-assurance and test automation infrastructure with Testkube.'
    ],
    tech: ['Java', 'Kubernetes', 'Docker', 'Testkube']
  }
];
