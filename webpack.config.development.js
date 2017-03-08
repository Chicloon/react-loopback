var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  // entry: [
  //   'webpack-hot-middleware/client',
  //   './client/index'
  // ],
   devtool: '#cheap-module-eval-source-map', // http://webpack.github.io/docs/configuration.html#devtool
  entry: {
    a: [ 'webpack-hot-middleware/client?reload=true', './client/index'],   
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'client')
    },{
      test: /\.json$/, 
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};