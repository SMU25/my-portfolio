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
          darken: "#142850",
        },
        gray: {
          lighter: "#E0E0E0",
          light: "#8695A4",
        },
        black: {
          base: "#000000",
          dark: "#21243D",
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
        5.5: "22px",
        6.5: "26px",
        9.5: "38px",
        12.5: "50px",
        13.5: "54px",
        15: "60px",
        17: "68px",
        17.5: "70px",
        21: "84px",
        35: "140px",
        60.5: "242px",
      },
      maxWidth: {
        104.5: "418px",
        118: "472px",
        323.5: "1294px",
        "1/2": "50%",
      },
      boxShadow: {
        "lining-lighter-blue": "-5px 10px 0px 5px rgba(237,247,250,1);",
        "light-white": "0px 4px 10px rgba(187, 225, 250, 0.25);",
      },
    },
  },
  plugins: [],
};
