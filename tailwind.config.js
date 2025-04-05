/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF4444', 
        },
        secondary: {
          DEFAULT: '#5C5557', 
        },
        background: {
          DEFAULT: '#FFFFFF', 
        },
      },
    },
  },
  plugins: [],
}