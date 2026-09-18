/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#050806',
        ink: '#ecfdf5',
        accent: '#22c55e',
        muted: '#6b7280',
        panel: '#0b1410',
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
