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
        azul: '#161d6f',
        rojo: '#f14668',
        verde: '#00917c',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
