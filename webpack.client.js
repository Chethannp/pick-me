// -> Require statements for helper modules
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

const clientConfig = {
  // -> Tells webpack where the root file of our client application is
  entry: "./src/client/index.js",

  // -> Tells webpack where to put the output file that is generated
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js"
  }
};

//Merge the common modules
module.exports = merge(common, clientConfig);
