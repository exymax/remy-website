const path = require('path');
const HWP = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry:  path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            }
    ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },    
    plugins:[
        new HWP(
            {template: path.join(__dirname,'/src/index.html')}
        ),
        new ExtractTextPlugin("app.css"),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true
      }
}