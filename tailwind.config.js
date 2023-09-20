/** @/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cd: {
          drak : "#000022",
          sceondrey: "#D9D9D9 ",
          primary: "#3498db",
          card1: "#000022",
          card2: "#311432",
          card3:"#001F3F",
          contactForm: "#AAAAFF",
          nav:"#111133",
        }
      }
    },
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '5rem',
      xl: '6rem',
      '2xl': '8rem',
    },
  },
  plugins: [],
}
