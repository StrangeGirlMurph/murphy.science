/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        fav: "#5ec80d",
        cblue: "#0C93CD",
        cgreen: "#87BA23",
        cyellow: "#FBD537",
        corange: "#EB945F",
        cpink: "#E04A68",
        cpurple: "#98399A",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "bouncy": "bouncy 0.8s infinite",
        "rainbow": "rainbow 5s linear infinite",
      },
    },
  },
  plugins: [],
}
