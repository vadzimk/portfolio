/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#C0D6E7',
        primary2: '#C7E5FC',
        secondary1: '#E3C7FF',
        secondary2: '#F2E9FE',
        accent1: '#A5FFED',
        gray900: '#0F1011', // new
        gray600: '#abc1d2',
        gray700: '#86a5b6',
        gray800: '#6a8c9f',
        gray500: '#BAB5BD',
        gray300: '#E0DBE3',
        gray100warm: '#FCFAFE',
        gray100cold: '#F9FBFD',
        blue900: '#4E5761',
        blue800: '#566470',
        blue700: '#556B80',
        blue600: '#76868F',
        blue500: '#75909F',
        blue400: '#8CA3B0',
        blue300: '#CEDBE4',
        blue200: '#EDF9FF',
        blue100: '#EFF7FF',
        green500: '#7CBEB6',
        green200: '#D6EFEE',
        green100: '#EDFFFD',
        orange500: '#E59766',
        orange100: '#F0EFED'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Hahmlet', 'serif']
      },
      maxWidth: {
        'screen-desk': '1320px',
      },
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          // whatever you want to serve as the defaults
          colors: {
          },
        }
      },
      themes: [
        {
          name: 'my-theme-1',
          extend: {
            // whatever styles you want to apply for my-theme-1
          }
        },
        {
          name: 'my-theme-2',
          extend: {
            // whatever styles you want to apply for my-theme-2
          }
        }
      ]
    })
  ],
}
