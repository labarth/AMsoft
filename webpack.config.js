const path = require('path');
const webpack = require('webpack');
const srcDir = path.resolve(__dirname, 'src');
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  devtool: 'source-map',
  resolve: {
    modules: [
      srcDir,
      'node_modules',
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: 'Chrome',
    port: 8008,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AMsoft',
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
}