const webpack = require('webpack');

const defaultConfig = require('./webpack.base.js');

const baseConfig = defaultConfig();

module.exports = () => ({
  ...baseConfig,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.cssmodule\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[hash:base64]' },
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ].concat(baseConfig.module.rules),
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({ __API__: '"http://localhost:8443"' }),
  ]),
});
