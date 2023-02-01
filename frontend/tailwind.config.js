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
        gray800: '#3E4346', // new
        gray700: '#52575B',
        gray600: '#5B656E',
        gray500: '#5B656F',
        gray400: '#5C727D',
        gray300: '#75909F',
        gray200: '#CEDCE4',
        gray100: '#F2F4F5',
        gray050: '#FAFDFF',

        gray100warm: '#FCFAFE',
        gray100cold: '#F9FBFD',

        blue500: '#75909F',

        green300: '#7CBEB6',
        green200: '#A5FFED',
        green100: '#D6EFEE',

        orange500: '#E59766',

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
