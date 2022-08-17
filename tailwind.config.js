/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        merry: ["Merriweather"],
      },
      colors: {
        main: "#254866",
        second: "#B4E1F1",
      },
    },
  },
  // plugins: [require("tailwind-scrollbar")],
};
