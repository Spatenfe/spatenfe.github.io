/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#f3f4f6',
        surface: '#ffffff',
        border: '#d5d8df',
        ink: '#0b0d12',
        muted: '#4f5564',
        accent: {
          DEFAULT: '#1d2942',
          dark: '#121a2d'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 12px 28px rgba(8, 12, 20, 0.08)',
        card: '0 10px 18px -6px rgba(10, 16, 28, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
