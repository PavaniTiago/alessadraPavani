/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-slab': ['Roboto-slab', 'sans- serif'],
    },
    extend: {
      boxShadow:{
        'custom': 'inset 28px 0px 132px 0px rgba(0,0,0,0.95)'
      },
      screens:{
        '3xl': '1920px',
        'sm': '360px',
        'xsm': '280px',
      }
    },
  },
  plugins: [],
}
