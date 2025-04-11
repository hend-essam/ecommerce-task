/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#F8F5F0",
          medium: "#E8E1D5",
          dark: "#D4C9B8",
        },
        accent: "#A68A64",
        "text-dark": "#3A3A3A",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
