const path = require("path"); /* nodeJS module，用來拼接路徑 */
const HtmlWebpackPlugin = require("html-webpack-plugin"); /* 自動生成 html，並 import 資源 */
const {
  CleanWebpackPlugin,
} = require("clean-webpack-plugin"); /* 每次 build 前清理 /dist 文件夹 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); /* separate CSS from js */

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"] /* 這些檔案可使用 import module */,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
  },
};
