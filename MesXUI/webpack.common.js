const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules", // Default modules directory
      path.resolve("github:Bharath-ilangovan/CDS", "node_modules/CDS/"),
    ],
    alias: {
      CDS: path.resolve(__dirname, "node_modules/CDS"), // Alias for CDS
    },
  },
  module: {
    rules: [
      // CDS
      {
        test: /\.m?js$/,
        include: /node_modules\/CDS/,
        use: {
          loader: "babel-loader", // Ensure Babel processes the files
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
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
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
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
