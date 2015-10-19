import React from 'react'
import style from './index.styl'

const Counter = React.createClass({
  increment() {
    // maybe I'd like to do something here
    // for the moment I just call the callback passed from the parent
    return this.props.onIncrement();
  },

  render() {
    const {count} = this.props;

    return (
      <div className={style.counter}>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <button className="p1" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
});

export default Counter;
