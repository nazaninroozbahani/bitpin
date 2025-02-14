/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bitpingray: "rgb(var(--bg-sb-default))",
        bitpingreen: "rgb(var(--bg-primary-default))",
      },
    },
  },
  plugins: [],
};
