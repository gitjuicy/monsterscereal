/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx,liquid}'],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#1b1b1b',
          DEFAULT: '#000000',
        },
        blue: {
          light: '#45a3e6',
          DEFAULT: '#1689ca',
        },
        brown: {
          light: '#be663b',
          DEFAULT: '#a04d24',
        },
        green: {
          light: '#c2e956',
          DEFAULT: '#a5cd39',
        },
        pink: {
          light: '#ff3f8c',
          DEFAULT: '#ed0973',
        },
        purple: {
          DEFAULT: '#462772',
        },
        red: {
          light: '#c3273c',
          DEFAULT: '#aa2234',
        },
      },
      fontFamily: {
        coop: 'CoopBold',
      },
      maxWidth: {
        200: '200px',
        240: '240px',
        310: '310px',
        800: '800px',
        1000: '1000px',
        1340: '1340px',
      },
      minWidth: {
        200: '200px',
      },
    },
  },
  plugins: [],
};
