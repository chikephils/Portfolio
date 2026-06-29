/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#04152d",
        primary: "#576cbc",
        secondary: "#19376d",
      },
    },
  },
  plugins: [],
};
