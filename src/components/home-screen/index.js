// Home screen
// ===========

import React from 'react'
import Counter from '../counter'
import {
  version,
  dependencies,
  homepage,
  devDependencies
} from '../../../package.json'
import style from './index.styl'

export default class HomeScreen extends React.Component {
  constructor(options = {}) {
    super(options)
    this.state = { counter: 0 }
  }

  getVersion() {
    return version
  }

  increment() {
    this.setState({ counter: this.state.counter += 1 })
  }

  render() {
    const deps = Object.keys(dependencies).map((dep, i) => {
      return <li key={i}><b>{dep}</b> : {dependencies[dep]}</li>
    })
    const devDeps = Object.keys(devDependencies).map((dep, i) => {
      return <li key={i + 10}><b>{dep}</b> : {devDependencies[dep]}</li>
    })

    return <section className="p1 tc">
      <div>
        <h1>
          <a className="blue" href={homepage}>&#9883; react-kickstart</a>
        </h1>
        <h2 className="red">version {version}</h2>
        <a href={homepage}>GitHub</a>
        <br />
        <a href="https://twitter.com/vesparny">@vesparny</a>
        <Counter
          count={this.state.counter}
          onIncrement={this.increment.bind(this)}
        />
        <h3>Powered by:</h3>
        <div className={style.block}>
          <h4> DEPENDENCIES:</h4>
          <ul>{deps}</ul>
        </div>
        <div className={style.block}>
          <h4> DEV-DEPENDENCIES:</h4>
          <ul>{devDeps}</ul>
        </div>
      </div>
    </section>
  }
}
