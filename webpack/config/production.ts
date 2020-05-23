import path from 'path';

import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import WebpackAssetsManifest from 'webpack-assets-manifest';

import { common } from './common';

export default merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../rails/public/packs'),
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
