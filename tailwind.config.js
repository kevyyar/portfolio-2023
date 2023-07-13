/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Lato", "sans-serif"],
      quote: ["Playfair", "serif"],
    },
  },
  plugins: [require("preline/plugin")],
};
