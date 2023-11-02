const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssPluginCopy = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production' && process.env.NODE_ENV !== 'dev';
module.exports = {
  entry: {
    index: [path.resolve(__dirname, "src", "index.js")],
    addNumbers: [path.resolve(__dirname, "src", "scripts", "addNumbers.ts")],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })
    , ...(isProduction ? [new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    })] : []),
    ...(isProduction ? [new CssPluginCopy({
      filename: 'static/css/[name].[contenthash].css',
      })] : []),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /EditorStyle\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
            name: "[name].css",
          },
          },
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          "css-loader",
          "sass-loader",
         ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          isProduction ? CssPluginCopy.loader : 'style-loader',
          "css-loader",
          "sass-loader",
        ],
        exclude: /\/src\/EditorStyle\.scss$/
      },
    ],
  },
}