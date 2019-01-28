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
        {id: 3, name: "Black Mirror", episodes_seen: 3}
      ],
      inputShowText: ""
    }
  }

  isComplete = () => {
    return this.props.complete
  };

  handleChange = event => {
    this.setState({inputShowText: event.target.value})
  };

  addShow = () => {
    let newShow = this.state.shows
    newShow.push({name: this.state.inputShowText, episodes_seen: 0, id: this.state.shows.length + 1})
    this.setState({shows: newShow, inputShowText: ""})
  };

  render() {
    return (
      <div className="App">
        <Instructions complete = {false}/>
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
        <p>{"Add a show: "}</p>
        <input type = "text" value = {this.state.inputShowText} onChange = {this.handleChange}></input>
        <button onClick={this.addShow}>Submit</button>
      </div>
    )
  }
}

export default App
