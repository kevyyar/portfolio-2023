/** @type {import('tailwindcss').Config} */
export default {
  // mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Lato", "sans-serif"],
      quote: ["Playfair", "serif"],
    },
  },
  plugins: [],
};
