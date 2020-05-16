const path = require('path');

const merge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../public/packs'),
    publicPath: '/packs/',
    filename: '[name]-[hash].js',
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin({})],
  },
  plugins: [
    new WebpackAssetsManifest({
      publicPath: true,
      entrypoints: true,
      writeToDisk: true,
    }),
  ],
});
