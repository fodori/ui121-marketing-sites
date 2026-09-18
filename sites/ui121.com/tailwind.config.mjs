/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f5f0',
        night: '#0c1222',
        cobalt: '#1d4ed8',
        signal: '#0ea5e9',
        soft: '#64748b',
        line: '#e2e8f0',
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
