/** @type {import('tailwindcss').Config} */

// Import the default fontFamily from Tailwind
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Extend the fontFamily to include Clash Grotesk and default sans fonts
      fontFamily: {
        sans: ['Clash Grotesk', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
