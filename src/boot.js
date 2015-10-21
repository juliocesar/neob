// Client boot file
// ================

import 'babel/polyfill'
import 'normalize.css'
import './stylesheets/globals.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import routes from './routes'

const history = createHashHistory()

ReactDOM.render(
  <Router children={routes} history={history} />,
  document.getElementById('root')
)
