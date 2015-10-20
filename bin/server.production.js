// Production server
// =================

import path from 'path'
import express from 'express'

let app = express()

app.use(express.static(__dirname + '/dist'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(4567, 'localhost', function(err) {
  if (err) console.log(err)
  console.info(` ==> Listening on port 4567`)
})
