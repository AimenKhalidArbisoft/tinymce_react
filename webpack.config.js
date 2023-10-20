const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
    }),
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
        test: /\.(sa|sc|c)ss$/,
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
}