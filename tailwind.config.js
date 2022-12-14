/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#FF6464",
          dark: "#f84c4c",
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
        17: "68px",
      },
      spacing: {
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        8.5: "34px",
        9.5: "38px",
        12.5: "50px",
        13.5: "54px",
        15: "60px",
        17: "68px",
        17.5: "70px",
        21: "84px",
        22.5: "90px",
        35: "140px",
        37.5: "150px",
        45: "180px",
        60.5: "242px",
        112.5: "450px",
      },
      maxWidth: {
        61.5: "246px",
        72.5: "290px",
        88.5: "354px",
        92: "368px",
        95: "380px",
        104.5: "418px",
        118: "472px",
        150: "600px",
        161: "644px",
        195: "780px",
        214: "856px",
        323.5: "1294px",
        "1/2": "50%",
      },
      maxHeight: {
        25.5: "102px",
      },
      boxShadow: {
        "lining-lighter-blue": "-5px 10px 0px 5px rgba(237,247,250,1);",
        "light-white": "0px 4px 10px rgba(187, 225, 250, 0.25);",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
        gl: "1300px",
        xl: "1614px",
      },
    },
  },
  plugins: [],
};
