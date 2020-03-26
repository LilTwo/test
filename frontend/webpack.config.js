const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "my-bundle.js,",
  },
  module: {
    rules: [{test: /\.tsx?$/, use: "awesome-typescript-loader" }],
  },
  resolve: {
    extensions: ["tsx", "ts"],
  },
};
