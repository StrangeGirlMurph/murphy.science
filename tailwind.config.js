/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fav: "#5ec80d",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "bounce": "bounce-animation 0.8s infinite",
        "rainbow": "rainbow-animation 5s linear infinite",
      },
    },
  },
  plugins: [],
}

