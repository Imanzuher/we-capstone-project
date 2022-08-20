/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        100: "800px",
        600: "600px",
      },
      height: {
        400: "400px",
      },
      margin: {
        85: "370px",
      },

      important: true,
    },
  },
  plugins: [],
};
