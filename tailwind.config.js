/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          light: "#FF6464",
        },
        blue: {
          light: "#00A8CC",
        },
        black: {
          dark: "#21243D",
        },
        gray: {
          light: "#8695A4",
        },
      },
      spacing: { 17.5: "70px" },
      maxWidth: {
        450: "1800px",
      },
    },
  },
  plugins: [],
};
