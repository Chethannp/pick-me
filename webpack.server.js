// -> Require statements for helper modules
const path = require("path");
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  // -> To inform webpack that we are building a bundle for nodeJs
  target: "node",

  // -> Tells webpack where the root file of our server application is
  entry: "./server/index.js",

  // Need this to avoid error when working with Express
  externals: [nodeExternals()],

  // -> Tells webpack where to put the output file that is generated
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },

  // -> Tells webpack to run babel on every file it runs through and also define the folders to exclude
  module: {
    rules: [
      {
        test: /\js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
