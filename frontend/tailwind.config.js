import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist//*.js",
    "node_modules/react-daisyui/dist//*.js",
  ],
  theme: {
    extend: {},
    colors: {
      lavender: "#DFD3EE",
      ...colors,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  darkMode: "class",
};
