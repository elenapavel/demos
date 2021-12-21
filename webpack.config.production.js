const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    home: './src/pages/Home/index.js',
    flamingo: './src/pages/Flamingo/Home/index.js',
    'flamingo/services': './src/pages/Flamingo/Services/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/demos/',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      '~': path.join(__dirname, 'src'),
      '~c': path.join(__dirname, 'src', 'components'),
      '~s': path.join(__dirname, 'src', 'sections'),
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
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
                localIdentName: '[hash:base64]',
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64]',
              },
              sourceMap: true,
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'static' }],
    }),
  ],
};
module.exports.optimization = {
  sideEffects: false,
  minimize: false,
};
