/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#680AFF',
        aqua: '#29FFC9',
        dpurple: '#5600E0',
        orange: '#ff4646',
        yellow: '#DFFE00',
        green: '#90FF49',
        dblue: '#0D1042',
        cyan: '#EBFFFA',
        black: '#040303',
        smoke: '#1F1F1F',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
