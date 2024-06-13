/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#f651ad",
        secondary: "#a5cc48",
        context: {
          success: "#a5cc48",
          failure: "red",
          warning: "#ffce24",
          info: "#fff0d3",
          disaster: "#fe3b02",
        },
        neutral: {
          base: "#0f0f0f",
          light: "#2a2a3c",
          mid: "#0e172b",
        },
        code: {
          base: "#193549",
          javascript: "#f0d91d",
        },
      },
      fontFamily: {
        sans: ['"Roboto",sans-serif'],
        code: ['"Inconsolata"'],
        signature: ['"Playpen Sans"'],
      },
    },
  },
  safelist: ["lg:grid-cols-2", "lg:grid-cols-4"],
  plugins: [],
};
