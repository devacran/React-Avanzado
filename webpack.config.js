const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram | Tu app de fotos de mascotas',
      shortname: 'Petgram :P',
      description: 'Con Petgram puedes compartir las fotos de tus mascotas',
      background_color: '#fff',
      theme_color: '#2196F3',
      icons: [
        {
          src: path.resolve('src/assets/icon.jpg'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)' // Es donde estan alojadas las imagenes
          ),
          handler: 'CacheFirst', // Para indicar que primero revise la cache
          options: {
            cacheName: 'images' // el bombre que tendra la cache
          }
        },
        {
          urlPattern: new RegExp(
            'https://petgram-server-devacran.vercel.app/graphql'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ]
}

// new WorkboxWebpackPlugin.GenerateSW({
//   runtimeCaching:[
//
//     ]

// options: {
// cacheName: 'images' //es el nombre que tendra la cache
// },
