import React, { Component } from 'react'

class Counter extends Component {
  constructor(props, initialCount) {
    super(props)
    this.state = {count: 0}
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  };

  decrementCount = () => {
    this.setState({count: this.state.count - 1});
  };

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <label
          style = {{fontSize: '5em', display: 'block'}}>
        </label>
        <p> {'Count: '} {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
        <button onClick={this.decrementCount}>Decrement Count</button>
      </div>
    );
  }
}

export default Counter
