//const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '2rem',
          sm: '3rem',
          lg: '4rem',
          '2xl': '5rem'
        }
      },
      screens: {
        '2xs': '320px',
        xs: '480px',
        '3xl': '1600px'
      },
      backgroundSize: {
        '1/20': '5%',
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%'
      },
      backgroundPosition: {
        'center-top': 'center top'
      },
      maxWidth: {
        inherit: 'inherit',
        none: 'none'
      },
      minWidth: {
        inherit: 'inherit',
        none: 'none'
      },
      maxHeight: {
        inherit: 'inherit',
        none: 'none'
      },
      minHeight: {
        inherit: 'inherit',
        none: 'none'
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
        5000: '5000ms'
      },
      content: {
        null: '""'
      }
    }
  },

  plugins: [
    require('../plugins/base.cjs'),
    require('../plugins/utilities.cjs'),
    require('../plugins/current.cjs')
  ]
};
