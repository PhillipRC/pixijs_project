'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    // Entry point : first executed file
    // This may be an array. It will result in many output files.
    entry: './src/main.ts',

    // What files webpack will manage
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    // Make errors mor clear
    devtool: 'inline-source-map',

    // Configure output folder and file
    output: {
        path: distDir,
        filename: 'main_bundle.js',
        publicPath: '/pixijs_project/'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        contentBase: './dist',
        openPage: 'pixijs_project/'
    },

    plugins: [
        new CleanWebpackPlugin([distDir]),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: distDir + '/assets' }
        ])
    ]
};