// Client boot file
// ================

import './stylesheets/reset.css'
import './stylesheets/top-wrappers.css'
import 'babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import routes from './routes'

const history = createHashHistory()

ReactDOM.render(
  <Router children={routes} history={history} />,
  document.querySelector('.main-wrapper')
)
