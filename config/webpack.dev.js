/**
 * Created by Administrator on 2016/11/24.
 */
var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');



const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: 'scripts/[name].bundle.js',
        sourceMapFilename: 'scripts/[name].map',
        chunkFilename: 'scripts/[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
