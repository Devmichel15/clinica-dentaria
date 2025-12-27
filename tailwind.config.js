/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],    // textos gerais
        display: ["Poppins", "sans-serif"], // títulos e destaques
      },
    },
  },
  plugins: [],
};
