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
        "cbounce": "cbounce 0.8s infinite",
        "wiggle": "wiggle 0.4s ease-in-out infinite",
      },
      keyframes: {
        cbounce: {
          "0%, 100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
}
