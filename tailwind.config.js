/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(110.36deg, #F539F8 0%, #C342F9 43.55%, #5356FB 100%)',
        'custom-gradient-hover': 'linear-gradient(110.36deg, #C342F9 0%, #F539F8 43.55%, #5356FB 100%)', 

      },
    },
  },
  plugins: [],
}

