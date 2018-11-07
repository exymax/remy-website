const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  watch: true,
  entry:  path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: [
          /assets/,
          /src/
        ],
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [
              path.resolve(process.cwd(), 'node_modules')
            ],
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '~styles': path.resolve(process.cwd(), 'assets/styles'),
    },
  },
  plugins:[
    new HWP(
        {template: path.join(__dirname,'/src/index.html')}
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true
  }
};
