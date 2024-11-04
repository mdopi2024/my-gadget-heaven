/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        backGournd : "url('./assets/banner.jpg')",
      },
    },
  },
  plugins: [ require('daisyui'),],
}