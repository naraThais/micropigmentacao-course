/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          light: "#f8f3f6",
          100: "#fdf8fc",
          200: "#f5e6e8",
          300: "#f8f0f2",
          400: "#d4a5a5",
          500: "#c89a9a",
          600: "#b88d8d",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {},
      keyframes: {
        float: {
          "0%": { transform: "translateX(-50px) translateY(-50px)" },
          "100%": { transform: "translateX(50px) translateY(50px)" },
        },
      },
    },
  },
  plugins: [],
};
