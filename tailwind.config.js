/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: "#0F103F",
      },
      backgroundImage: {
        linearBg: "linear-gradient(169deg, #C961DE 0%, #2954A3 100%)",
      },
      boxShadow: {
        btnShad: "0px 10px 20px 0px rgba(8, 12, 33, 0.15)",
      },
      fontFamily: {
        styleFont: "'Clicker Script', cursive",
      },
    },
  },
  plugins: [],
};
