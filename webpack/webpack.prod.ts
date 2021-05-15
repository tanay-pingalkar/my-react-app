import { merge } from "webpack-merge";
import config from "./webpack.config";
export default merge<Record<string, unknown>>(
  {
    mode: "production",
  },
  config,
);
