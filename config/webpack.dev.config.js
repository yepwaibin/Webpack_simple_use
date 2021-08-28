const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
  },
})