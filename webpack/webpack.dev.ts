import config from "./webpack.config";
import { merge } from "webpack-merge";

export default merge<Record<string, unknown>>(
  {
    mode: "development",
    devtool: "source-map",
    module: {
      rules: [{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }],
    },
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
  },

  config,
);
