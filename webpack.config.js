const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'demos';
const publicURL = isProduction
  ? `https://elenapavel.github.io/${repository}`
  : '';
// const staticURL = isProduction ? `${publicURL}/static` : '/static';
const base = isProduction ? '/demos' : '';

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'index.js') },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
      '~': path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
