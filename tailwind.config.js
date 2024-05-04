/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // xxsm: '365px',
      xsm: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'main': '	#2b2c36', //Indigo
        'accent': '#ffa633', //Orange
        'menu': '#cc8428', //Accent but a bit darker
        'text': 'black',
        'text-light': '#f2f2f2', //Essentially white
        'line': 'black',
        // 'footer-bg': '#242D37',
        // 'footer-text': 'grey',
      },
      height: {
        'screen-width': '100vw'
      }
  },
},
  plugins: [],
}