/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#1A2690",
        lightgray: '#4A4A4A',
        darkgrey: "#292929",
        darkside: "#1F1F1F",
        lightblue: '#4361EE'
      },
      fontFamily: {
        open_sans: ["'Open sans'"],
      },
    },
  },
  plugins: [],
};
