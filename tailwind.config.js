/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c: {
          1: "#1F1D2B",
          2: "#252836",
          3: "#2F3343",
          4: "#4C2B22",
          5: "#F7751E",
        },
      },
    },
  },
  plugins: [],
};
