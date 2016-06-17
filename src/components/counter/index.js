// Counter component
// =================

import React from 'react'
import style from './index.scss'

export default class Counter extends React.Component {
  constructor(options) {
    super(options)
    this.state = { count: this.props.count }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return <div className={style.Counter} onClick={this.onClick}>
      <span className={style.countLabel}>{this.state.count}</span>
      <span className={style.label}>
        Click the number to increase the count
      </span>
    </div>
  }
}

Counter.propTypes = {
  count: React.PropTypes.number.isRequired
}

Counter.defaultProps = {
  count: 0
}
