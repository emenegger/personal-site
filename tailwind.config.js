/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-major-mono)', 'monospace'],
        bebas: ['var(--font-bebas-neue)', 'sans-serif'],
        satisfy: ['var(--font-satisfy)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}