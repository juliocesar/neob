// Counter component
// =================

import React from 'react'
import style from './index.scss'

export default class Counter extends React.Component {
  increment() {
    return this.props.onIncrement()
  }

  render() {
    const {count} = this.props

    return <div className={style.Counter}>
      <h1 className={style.Heading}>Count: {count}</h1>
      <p className={style.Paragraph}>
        Click the button to increment the counter
      </p>
      <button className={style.Button} onClick={this.increment.bind(this)}>
        ➕Increment
      </button>
    </div>
  }
}

Counter.propTypes = {
  onIncrement: React.PropTypes.func.isRequired,
  count: React.PropTypes.number.isRequired
}
