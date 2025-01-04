/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(11 23 26)",
        secondary: "#aaa6c3",
        tertiary: "rgb(14 42 49)",
        "black-100": "rgb(24, 26, 26)",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15pxrgb(30, 48, 53)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};