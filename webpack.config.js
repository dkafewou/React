var webpack = require("webpack");
var path = require("path");
var combineLoaders = require('webpack-combine-loaders');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");


var config ={
    entry: {
        register: SRC_DIR + "/app/register.js",
        index: SRC_DIR + "/app/index.js",
        login: SRC_DIR + "/app/login.js",
        vendors: ['react']
    },
    output: {
        path: DIST_DIR + "/app",
        filename: "[name].bundle.js",
        publicPath: "/app/",
        chunkFilename: '[id].chunk.js'
    },
    /*plugins: [
        new FaviconsWebpackPlugin('./public/favicon.ico')
        ],*/
    module:{
        loaders:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query:{
                    presets: ["react", "es2015", "stage-2"]
                }
            },{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            }
        ]
    }
};

module.exports = config;
