import React, { Component } from 'react';

class TimeKeeper extends Component {

  state = {
    time: 0
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <h3>Timer: {this.state.time}</h3>
    )
  }
}

export default TimeKeeper