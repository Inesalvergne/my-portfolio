/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 480px) { ... }
      'desktop': '1025px'
    },
    colors: {
      'dark-green': '#009486',
      'light-green': '#D1E6E4',
      'light-cream': '#FFFCF7',
      'dark': '#161717',
      'light-grey': '#979797'
    },
    fontFamily: {
      mona: 'Mona Sans',
      inter: 'Inter'
    },
    extend: {
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
