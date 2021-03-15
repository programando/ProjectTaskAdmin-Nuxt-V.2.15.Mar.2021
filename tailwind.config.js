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
        azulOscuro: '#161d6f',
        azul: '1b6ca8',
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
