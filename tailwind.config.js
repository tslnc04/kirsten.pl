/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./www/**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
    },
    extend: {
      height: {
        "safari-screen": "calc(100vh - env(safe-area-inset-bottom))",
      },
    },
  },
  plugins: [],
};
