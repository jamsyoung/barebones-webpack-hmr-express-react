'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: ['./src/index.js', 'webpack-hot-middleware/client']
  },
  output: {filename: '[hash].js', path: path.resolve(__dirname, 'dist'), publicPath: '/'},
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.js$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: 'src/index.html'})
  ]
};
