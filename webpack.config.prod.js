const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
    },
    resolve: {
        extensions: [".css", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
