/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39DB4A",
        gray: "#555555",
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  }
  },
  plugins: [require('flowbite/plugin')],
}