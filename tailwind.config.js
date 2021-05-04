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
   purge: {
      content: ["./src/**/*.html", "./src/**/*.vue"],
      options: {
         safelist: [
            ...Object.keys(colors).map((key) => `bg-${key}`),
            ...Object.keys(colors).map((key) => `text-${key}`),
         ],
      },
   },
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors,
      extend: {
         fontFamily: {
            // don't forget to include font to  html header
            default: ["Montserrat", ...defaultTheme.fontFamily.sans],
            lato: ["Lato", ...defaultTheme.fontFamily.sans],
         },
      },
      screens: {
         sm: "600px",
         md: "1024px",
         lg: "1440px",
         xl: "1920px",
      },
      fontSize: {
         h1: "6rem", // 96px @16
         h2: "4rem", // 64px @16
         h3: "3rem", // 48px @16
         h4: "2rem", // 32px @16
         h5: "1.5rem", // 24px @16
         h6: "1.25rem", // 20px @16
         body: "1rem", // 16px @16
         body2: ".875rem", // 14px @16
         caption: ".75rem", // 12px @16
         caption2: ".625rem", // 10px @16
         18: "1.125rem", // 18px @16
         36: "2.25rem", // 36px @16
      },
      boxShadow: {
         none: "none",
         sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
         default:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
         md:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
         lg:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
         xl:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
         "quasar-style":
            "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px",
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
