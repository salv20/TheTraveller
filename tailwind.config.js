/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "850px",
      },
      colors: {
        lightgray: "#5f5e5c",
        darkpink: "#e69c8a",
        orange: "#f18700",
        lightorange: "#d9644d",
        dawhite: "#fafafa",
        light: "#fff8f2",
      },
      spacing: {
        eighty: "90rem",
        nineper: "80%",
      },
      backgroundImage: {
        heading: "linear-gradient(90deg, #fdf0df, #fdf0df, white, #fdf0df)",
        heroone: "linear-gradient(80deg, #fdf0df, white, #fdf0df)",
        services: "linear-gradient(100deg, #fff6ee, #fcfcfc, #fff6ee)",
        footer: "linear-gradient(90deg, #fdf0df, #f7f7f7, #f7f7f7, #fff3e7)",
        places: "linear-gradient(100deg, #fdf0df, #f7f7f7, #fff8f0, #fef4ea)",
        visit: "linear-gradient(90deg, #f18670, #efa039)",
        subscribe: "linear-gradient(150deg,#e5d3bd, #fbf0e4, #fbf0e4,#e69c8a)",
      },
    },
  },
  plugins: [],
};
