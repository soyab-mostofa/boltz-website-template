module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#A8FF35",
        "green-2": "#87D322",
        "button-hover": "#8CC83A",
      },
    },
  },
  plugins: [],
};
