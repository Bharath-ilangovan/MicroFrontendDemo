const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    // devtool: "inline-source-map",
    devtool: "eval-source-map",
    output: {
      publicPath: "http://localhost:3083/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 3083,
      historyApiFallback: {
        index: "/",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "QMS",
        filename: "remoteEntry.js",
        exposes: {
          "./MRCRelease":
            "./src/components/QualityManagement/MRCRelease/index.tsx",
        },
        shared: packageJson.dependencies,
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
