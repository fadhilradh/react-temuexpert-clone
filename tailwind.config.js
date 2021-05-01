const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
   black: "#000000",
   "basic-80": "#0F0F0F",
   "basic-70": "#4B4B4B",
   "basic-60": "#9E9E9E",
   "basic-50": "#C4C4C4",
   "basic-40": "#DBDBDB",
   "basic-30": "#E8E8E8",
   "basic-20": "#F2F2F2",
   gray: "#666666",
   "gray-10": "#F4F4F4",
   "gray-20": "#C2C2C2",
   "gray-30": "#676464",
   "gray-40": "#E5E7EB",
   "gray-50": "#EEEEEE",
   "gray-60": "#878f91",
   "gray-70": "#6d6e75",
   blue: "#2757CC",
   "blue-10": "#3083FE",
   "blue-20": "#264267",
   white: "#FFFFFF",
   primary: "#2757CC",
   secondary: "#3083FE",
   tertiary: "#AADADC",
   success: "#82BD2F",
   warning: "#FFDC26",
   info: "#A026FF",
   "alert-info": "#E6F7FF",
   "alert-info-dark": "#91D5FF",
   danger: "#E43C4A",

   "brand-whatsapp": "#075E54",
};

module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors,
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
