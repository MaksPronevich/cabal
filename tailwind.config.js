/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      eczar: "'Eczar', serif",
      plex: "'IBM Plex Mono', monospace",
    },
    colors: {
      white: "#FFFFFF",
      black: "#090909",
      "gray-100": "#D3D4D3",
      "gray-200": "#D1D1D3",
    },
  },
  plugins: [],
};
