const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = () =>
  merge(common, {
    mode: "development",
    output: {
      pathinfo: false,
      publicPath: "/",
    },
    devtool: "eval-cheap-module-source-map",
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
      host: "0.0.0.0",
    },
  });
