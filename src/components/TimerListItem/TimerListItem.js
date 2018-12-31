import React, { Component } from 'react';
import TimeKeeper from '../TimeKeeper/TimeKeeper'

class TimerListItem extends Component {

  render() {
    return (
      <li>
        {this.props.title}<TimeKeeper/>
        <button
          onClick={() => this.props.deleteTask(this.props.id)}>
          delete
        </button>
      </li>
    )
  }
}

export default TimerListItem