/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "800px",
        600: "600px",
        500: "500px",
      },
      height: {
        400: "400px",
      },
      margin: {
        85: "370px",
      },

      important: true,
      screens: {
        small: { max: "639px" },
      },
    },
  },
  plugins: [],
};
