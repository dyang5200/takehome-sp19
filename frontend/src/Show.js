import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // Display a Counter (Look how we nested Instructions into App) and pass the number of episodes watched as prop to Counter
  // To check that this works, just look at your running app, you should see 3 show names, each of which should have a counter next to it.
  
  constructor(props) {
    super(props)
    this.state = {name: this.props.name, episodes_seen: this.props.episodes_seen, id: this.props.id}
  }

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <p>{'Show: '} {this.props.name}</p>
        <Counter initialCount = {this.props.episodes_seen}>
        </Counter>
      </div>
    )
  }
}

export default App
