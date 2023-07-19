/** @type {import('tailwindcss').Config} */
export default {
  content: ["./imdex.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056ff",
        secondary: "#00153f",
        dark: "#111",
        light: "#fefefe"
      }
    }
  },
  plugins: []
};
