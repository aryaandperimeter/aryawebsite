/** @type {import('tailwindcss').Config} */
function withOpacity(variable) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: withOpacity('--c-paper'),
        fg: withOpacity('--c-fg'),
        accent: withOpacity('--c-accent'),
        forest: withOpacity('--c-forest'),
        muted: withOpacity('--c-muted'),
        surface: withOpacity('--c-surface'),
      },
      fontFamily: {
        sans: ['"Söhne"', '-apple-system', 'system-ui', 'sans-serif'],
        serif: ['"GT Sectra"', '"Times New Roman"', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        12: ['12px', { lineHeight: '1.6' }],
        14: ['14px', { lineHeight: '1.6' }],
        16: ['16px', { lineHeight: '1.6' }],
        20: ['20px', { lineHeight: '1.6' }],
        28: ['28px', { lineHeight: '1.2' }],
        40: ['40px', { lineHeight: '1.2' }],
        56: ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        80: ['80px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        page: '1200px',
      },
      spacing: {
        gutter: '24px',
      },
    },
  },
  plugins: [],
};
