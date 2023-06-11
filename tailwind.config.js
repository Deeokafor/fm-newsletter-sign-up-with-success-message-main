/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'ns-tmt': 'hsl(4, 100%, 67%)',
        'ns-dsg': 'hsl(234, 29%, 20%)',
        'ns-cg': 'hsl(235, 18%, 26%)',
        'ns-g': 'hsl(231, 7%, 60%)',
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}

