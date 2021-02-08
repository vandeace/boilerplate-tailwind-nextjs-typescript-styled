const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        "white-blue": "#E7EDFD",
        "blue-1": "#D3E2FE",
        "blue-2": "#A9BADA",
        "blue-3": "#93A5D0",
        "blue-4": "#637AA6",
        "blue-5": "#466289",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
