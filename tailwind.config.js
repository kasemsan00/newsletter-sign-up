/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Tomato: "hsl(4,100%,67%)",
        DarkSlateGrey: "hsl(234,29%,20%)",
        CharcoalGrey: "hsl(235,18%,26%)",
        Grey: "hsl(231,7%,60%)",
        White: "hsl(0,0%,100%)",
        button1: "#ff5379",
        button2: "#ff693e",
      },
    },
  },
  plugins: [],
};
