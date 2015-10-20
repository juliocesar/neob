// HomeScreen component spec
// =========================

import React from 'react'
import HomeScreen from '../../src/components/home-screen'
import * as utils from '../utils'
import {version} from '../../package.json'

describe('HomeScreen', () => {
  const component = utils.shallowlyRenderedOutput(<HomeScreen / >)

  it('should contain one "<section>" element', () => {
    expect(component.type).to.be.equal('section')
  })

  it('should contain a link to my twitter account', () => {
    expect(component.props.children.props.children).to.contain(
      <a href ="https://twitter.com/vesparny">@vesparny</a>
    )
  })

  describe('getVersion', () => {
    it('should return the current version when called', () => {
      const currentVersion = HomeScreen.prototype.getVersion()

      expect(currentVersion).to.be.equal(version)
    })
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
