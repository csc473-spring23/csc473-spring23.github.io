const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: { import: "./src/index.tsx", dependOn: "react-vendors" }, // Changed the entry file name
    "react-vendors": ["react", "react-dom", "prop-types"],
      /**
    week1: {
      import: "./src/Presentation.tsx",
      dependOn: "react-vendors",
    },**/
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    // needed so that /slides works locally
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // add |ts
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mdx?$/,
        // NOTE: webpack runs right to left to mdx-js is first
        use: [
          {
            loader: "babel-loader",
            options: {},
          },
          {
            loader: "@mdx-js/loader",
            /** @type {import('@mdx-js/loader').Options} */
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // add .tsx, .ts
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", chunks: ["index", "react-vendors"] }),
      /**
    new HtmlWebpackPlugin({
      template: "./src/presentation.html",
      chunks: ["week1", "react-vendors"],
      filename: "slides/week1.html",
      title: "Week 1",
    }),**/
  ],
};
