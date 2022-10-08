/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontSize: {
      base: "0.9375rem",
      "2xl": "1.40625rem",
    },
    lineHeight: {
      base: "1.40625rem",
      "2xl": "1.875rem",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
