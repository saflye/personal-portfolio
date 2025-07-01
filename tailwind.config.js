/** @type {import('tailwindcss').Config} */
export const content = ["./public/**/*.{html,js}"];
export const darkMode = ["class"];
export const theme = {
  container: {
    center: true,
    screens: {
      lg: '1140px',
      xl: '1140px',
      '2xl': '1140px',
    },
  },
  extend: {
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      gemunu: ["Gemunu Libre", "sans-serif"],
    },
    spacing: {
      128: '32rem',
    },
    colors: {
      'react-blue': '#61DAFB',
      'tailwind-blue': '#06B6D4',
      'js-yellow': '#F7DF1E',
      'html-orange': '#E34F26'
    },
  },

};
export const plugins = [];

