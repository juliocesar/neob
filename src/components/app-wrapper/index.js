// Main app container
// ==================

import React from 'react'

export default class App extends React.Component {
  render() {
    return <div className="app-wrapper">
      {this.props.children}
    </div>
  }
}

App.propTypes = {
  children: React.PropTypes.node
}
