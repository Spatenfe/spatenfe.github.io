import { getCollection } from 'astro:content';
import { siteData } from '../data/site';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { news } from '../data/news';

// Plain-markdown site summary following the llms.txt convention, generated at
// build time from the same data modules that drive the pages so it can't
// drift from the visible content.
export const GET = async () => {
  const origin = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/`, import.meta.env.SITE).href;
  const abs = (path: string) => new URL(path.replace(/^\//, ''), origin).href;

  const projects = (await getCollection('projects')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
  const projectLine = (project: (typeof projects)[number]) => {
    const { title, description, date, venue } = project.data;
    const links = project.data.links ?? {};
    const url = links.projectPage ?? abs(`/projects/${project.slug}/`);
    const year = String(date.getFullYear());
    const meta = venue ? (venue.includes(year) ? venue : `${venue} ${year}`) : year;
    const doi = project.data.bibtex?.match(/doi\s*=\s*{([^}]+)}/i)?.[1];
    const extras = [
      links.paper && `Paper: ${links.paper}${doi ? ` DOI: https://doi.org/${doi}` : ''}`,
      links.github && `Code: ${links.github}`,
      links.writeup && `Write-up: ${links.writeup.startsWith('/') ? abs(links.writeup) : links.writeup}`
    ].filter(Boolean);
    return `- [${title}](${url}) (${meta}): ${description}${extras.length ? ` ${extras.join('. ')}` : ''}`;
  };

  const publications = projects.filter((p) => p.data.category === 'research');
  const otherProjects = projects.filter((p) => p.data.category === 'project');

  const lines = [
    `# ${siteData.name}`,
    '',
    `> ${siteData.title}. ${siteData.tagline}`,
    '',
    `- Location: ${siteData.location}`,
    `- Email: ${siteData.email}`,
    `- Portfolio: ${origin}`,
    `- CV: ${abs(siteData.cvPath)}`,
    `- GitHub: ${siteData.githubUrl}`,
    `- LinkedIn: ${siteData.linkedinUrl}`,
    `- Google Scholar: ${siteData.scholarUrl}`,
    '',
    '## Education',
    '',
    ...education.map(
      (entry) =>
        `- ${entry.degree}, ${entry.university}, ${entry.location} (${entry.start} — ${entry.end}). ${entry.highlights.join(' ')}`
    ),
    '',
    '## Experience',
    '',
    ...experience.map(
      (entry) =>
        `- ${entry.role}, ${entry.company}, ${entry.location} (${entry.start} — ${entry.end}). ${entry.bullets.join(' ')}`
    ),
    '',
    '## Publications',
    '',
    ...publications.map(projectLine),
    '',
    '## Projects',
    '',
    ...otherProjects.map(projectLine),
    '',
    '## News',
    '',
    ...news.map((item) => `- ${item.date}: ${item.text}${item.link ? ` (${item.external ? item.link : abs(item.link)})` : ''}`),
    ''
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
