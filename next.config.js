// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const withStylus = require('@zeit/next-stylus')

module.exports = Object.assign(withStylus({
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // }
}), {
  assetPrefix: '',
})
