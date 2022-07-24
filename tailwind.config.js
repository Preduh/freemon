/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "white-abstract": "url('/background.jpg')",
      },
      fontFamily: {
        pokemon: ["pokemon", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
}
