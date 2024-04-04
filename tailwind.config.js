/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cursive": "Cedarville Cursive"
      },
      colors: {
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        "transparent": "var(--transparent)",
      }
    },
  },
  plugins: [],
}