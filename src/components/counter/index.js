// Counter component
// =================

import React from 'react'
import style from './index.styl'

export default class Counter extends React.Component {
  increment() {
    return this.props.onIncrement()
  }

  render() {
    const {count} = this.props

    return <div className={style.counter}>
      <h1>Count: {count}</h1>
      <p>Click the button to increment the counter</p>
      <button className="p1" onClick={this.increment.bind(this)}>
        Increment
      </button>
    </div>
  }
}

Counter.propTypes = {
  onIncrement: React.PropTypes.func.isRequired,
  count: React.PropTypes.number.isRequired
}
