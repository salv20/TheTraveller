/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#5f5e5c",
        darkpink: "#e69c8a",
        orange: "#f18700",
        lightorange: "#d9644d",
        dawhite: "#fafafa",
        light: "#fff8f2",
      },
    },
  },
  plugins: [],
};
