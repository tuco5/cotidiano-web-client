/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: '#eef3fd',
        200: '#c0d3f8',
        300: '#92b3f3',
        400: '#6493ee',
        500: '#3673e9',
        600: '#1758d5',
        700: '#1245a7',
        800: '#0d3279',
        900: '#081f4b',
      },
      gray: {
        100: '#eef0f3',
        200: '#cfd4df',
        300: '#b1b9ca',
        400: '#929eb6',
        500: '#7483a1',
        600: '#5b6a87',
        700: '#475268',
        800: '#323a4a',
        900: '#1d222c',
      },
    },
  },
  plugins: [],
};
