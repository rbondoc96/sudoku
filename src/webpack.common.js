const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        index: "./index.tsx",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },{
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },{
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ],
            },{
                test: /\.(pdf|ico|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets",
                        }
                    },
                ],
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./imgs/[name].[ext]",
                            outputPath: "assets",
                        }
                    },
                ]
            },{
                test: /\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            fs: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",
            chunks: ["index"]
        }),
    ],    
};