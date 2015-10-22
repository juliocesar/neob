// App component spec
// ==================

import React from 'react'
import App from '../../src/components/app'
import * as utils from '../utils'

describe('App', () => {
  const component = utils.shallowlyRenderedOutput(<App />)

  it('should have a div as container because derp', () => {
    expect(component.type).to.equal('div')
  })
})
