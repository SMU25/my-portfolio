/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          light: "#FF6464",
          primary: "#f84c4c",
        },
        blue: {
          lighter: "#EDF7FA",
          light: "#00A8CC",
        },
        black: {
          base: "#000000",
          dark: "#21243D",
        },
        gray: {
          lighter: "#E0E0E0",
          light: "#8695A4",
        },
      },
      fontSize: {
        22: "22px",
        26: "26px",
        44: "44px",
      },
      lineHeight: {
        6.5: "26px",
        11: "44px",
        9.5: "38px",
        15: "60px",
      },
      spacing: {
        4.5: "18px",
        6.5: "26px",
        9.5: "38px",
        15: "60px",
        17: "68px",
        17.5: "70px",
        35: "140px",
        60.5: "242px",
      },
      maxWidth: {
        104.5: "418px",
        118: "472px",
        406: "1624px",
      },
      boxShadow: {
        "lining-lighter-blue": "-5px 10px 0px 5px rgba(237,247,250,1);",
        "light-white": "0px 4px 10px rgba(187, 225, 250, 0.25);",
      },
    },
  },
  plugins: [],
};
