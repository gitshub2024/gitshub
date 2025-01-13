/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181C14',
        secondary: '#697565',
        accent: '#ECDFCC',
      },
      fontFamily: {
        'jockey': ['"Jockey One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}