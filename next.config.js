// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const withStylus = require('@zeit/next-stylus')

// const cssLoaderConfig = require('@zeit/next-css/css-loader-config')

// module.exports = (nextConfig = {}) => {
//   return Object.assign({}, nextConfig, {
//     webpack(config, options) {
//       if (!options.defaultLoaders) {
//         throw new Error(
//           'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
//         )
//       }

//       const { dev, isServer } = options
//       const {
//         cssModules,
//         cssLoaderOptions,
//         postcssLoaderOptions,
//         stylusLoaderOptions = {}
//       } = nextConfig

//       options.defaultLoaders.stylus = cssLoaderConfig(config, {
//         extensions: ['styl'],
//         cssModules,
//         cssLoaderOptions,
//         postcssLoaderOptions,
//         dev,
//         isServer,
//         loaders: [
//           {
//             loader: 'stylus-loader',
//             options: stylusLoaderOptions
//           }
//         ]
//       })

//       config.module.rules.push({
//         test: /\.styl$/,
//         use: options.defaultLoaders.stylus
//       })

//       if (typeof nextConfig.webpack === 'function') {
//         return nextConfig.webpack(config, options)
//       }

//       if (!isServer) {
//         nextConfig.node = {
//           fs: 'empty'
//         }
//       }

//       return config
//     }
//   })
// }


module.exports = Object.assign
(
  
  withStylus({
    webpack(config, { isServer }) {
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      return config
    }
  }), 
  {
    assetPrefix: '',
  },
  {
    images: {
      domains: ['image-hosting.xiaoxili.com'],
    }
  },
    
)
