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
        extensions: [".scss", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test:/\.png$/,
                use: ['file-loader']
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


// {loader: "css-loader", options: {url: false}} instead of just "css-loader" in rules