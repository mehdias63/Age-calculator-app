/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rub: ["Rubik"],
    },
    extend: {
      colors: {
        "light-gray": "#DCDCDC",
        "light-blue": "#55C2E6",
      },
    },
  },
  plugins: [],
};

