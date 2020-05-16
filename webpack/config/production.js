const path = require('path');

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
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
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsWebpackPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]-[hash].css' }),
    new WebpackAssetsManifest({
      publicPath: true,
      entrypoints: true,
      writeToDisk: true,
    }),
  ],
});
