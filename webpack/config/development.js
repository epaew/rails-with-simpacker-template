const path = require('path');
const merge = require('webpack-merge');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '//localhost:3035/packs/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
    ],
  },
  plugins: [
    new StylelintWebpackPlugin({
      configFile: path.resolve(__dirname, '../../.stylelintrc.yaml'),
      context: path.resolve(__dirname, '../src/sass/'),
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3035,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
