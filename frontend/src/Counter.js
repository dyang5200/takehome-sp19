import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  // Set its initial state of count to 0
  // Display the value of the current count
  // Create two buttons, one that increments the count and one that decrements it. Hint
  state = {count: 0}

  incrementCount = () => {
    this.setState({count: 1})
  }

  decrementCount = () => {
    this.setState({count: 2})
  }

  render() {
    return (
      <div>
        {this.state.count.map(counts => (
        <p>{counts}</p>
        ))}
        <button onClick={this.incrementCount}> Increment Count </button>
        <button onClick={this.decrementCount}> Decrement Count </button>
      </div>
    );
  }
}

export default Counter
