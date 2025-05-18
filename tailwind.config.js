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
        background: '#FFFFFF',
        text: {
          primary: '#1E1E1E',
          secondary: '#808080',
        },
        accent: {
          orange: '#FF4400',
          green: '#4ADE80',
        },
        surface: {
          light: '#F8F8F8',
          dark: '#000000',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
} 