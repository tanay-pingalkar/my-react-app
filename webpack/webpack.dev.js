const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(
  {
    mode: "development",
    devtool: "source-map",
    module: {
      rules: [{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }],
    },
  },
  config,
);
