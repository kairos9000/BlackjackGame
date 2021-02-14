const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        app: "./src/index.js",
    },
    resolve: {
        extensions: [".scss", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", {loader: "css-loader", options: {url: false}}, "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        host: "0.0.0.0",
        port: 80,
        openPage: "http://localhost",
        contentBase: path.resolve(__dirname, "assets"),
        stats: "errors-only",
        overlay: true,
        open: true,
        hot: true,
    },
};
