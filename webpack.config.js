const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } =require("vue-loader/dist/index");

module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./src")
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
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     outputPath: "img",
        //     name: "[name]_[hash:8].[ext]"
        //   }
        // }
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       // plugins: [
      //       //   "@babel/plugin-transform-arrow-functions",
      //       //   "@babel/plugin-transform-block-scoping"
      //       // ]
      //       presets: [
      //         "@babel/preset-env"
      //       ]
      //     }
      //   }
      // }
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: "./src/public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/public",
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}