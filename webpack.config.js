const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const getData = require('./get-data');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: 'css-loader',
        })),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      preloadedState: getData(path.join(__dirname, './src/data')),
      title: 'Unionen Seniorer Sjuhall',
    }),
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([
      { from: 'admin/**', context: 'src/' },
      { from: 'uploads/**', to: 'images/', context: 'src/assets/' },
      { from: '_redirects' },
    ], { copyUnmodified: true }),
  ],
};
