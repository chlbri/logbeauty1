/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'index.html'],
  theme: {
    extend: {
      colors: {
        darkiss: '#23242a',
        darkbox: '#1c1c1c',
        form: '#28292d',
        accent: '#45f3FF',
      },
      backgroundImage: {
        linear: 'linear-gradient(0deg, transparent, #45f3FF, #45f3FF)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};
