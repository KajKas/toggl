import React, { Component, Fragment } from 'react';

class TimeKeeper extends Component {

  state = {
    time: 0,
    pause: true
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  pauseTimeKeeper() {
    this.state.pause 
    ? this.intervalId = setInterval(() => this.setState({
        time: this.state.time + 1
      }), 1000) 
    : clearInterval(this.intervalId)   
    this.setState({
      pause: !this.state.pause
    })
  }

  render() {
    return (
      <Fragment>
        <span>Timer: {this.state.time}</span>
        <button
          onClick={() => this.pauseTimeKeeper(this.props.id)}
        >
          pause
        </button>
      </Fragment>
    )
  }
}

export default TimeKeeper