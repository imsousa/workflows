/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cblue': '#2C3FB1',
        'clblue': '#E9EBF7',
        'red-200': 'rgb(254 202 202)',
        'green-200': '#C1E1C1',
      },
    },
  },
  plugins: [],
}
