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
        ink: withOpacity('--c-ink'),
        panel: withOpacity('--c-panel'),
        accent: withOpacity('--c-accent'),
        fg: withOpacity('--c-fg'),
        'fg-secondary': withOpacity('--c-fg-secondary'),
        'fg-tertiary': withOpacity('--c-fg-tertiary'),
        'fg-muted': withOpacity('--c-fg-muted'),
        line: withOpacity('--c-line'),
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
