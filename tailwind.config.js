/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          light: "#FF7C7C",
          primary: "#FF6464",
          dark: "#f84c4c",
        },
        blue: {
          lighter: "#EDF7FA",
          light: "#00A8CC",
          dark: "#098EAB",
          darken: "#142850",
        },
        gray: {
          "lighter-opacity": "rgba(0, 0, 0, 0.1)",
          lighter: "#E0E0E0",
          light: "#8695A4",
        },
        black: {
          base: "#000000",
          dark: "#21243D",
        },
      },
      fontSize: {
        10: "10px",
        22: "22px",
        26: "26px",
        34: "34px",
        44: "44px",
      },
      lineHeight: {
        3.5: "14px",
        6.5: "26px",
        11: "44px",
        9.5: "38px",
        12.5: "50px",
        15: "60px",
        17: "68px",
      },
      spacing: {
        0.75: "3px",
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        8.5: "34px",
        9.5: "38px",
        11.5: "46px",
        12.5: "50px",
        13: "52px",
        13.5: "54px",
        14.5: "58px",
        15: "60px",
        15.5: "62px",
        17: "68px",
        17.5: "70px",
        19.5: "78px",
        21: "84px",
        22.5: "90px",
        31: "124px",
        35: "140px",
        37.5: "150px",
        39.5: "158px",
        45: "180px",
        50: "200px",
        60.5: "242px",
        61.5: "246px",
        112.5: "450px",
        100: "400px",
        125: "500px",
        150: "600px",
        160: "640px",
        "11/20": "55%",
        "calc-full-minus-54": "calc(100% - 216px)",
      },
      minWidth: {
        4: "16px",
        17: "68px",
        61.5: "246px",
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
      height: {
        initial: "initial",
      },
      minHeight: {
        37.5: "150px",
        40: "160px",
        45: "180px",
        75: "300px",
      },
      maxHeight: {
        25.5: "102px",
        200: "800px",
      },
      borderRadius: {
        10: "10px",
      },
      display: ["group-hover"],
      boxShadow: {
        "light-top": "2px -2px 8px rgba(0, 0, 0, 0.1);",
        "light-bottom": "2px 4px 8px rgba(0, 0, 0, 0.1);",
        "lining-lighter-blue": "-5px 10px 0px 5px rgba(237,247,250,1);",
        "light-white": "0px 4px 10px rgba(187, 225, 250, 0.25);",
        "hard-white": "0 0 16px 10px rgba(187, 225, 250, 0.25);",
        "card-primary":
          "0px 10px 15px -3px rgba(0, 0, 0, 0.2), 0px 4px 22px -2px rgba(0, 0, 0, 0.15);",
      },
      dropShadow: {
        "black-dark-outer-lighter": "0 0px 1px #21243D",
        "black-dark-outer": "0 0px 6px #21243D",
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
