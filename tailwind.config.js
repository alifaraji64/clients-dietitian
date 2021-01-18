//process.env.NODE_ENV = 'production'
process.env.NODE_ENV = 'development'
console.log('env', process.env.NODE_ENV)
module.exports = {
  purge: [
    './public/index.html',
    './src/views/*.vue',
    './src/components/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fruits-img': "url('~@/assets/images/fruits.png')",
       }),
    },
    scale:{
      '170': '1.7',
      '200': '2',
      '60': '0.6',
    },
    screens:{
      'sm': {'max': '570px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}