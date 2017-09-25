var path = require('path')
var webpack = require('webpack')

module.exports = {
  // configuration
  entry: {
    polyfill: ['babel-polyfill', 'whatwg-fetch']
  },
  output: {
    publicPath: './dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    libraryTarget: 'amd'
  },
  performance: {
    hints: false
  }
}

module.exports.plugins = [
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'manifest',
  //   minChunks: Infinity
  // }),
  new webpack.NamedChunksPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true
    },
    output: {
      comments: false
    }
  })
]
