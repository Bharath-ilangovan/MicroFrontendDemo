const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const prodConfig = {
    mode: "production",
    output: {
      publicPath: "/Security/",
      filename: "[name].[contenthash].js",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "Security",
        filename: "remoteEntry.js",
        exposes: {
          "./app": "./src/App.tsx",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, prodConfig);
};
