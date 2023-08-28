const { Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        // Specno colors
        primary: '#0a122e',
        secondary: '#489dda',
        borders: '#d2d2d2',
        text: '#0a122ecc'
        // Green from Uizard
        // primary: '#27616e', 
        // tertiary: '#f3f8fd',
        // Blue from Uizard
        // blue-primary: '#3164f4'
      }, 
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
