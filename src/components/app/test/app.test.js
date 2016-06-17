// App component spec
// ==================

import React from 'react'
import App from '../'
import test from 'ava'
import { shallow } from 'enzyme'

test('App should be a div because this is a dumb test', t => {
  const component = shallow(<App />)
  t.is(component.node.type, 'div')
})
