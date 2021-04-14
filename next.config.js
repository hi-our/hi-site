// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const withStylus = require('@zeit/next-stylus')

module.exports = Object.assign
  (withStylus({
    // cssModules: true,
    // cssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName: "[local]___[hash:base64:5]",
    // }
  }), 
  {
    assetPrefix: '',
  },
  {
    images: {
      domains: ['image-hosting.xiaoxili.com'],
    }
  },
    {
      webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }

        return config
      }
    }
)
