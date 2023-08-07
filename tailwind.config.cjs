/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fav: "#5ec80d",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "bounce-animation": "bounce-animation 0.8s infinite",
        "rainbow-animation": "rainbow-animation 5s linear infinite",
      },
    },
  },
  plugins: [],
}
