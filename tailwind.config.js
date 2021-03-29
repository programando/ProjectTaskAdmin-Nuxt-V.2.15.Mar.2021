module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primarycolor: "#F9A826",
        azul: '#161d6f',
        rojo: '#f14668',
        verde: '#00917c',
        
      }
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
