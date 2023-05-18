const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F0A6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-main':
          'linear-gradient(180deg, rgba(0, 240, 166, 0) 0%, rgba(0, 240, 166, 0.1) 100%);',
        textGreen: 'url("/assets/green-text-bg.svg")',
        textWhite: 'url("/assets/white-text-bg.svg")',
      },
      blur: {
        full: '194px',
      },
      fontFamily: {
        body: ['var(--font-montserrat)', ...fontFamily.sans],
        mono: ['var(--font-mono)', 'monospace'],
        anton: ['var(--font-anton)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
