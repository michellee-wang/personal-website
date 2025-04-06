/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'krub': ['var(--font-krub)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 