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
        'main': '#2b2c36', //Dark Indigo
        'accent': '#8bc34a', //Light Green
        'menu': '#669036', //Accent but a bit darker
        'text': 'black',
        'text-light': 'white',
        'line': 'black',
        'footer-icon': '#fee5b5'
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