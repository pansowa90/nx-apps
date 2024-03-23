const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');

const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roboto", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
