// Counter component test
// ======================

import React from 'react'
import Counter from '../'
import test from 'ava'
import { shallow } from 'enzyme'

test('Counter defaults to 0 counts', t => {
  const component = shallow(<Counter />)
  t.is(component.state('count'), 0)
})

test('Counter increases count when clicked', t => {
  const component = shallow(<Counter />)
  const currentCount = component.state('count')
  component.simulate('click')
  t.is(component.state('count'), currentCount + 1)
})
