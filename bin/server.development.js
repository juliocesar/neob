// Development server
// ==================

import express from 'express'
import webpack from 'webpack'
import config from '../webpack.development'

let app = express()
let compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
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

app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static(__dirname + '/dist'))
app.listen(config._hotPort, 'localhost', function(err) {
  if (err) console.log(err)
  console.info(` ==> Listening on port ${config._hotPort}`)
})
