/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{css,ts,tsx}"],
  theme: {
    extend: {
      "fontFamily": {
        'jockey': ["JockeyOne"]
      }
    },
  },
  plugins: [],
};
