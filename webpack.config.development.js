var path = require('path');
var webpack = require('webpack');

module.exports = { 
  devtool: '#cheap-module-eval-source-map', // http://webpack.github.io/docs/configuration.html#devtool
  entry: {
    a: ['webpack-hot-middleware/client?reload=true', './client/index'],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
    inline: true,
    colors: true,
    historyApiFallback: true,
  },
  resolve:{
    modulesDirectories: ['node_modules', 'lib', 'client', 'vendor']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
        },
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.(scss|sass)$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass'
        ],
        
      }, {
        test: /\.json$/,
        loader: 'json'
      },      
    ],
    sassLoader: {
    includePaths: ['./vendor']
  }
  },

};