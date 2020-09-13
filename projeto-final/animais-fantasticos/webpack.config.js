const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./js/index.js"],
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
