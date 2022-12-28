const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,ts,js}',
    './node_modules/flowbite-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('./src/lib/assets/tailwindcss/presets/common.cjs'),
    require('./src/lib/assets/tailwindcss/presets/font-family.cjs')
  ],

  theme: {
    extend: {
      colors: {
        primary: colors.slate
      }
    }
  },

  plugins: [
    require('flowbite/plugin')
  ]
};
