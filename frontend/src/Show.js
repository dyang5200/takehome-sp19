import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // Display a Counter (Look how we nested Instructions into App) and pass the number of episodes watched as prop to Counter
  // To check that this works, just look at your running app, you should see 3 show names, each of which should have a counter next to it.
  
  constructor(props, initialName, initialEpisodesSeen, initialId) {
    super(props)
    this.state = {name: "initialName", episodes_seen: 12, id: "initialId"}
  }

  render() {
    return (
      <div>
        <p>{'Show: '} {this.state.name}</p>
        <Counter initialCount = {this.state.episodes_seen}>
        </Counter>
      </div>
    )
  }
}

export default App
