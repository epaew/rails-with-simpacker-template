import path from 'path';

import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import WebpackAssetsManifest from 'webpack-assets-manifest';

import { common } from './common';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../../rails/public/packs'),
    publicPath: '//localhost:3035/packs/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new StylelintWebpackPlugin({
      context: path.resolve(__dirname, '../src/sass/'),
    }),
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
