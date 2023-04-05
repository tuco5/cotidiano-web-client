/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        write: {
          '0%': {maxWidth: '0'},
          '100%': {maxWidth: '1000px'},
        },
        'move-top': {
          '0%': {transform: 'translateY(1rem)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        'move-right': {
          '0%': {transform: 'translateX(-1rem)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        'move-left': {
          '0%': {transform: 'translateX(1rem)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
      },
      animation: {
        write: 'write 1.5s ease-in .6s backwards',
        'move-top': 'move-top 0.5s ease-out .1s backwards',
        'move-right': 'move-right 0.8s ease-out',
        'move-left': 'move-left 0.8s ease-out',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
    colors: {
      primary: {
        100: '#eef3fd',
        200: '#abb4d0',
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
      white: '#fff',
      black: '#000',
    },
    backgroundImage: {
      'hover-item':
        'linear-gradient(120deg,transparent 0%, transparent 50%, #bc4e9c 50%, #f80759 100%)',
      royal: 'linear-gradient(to top, #141E30, #243B55)',
      instagram: 'linear-gradient(to left, #475268 50%, #833ab4 50%, #fd1d1d, #fcb045)',
      facebook: 'linear-gradient(to left, #475268 50%, #00c6ff 50%, #0072ff)',
      tiktok: 'linear-gradient(to left, #475268 50%, #69C9D0 50%, #EE1D52)',
      whatsapp: 'linear-gradient(to left, #475268 50%, #25D366 50%)',
    },
  },
  plugins: [],
};
