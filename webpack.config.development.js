const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'demos';
const publicURL = isProduction
  ? `https://elenapavel.github.io/${repository}`
  : '';
const base = isProduction ? '/demos' : '';

const port = process.env.PORT || 3000;

console.log(process.env);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '~': path.join(__dirname, 'src'),
    },
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
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
  ],
};
module.exports.optimization = {
  sideEffects: false,
  minimize: false,
};
