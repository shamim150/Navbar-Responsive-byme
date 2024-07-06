/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'DM': ['DM Sans', 'sans-serif']
      
    },


    extend: {
      colors: {
        'primary': '#262626',
      },
    },
  },
  plugins: [],
}