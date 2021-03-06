const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        // vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
        // path.join(__dirname, 'src/index.js')
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
            // test: /\.css$/,
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'postcss-loader']
            // })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:5].css',
            allChunks: true
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 4200
    }
};
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig)
