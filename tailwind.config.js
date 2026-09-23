/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--c-canvas) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        panel2: 'rgb(var(--c-panel2) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        mute: 'rgb(var(--c-mute) / <alpha-value>)',
        violet: 'rgb(var(--c-violet) / <alpha-value>)',
        orchid: 'rgb(var(--c-orchid) / <alpha-value>)',
        pink: 'rgb(var(--c-pink) / <alpha-value>)',
        plum: 'rgb(var(--c-plum) / <alpha-value>)',
        lilac: 'rgb(var(--c-lilac) / <alpha-value>)',
        gold: 'rgb(var(--c-gold) / <alpha-value>)',
        'gold-soft': 'rgb(var(--c-gold-soft) / <alpha-value>)',
      },
      borderRadius: { md: '0', lg: '0', full: '0' },
      fontFamily: {
        display: ['"Times New Roman"', 'Times', 'serif'],
        body: ['"Times New Roman"', 'Times', 'serif'],
        mono: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}