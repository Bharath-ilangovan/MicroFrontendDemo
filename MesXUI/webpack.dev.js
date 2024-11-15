const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:3080/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 3080,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "MesXUI",
        remotes: {
          MasterData: "MasterData@http://localhost:3081/remoteEntry.js",
          SecurityApp: "Security@http://localhost:3082/remoteEntry.js",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
