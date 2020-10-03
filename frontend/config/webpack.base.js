const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

const getConfig = () => ({
  context: rootPath,
  entry: { main: path.resolve(rootPath, 'src/index.js') },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'hashed',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks(chunk) {
            return chunk.name === 'main';
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        rules: [{
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        }],
      },
      {
        test: /\.svg/,
        use: ['svg-url-loader'],
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        rules: [{ use: ['file-loader'] }],
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: path.resolve(rootPath, 'dist/index.html'),
      template: path.resolve(rootPath, 'index.html'),
    }),
  ],
});

module.exports = getConfig;
