/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'custom': 'inset 28px 0px 132px 0px rgba(0,0,0,0.95)'
      }
    },
  },
  plugins: [],
}
