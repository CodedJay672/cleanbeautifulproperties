/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#BFD1E6",
          200: "#BFD1D6",
          300: "#201E74",
        },
        gold: "#E0B435",
        "subtle-light": "#FFFFFC",
      },
    },
  },
  plugins: [],
};
