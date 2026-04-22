/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: 'var(--terracotta)',
        cream:      'var(--cream)',
        ink:        'var(--ink)',
        olive:      'var(--olive)',
        brass:      'var(--brass)',
        muted:      'var(--muted)',
        line:       'var(--line)',
      },
      fontFamily: {
        display: ['Bespoke Serif', 'Georgia', 'serif'],
        body:    ['Switzer', 'system-ui', 'sans-serif'],
        accent:  ['Gambarino', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
