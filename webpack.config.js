var path = require('path')
var webpack = require('webpack')

module.exports = {
  // configuration
  entry: {
    // fileA: './src/fileA.ts',
    polyfill: ['babel-polyfill', 'whatwg-fetch'],
    output: './src/main.ts'
  },
  output: {
    publicPath: './dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  }
}

module.exports.plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  }),
  new webpack.NamedChunksPlugin(),
  new webpack.optimize.UglifyJsPlugin()
]
