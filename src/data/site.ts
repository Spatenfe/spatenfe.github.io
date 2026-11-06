export const siteData = {
  name: 'Felix Förster',
  title: 'Incoming Ph.D. Student, University of Tübingen | M.Sc. Computer Science, TUM',
  tagline: 'Multi-modal representation learning: how data and model scale shape multi-modal embeddings, what different training objectives cause these models to learn, and how to align learned similarity with human perception.',
  location: 'Munich, Germany',
  // Email, base64 of the reversed address, so it never appears in plain text in
  // the built HTML. Decoded in the browser by the script in BaseLayout.astro
  // onto every element carrying a `data-email` attribute. To change it:
  // node -e "console.log(Buffer.from('you@example.com'.split('').reverse().join('')).toString('base64'))"
  emailEncoded: 'ZWQubXV0QHJldHNyZW9mLmY=',
  githubUrl: 'https://github.com/Spatenfe',
  linkedinUrl: 'https://www.linkedin.com/in/felix-foerster-li/',
  scholarUrl: 'https://scholar.google.com/citations?user=VeMI50UAAAAJ',
  // Privacy-friendly analytics (GoatCounter: cookieless, GDPR-safe without a
  // consent banner). Sign up at https://www.goatcounter.com, pick a site code
  // (e.g. "spatenfe" → spatenfe.goatcounter.com) and enter it here; leave
  // empty to disable analytics entirely (no script is emitted).
  goatCounterCode: 'spatenfe',
};

export const seo = {
  title: `${siteData.name} | Portfolio`,
  description: 'Portfolio of Felix Förster: multi-modal representation learning, scaling laws for contrastive language-audio pretraining, and deep learning research and engineering.',
  ogImage: '/images/og-cover.png'
};
