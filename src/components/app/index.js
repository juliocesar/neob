// App container
// =============

import React from 'react'
import style from './index.scss'

export default class App extends React.Component {
  render() {
    return <div className={style.App}>
      {this.props.children}
    </div>
  }
}

App.propTypes = {
  children: React.PropTypes.node
}
