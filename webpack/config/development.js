const path = require('path');

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../../public/packs'),
    publicPath: '//localhost:3035/packs/',
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new WebpackAssetsManifest({
      publicPath: true,
      entrypoints: true,
      writeToDisk: true,
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
