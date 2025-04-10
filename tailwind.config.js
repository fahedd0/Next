/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'], // This is referenced in your components
      },
      colors: {
        // Ensure blue shades are properly defined since they're used heavily
        blue: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#baddff',
          300: '#84caff',
          400: '#3da5ff',
          500: '#0a84ff',
          600: '#0064d3',
          700: '#0052ab',
          800: '#003b7a',
          900: '#00224c',
        },
      },
      animation: {
        blob: 'blob 3s infinite ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}