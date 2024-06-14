/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mountains': 'url("/mountains.png")',
        'planets': 'url("/planets.png")',
        'stars': 'url("/stars.png")',
        'sun': 'url("/sun.png")',
      })
    },
  },
  plugins: [],
}
