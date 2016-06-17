// Webpack development config file
// ===============================

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StatsPlugin from 'stats-webpack-plugin'
import dotenv from 'dotenv'
import readTheme from './lib/read-theme'
import { includePaths } from 'dirg'

dotenv.load()

const CSSLoaders = [
  'css?importLoaders=1',
  'modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
].join('&')

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.join(__dirname, 'src/boot.js')
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new StatsPlugin('webpack.stats.json', { source: false, modules: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', CSSLoaders)
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'src/stylesheets'),
      ...includePaths
    ],
    data: [readTheme(process.env.THEME || 'default')]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-modules-values')
  ]
}
