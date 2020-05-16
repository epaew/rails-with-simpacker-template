const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const common = require('./common.js');

module.exports = merge({
  customizeArray(base, production, key) {
    if (key === 'plugins') {
      const obj = {};
      [...base, ...production].forEach(plugin => {
        obj[plugin.constructor.name] = plugin;
      });
      return Object.values(obj);
    }

    return undefined; // Fall back to default strategy.
  },
})(common, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].js',
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsWebpackPlugin({})],
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name]-[hash].css' })],
});
