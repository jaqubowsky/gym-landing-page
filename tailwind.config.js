/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbox: "rgba(0, 0, 0, 0.8)",
        trBlack: "rgba(0, 0, 0, 0.65)",
        trYellow: "rgba(253, 224, 71, 0.65)",
      },
    },
  },
  plugins: [],
};
