// App component spec
// ==================

import React from 'react'
import App from '../../src/components/app-wrapper'
import * as utils from '../utils'

describe('App', () => {
  const component = utils.shallowlyRenderedOutput(<App />)

  it('should have a main as container', () => {
    expect(component.type).to.equal('main')
  })
})
