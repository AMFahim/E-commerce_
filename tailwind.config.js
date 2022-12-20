/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: ({colors}) => ({
        ...colors,
        "primary": "#0170BA",
        "goldenrod": "#FF6A00"
      })
    },
  },
  plugins: [],
}
