/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1D4ED8', light: '#3B82F6', dark: '#1E3A8A' },
        secondary: { DEFAULT: '#F59E0B', light: '#FBBF24', dark: '#B45309' },
        accent: { DEFAULT: '#d32f2f' },
        'neutral-medium': { DEFAULT: '#666' },
        'neutral-light': { DEFAULT: '#f8f9fa' },
        'neutral-dark': { DEFAULT: '#333' },
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'], heading: ['Poppins', 'sans-serif'] },
      animation: {
        'bgFade': 'bgFade 1s ease-out forwards',
        'gradientFade': 'gradientFade 1.5s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeInDown': 'fadeInDown 0.3s ease-out forwards',
      },
      keyframes: {
        bgFade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        gradientFade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};