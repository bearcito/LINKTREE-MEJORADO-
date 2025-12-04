/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        glassWhite: "rgba(255, 255, 255, 0.08)",
        glassHighlight: "rgba(255, 255, 255, 0.2)",
      },
      keyframes: {
        wiggleFadeIn: {
          '0%': { transform: 'translateY(20px) rotate(-2deg)', opacity: '0' },
          '25%': { transform: 'translateY(-5px) rotate(1deg)', opacity: '0.5' },
          '50%': { transform: 'translateY(0) rotate(-1deg)', opacity: '0.7' },
          '75%': { transform: 'translateY(2px) rotate(1deg)', opacity: '0.85' },
          '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        wiggleFadeIn: "wiggleFadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
}
