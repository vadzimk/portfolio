/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: '#C0D6E7',
        primary2: '#C7E5FC',
        secondary1: '#E3C7FF',
        secondary2: '#F2E9FE',
        accent1: '#2FEAA8',
        gray900: '#382D3F',
        gray500: '#BAB5BD',
        gray300: '#E0DBE3',
        gray100warm: '#FCFAFE',
        gray100cold: '#F9FBFD',
      },
      fontFamily:{
        sans: ['Rubik', 'sans-serif'],
        serif: ['Hahmlet', 'serif']
      },
      maxWidth: {
        'screen-desk': '1320px',
      },
      screens:{
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}
