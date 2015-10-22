// Home screen
// ===========

import React from 'react'
import Counter from '../counter'
import style from './index.scss'

export default class HomeScreen extends React.Component {
  constructor(options = {}) {
    super(options)
    this.state = { counter: 0 }
  }

  increment() {
    this.setState({ counter: this.state.counter += 1 })
  }

  render() {
    return <section className={style.HomeScreen}>
      <h1 className={style.Heading}>
        Neob
      </h1>
      <Counter
        count={this.state.counter}
        onIncrement={this.increment.bind(this)} />
    </section>
  }
}
