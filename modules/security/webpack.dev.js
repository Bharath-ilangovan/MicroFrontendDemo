const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:3082/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 3082,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "Security",
        filename: "remoteEntry.js",
        exposes: {
          "./app": "./src/App",
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
