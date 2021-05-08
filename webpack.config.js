const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const bootstrap = require('bootstrap')

module.exports = {
    entry: [
        './src/app/index.js',
        '@babel/polyfill'],
    mode: 'development',
    devServer: {
      port: 9000,
      open: true
    },
    output: {
      filename: 'js/app.bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'css/app.bundle.css'
    })

    ],
    module: {
      rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
          },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ]
    }
  
  };
