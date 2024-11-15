const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@types": path.resolve(__dirname, "src/types"), // Adjust based on your folder structure
    },
  },
  module: {
    rules: [
      // typescript file loader
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      // css or scss
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith("data:")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
