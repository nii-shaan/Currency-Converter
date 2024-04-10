/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fieldOne:"#8576FF",
        fieldTwo:"#A3FFD6"


      }
    },
  },
  plugins: [],
}