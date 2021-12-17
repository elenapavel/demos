const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'demos';
const publicURL = isProduction
  ? `https://elenapavel.github.io/${repository}`
  : '';
const staticURL = isProduction ? `${publicURL}/static` : '/static';
const base = isProduction ? '/demos' : '';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: isProduction
      ? `/${repository}`
      : '/' + path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: publicURL,
  },
  devServer: {
    historyApiFallback: true,
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
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
