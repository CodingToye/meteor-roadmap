/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#f651ad",
        secondary: "#a5cc48",
        context: {
          success: {
            base: "#a5cc48",
            dark: "#4a661c",
          },
          failure: {
            base: "#c53123",
            dark: "#4b110d",
          },
          warning: {
            base: "#ffce24",
            dark: "#805b00",
          },
          info: "#fff0d3",
          disaster: "#fe3b02",
          tool: {
            base: "#fca102",
            dark: "#663800",
          },
        },
        neutral: {
          base: "#0f0f0f",
          mid: "#0e172b",
          light: "#2a2a3c",
          lighter: "#f0f0f0",
        },
        code: {
          base: "#193549",
          javascript: "#f0d91d",
        },
      },
      fontFamily: {
        headlines: ['"Rokkitt",serif'],
        body: ['"Raleway", sans-serif'],
        code: ['"Inconsolata"'],
        signature: ['"Playpen Sans"'],
      },
      gridTemplateColumns: {
        main: "200px 1fr",
      },
    },
  },
  safelist: ["lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"],
  plugins: [],
};
