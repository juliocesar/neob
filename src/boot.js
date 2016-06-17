// Client boot file
// ================

import './stylesheets/reset.css'
import './stylesheets/top-wrappers.css'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory as history } from 'react-router'
import routes from './routes'
import loadFonts from './components/font-loader'

loadFonts()

render(
  <Router children={routes} history={history} />,
  document.querySelector('.main-wrapper')
)
