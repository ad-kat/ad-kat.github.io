/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
      fontFamily: {
        display: ['Calibri', 'Trebuchet MS', 'Arial', 'sans-serif'],
        body: ['Calibri', 'Trebuchet MS', 'Arial', 'sans-serif'],
        mono: ['Consolas', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}