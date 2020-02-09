const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const entries = require("./entries.js");

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "../../public/packs"),
    publicPath: "/packs/",
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all",
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3 }],
                "@babel/preset-react",
                "@babel/preset-typescript"
              ]
            }
          }
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new WebpackAssetsManifest({
      publicPath: true,
      entrypoints: true,
      writeToDisk: true
    })
  ]
};
