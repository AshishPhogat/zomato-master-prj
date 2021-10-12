module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        zomato :
              {
                50: '#ffe5e7',
                100: '#fabac0',
                200: '#f08f96',
                300: '#e9636e',
                400: '#e13744',
                500: '#c81e2b',
                600: '#9c1520',
                700: '#700e17',
                800: '#46060c',
                900: '#1e0002',
              },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
