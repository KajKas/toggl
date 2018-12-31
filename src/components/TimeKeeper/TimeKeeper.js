import React, { Component, Fragment } from 'react';

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

  pauseTimeKeeper() {
    clearInterval(this.intervalId)
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