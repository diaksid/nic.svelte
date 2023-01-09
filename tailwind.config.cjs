const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}',
    './node_modules/flowbite-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('daks-svelte/assets/tailwindcss/presets/common.cjs'),
    require('daks-svelte/assets/tailwindcss/presets/font-family.cjs')
  ],

  theme: {
    extend: {
      colors: {
        primary: colors.slate
      },
      backgroundImage: {
        loading: 'url(daks-svelte/assets/icons/loading/0.svg)',
        'loading-data': 'url(daks-svelte/assets/icons/loading/data.svg)'
      }
    }
  },

  plugins: [
    require('flowbite/plugin')
  ]
};
