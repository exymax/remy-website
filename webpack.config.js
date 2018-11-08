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
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }],
      },
      {
        test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '~styles': path.resolve(process.cwd(), 'assets/styles'),
      '~image': path.resolve(process.cwd(), 'assets/img'),
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
