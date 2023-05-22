/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#961c1c",
        dark: "#0F172A",
        secondary: "#64748b",
        light: "#CBD5E1",
        navy: "#181823",
      },
      screens: {
        "2xl": "1320px",
      },
      gridTemplateColumns: {
        "auto-fit-100": "repeat(auto-fit,1fr)",
      },
      height: {
        128: "60vh",
      },
    },
  },
  plugins: [],
};
