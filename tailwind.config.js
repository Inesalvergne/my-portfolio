/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'dark-green': '#009486',
      'light-green': '#D1E6E4',
      'light-cream': '#FFFCF7',
      'dark': '#161717'
    },
    fontFamily: {
      mona: 'Mona Sans',
      inter: 'Inter'
    },
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
