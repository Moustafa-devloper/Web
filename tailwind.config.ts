/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8edff',
          200: '#b7ddff',
          300: '#7ec2ff',
          400: '#3ea3ff',
          500: '#1c87f5',
          600: '#1169d1',
          700: '#0f55a7',
          800: '#124a8b',
          900: '#153f71',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
