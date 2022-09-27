const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/navigation.js" },
  output: {
    path: path.resolve(__dirname, "dist"), //permite saber donde se encuentra
    //nuestro proy para poderlo usar
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  mode: "development",
  resolve: {
    //pasandole extensiones
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, //utiliza cualquier extension mjs o js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.scss$/i, //utiliza cualquier extension de css
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //utiliza cualquier extension de png
        type: "asset/resource",
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true, //insercion de elementos
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name][contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: "assets",
        },
      ],
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    watchFiles: path.join(__dirname, "./**"),
    compress: true,
    historyApiFallback: true,
    port: 3007,
    open: true,
  },
};
