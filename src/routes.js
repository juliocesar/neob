// Client routes
// =============

import React from 'react'
import { Route } from 'react-router'
import App from './components/app-wrapper'
import HomeScreen from './components/home-screen'

export default <Route component={App}>
  <Route path="/" component={HomeScreen} />
</Route>
