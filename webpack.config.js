const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')

module.exports = {
  entry: {
    index: { import: "./src/index.tsx" },
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
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
        test: /404.html$/,
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
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index", "react-vendors"],
    }),
     new PrerendererWebpackPlugin({
      // Required - Routes to render.
      routes: [ '/', '/slides', '/slides/week1' ],
      //renderer: '@prerenderer/renderer-jsdom', // Uncomment if you want to use jsdom
    })
  ],
};
