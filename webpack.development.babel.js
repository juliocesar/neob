// Webpack development config file
// ===============================

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import dotenv from 'dotenv'

dotenv.load()

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/boot.js')
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    preLoaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: [
          'style',
          [
            'css?importLoaders=1',
            'modules',
            'localIdentName=[name]---[local]---[hash:base64:5]'
          ].join('&'),
          'sass'
        ].join('!')
      }
    ]
  },
  postcss: [
    require('postcss-modules-values')
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'src/stylesheets')
    ]
  },
  _hotPort: 4567
}
