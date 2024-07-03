/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1260px",
      },
    },
    fontFamily: {
      serif: ["Hahmlet", "serif"],
      ["sans-serif"]: ["Roboto", "sans-serif"],
    },

    extend: {
      fontSize: {
        "heading-1": "56px",
        "heading-2": "48px",
        "heading-3": "40px",
        "heading-4": "32px",
        "heading-5": "24px",
        lg: "18px",
        base: "16px",
      },

      colors: {
        primary: {
          DEFAULT: "#002D42",
          62: "#002D429E",
          81: "#002D42CF",
        },
        black: "#333333",
        white: "#FFFFFF",
        pink: "#FFEEE7",
      },
    },
  },
  plugins: [],
};
