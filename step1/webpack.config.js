var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    devtool: "inline-source-map",
    debug: true,
    entry: {
        app: path.resolve(APP_PATH + '/main', 'main.js'),
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: BUILD_PATH,
        filename: "[name].js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3005,
        host: "localhost"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: APP_PATH,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello world app",
            template: "template/html5-init.ejs",
            filename: "index.html"
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.min.js"
        })
    ]
}