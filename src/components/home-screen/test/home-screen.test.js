// HomeScreen component test
// =========================

import React from 'react'
import HomeScreen from '../'
import test from 'ava'
import { shallow } from 'enzyme'

test('HomeScreen example test. Do not do this, for real', t => {
  const component = shallow(<HomeScreen />)
  t.is(component.find('h1').length, 1)
})
