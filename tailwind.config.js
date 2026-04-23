/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        ink:              'var(--ink)',
        cream:            'var(--cream)',
        'cream-soft':     'var(--cream-soft)',

        // Signature
        garnet:           'var(--garnet)',
        'garnet-deep':    'var(--garnet-deep)',

        // Contrapunto
        'teal-night':     'var(--teal-night)',
        'teal-luminous':  'var(--teal-luminous)',

        // Oro
        'gold-aged':      'var(--gold-aged)',

        // Secretos
        moss:             'var(--moss)',
        'lavender-dust':  'var(--lavender-dust)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Switzer', 'system-ui', 'sans-serif'],
        accent:  ['Gambarino', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};