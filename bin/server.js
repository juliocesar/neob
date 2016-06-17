// Development server
// ==================

import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleWare from 'webpack-hot-middleware'
import config from '../webpack.development.babel'

const env = process.env.NODE_ENV || 'development'
const app = express()
const compiler = webpack(config)

if (env === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }))
  app.use(webpackHotMiddleWare(compiler))
} else {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'))
  })
}

app.use(express.static(path.join(__dirname, '/build')))

app.listen(config._hotPort, 'localhost', (err) => {
  if (err) console.log(err)
  console.info(` ==> Listening on port ${config._hotPort}`)
})
