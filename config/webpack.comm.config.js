const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } =require("vue-loader/dist/index");

module.exports = {
  target: "web",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
           "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: "../public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ]
}
