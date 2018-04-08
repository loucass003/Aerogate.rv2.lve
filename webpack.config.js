var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve('./slides/'),
    entry: './js/index.js',
    output: {
        path: path.resolve('./dist/'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new BrowserSyncPlugin({
            server: {
                baseDir: ['dist']
            },
            port: 3000,
            host: 'localhost'
        }),
        new CopyWebpackPlugin([{
                context: '../vendor/impress/',
                from: '**/*.js',
                to: 'js/',
                flatten: true
            },
            {
                context: '../vendor/impress/css',
                from: '**/*.css',
                to: 'css/',
                flatten: true
            },
            {
                context: '../vendor/impress/extras/',
                from: '*/*.css',
                to: 'js/',
                flatten: true
            },
            {
                context: '../vendor/impress/extras/highlight/styles',
                from: '**/*.css',
                to: 'css/styles/'
            },
            {
                context: 'css/',
                from: '**/*',
                to: 'css/'
            },
            {
                context: 'img/',
                from: '**/*',
                to: 'img/'
            }
        ])
    ]
};