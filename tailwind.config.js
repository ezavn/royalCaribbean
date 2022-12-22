/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
        poppins: ["Poppins", "serif"],
        rubik: ["Rubik", "serif"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        orange: "#E9973E",
        darkOrange: "#A63227",
        grey: "#3F3F3F",
        lightGrey: "#777",
        blue: "#0072BA",
        lightBlue1: "#82CCEF",
        lightBlue2: "#0791BE",
        darkBlue: "#162241",
        yellow: "#FFBC00",
        green: "#5A9D6E",
        popupBlue: "#5971B4",
        purple: "#892073",
        popupYellow: "#F0C444",
        popupOrange: "##E06B38",
        pink: "#DC5781",
        grey3F: "#3f3f3f",
      },
      margin: {
        section: "70px",
        sectionMB: "50px",
      },
      spacing: {
        section: "70px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
