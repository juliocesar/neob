// HomeScreen component spec
// =========================

import React from 'react'
import HomeScreen from '../../src/components/home-screen'
import * as utils from '../utils'

describe('HomeScreen', () => {
  const component = utils.shallowlyRenderedOutput(<HomeScreen / >)

  it('should contain one "<section>" element', () => {
    expect(component.type).to.be.equal('section')
  })

  describe('increment', () => {
    it('should call setState() once invoked', () => {
      const spy = sinon.spy()
      HomeScreen.prototype.increment.call(
        { state: { counter: 0 }, setState: spy }
      )

      expect(spy).to.have.been.calledOnce
    })
  })
})
