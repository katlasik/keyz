'use strict'

const webpack = require('webpack')
const path = require('path')


module.exports = {
    entry: {
        'keyz': './src/index.js',
        'keyz.min': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "src")
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
