/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        organic: {
          50: '#f3f7f0',
          100: '#e3ecde',
          200: '#c7d9bf',
          300: '#a3bf97',
          400: '#7da06e',
          500: '#5d8550',
          600: '#486b3d',
          700: '#3a5632',
          800: '#304529',
          900: '#283822',
          950: '#131e10',
        },
        brown: {
          50: '#faf6f1',
          100: '#f2e9dd',
          200: '#e4d0b8',
          300: '#d2b08c',
          400: '#c0936a',
          500: '#b07a4e',
          600: '#9a643f',
          700: '#7e4f34',
          800: '#69422e',
          900: '#573828',
          950: '#2f1d13',
        },
        lemon: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facd1f',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
