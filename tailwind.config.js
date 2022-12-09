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
          lighter: "#EDF7FA",
          light: "#00A8CC",
        },
        black: {
          dark: "#21243D",
        },
        gray: {
          light: "#8695A4",
        },
      },
      fontSize: {
        44: "44px",
      },
      lineHeight: {
        15: "60px",
      },
      spacing: {
        4.5: "18px",
        9.5: "38px",
        17: "68px",
        17.5: "70px",
        35: "140px",
        60.5: "242px",
      },
      maxWidth: {
        118: "472px",
        406: "1624px",
        450: "1800px",
      },
      boxShadow: {
        "lining-lighter-blue": "-5px 10px 0px 5px rgba(237,247,250,1);",
      },
    },
  },
  plugins: [],
};
