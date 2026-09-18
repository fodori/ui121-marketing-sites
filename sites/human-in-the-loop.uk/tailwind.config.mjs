/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07080c',
        mist: '#e8e6e1',
        ember: '#ff5c33',
        voltage: '#7cf0ff',
        slate: '#1a1d27',
        hush: '#8b90a0',
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
    },
  },
  plugins: [],
}
