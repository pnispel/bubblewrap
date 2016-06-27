'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    server: 'webpack-dev-server/client?http://localhost:8080',
    lib: './src/index',
    examples: './examples/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new FlowStatusWebpackPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }]
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/'
  }
}
