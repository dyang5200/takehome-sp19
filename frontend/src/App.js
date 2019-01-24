import React, { Component } from 'react'
import Instructions from './Instructions'
import Show from './Show'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [
        {id: 1, name: "Game of Thrones", episodes_seen: 0},
        {id: 2, name: "Naruto", episodes_seen: 220},
        {id: 3, name: "Black Mirror", episodes_seen: 3},
      ]
    }
    this.complete = {
      status: [
        {success: true}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Instructions />
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
        {this.complete.status.map(x => (
          <Show success={x.success} />
        ))}
      </div>
    )
  }
}

export default App
