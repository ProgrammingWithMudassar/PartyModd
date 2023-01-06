/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': {'min': '0px', 'max': '576px'},

      'sm': {'min': '577px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    },
    extend: {
      fontFamily: {
        'RubikWetPaint': ['Rubik Wet Paint',],
      },
    },
  },
    plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}