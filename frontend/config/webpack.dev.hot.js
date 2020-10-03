const webpack = require('webpack');
const path = require('path');

const defaultConfig = require('./webpack.base.js');

const baseConfig = defaultConfig();

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: { main: ['webpack-dev-server/client?http://localhost:3000/', './src/index.js'] },
  devServer: {
    contentBase: path.resolve(baseConfig.context, 'dist'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(baseConfig.context, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.cssmodule\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: { localIdentName: '[path][name]__[local]' },
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ].concat(baseConfig.module.rules),
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      __API__: '"http://localhost:8080/v1"',
      __GRAFANA_URL__: '"https://grafana.epicse.fr/d/epicse_back/epicse-back-statistics?orgId=1&refresh=10s&var-application=localhost&var-instance=localhost:8080"',
      __STATIC_URL__: '"https://feature-278.static.epicse.fr/"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]),
};
