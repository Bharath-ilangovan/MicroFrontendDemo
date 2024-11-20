const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      src: path.resolve(__dirname, "src"),
      "@types": path.resolve(__dirname, "src/types/*"),
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Only handle CSS files
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         url: {
      //           filter: (url) => {
      //             if (url.startsWith("data:")) {
      //               return false;
      //             }
      //             return true;
      //           },
      //         },
      //       },
      //     },
      //     "sass-loader",
      //   ],
      // },
      // {
      //   test: /\.svg$/,
      //   use: ["file-loader"],
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
