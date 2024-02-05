/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        'xs': '300px', // or any size you prefer
      },
    },
  },
  plugins: [],
}

