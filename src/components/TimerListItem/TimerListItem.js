import React, { Component } from 'react';
import TimeKeeper from '../TimeKeeper/TimeKeeper';
import'./TimerListItem.css'

class TimerListItem extends Component {

  render() {
    return (
      <li className="timer-list-item">
        {this.props.title}
        <div className="timer-list-item_controls">
          <TimeKeeper id={this.props.id}/>          
          <button
            onClick={() => this.props.deleteTask(this.props.id)}
          >
            delete
          </button>
        </div>
      </li>
    )
  }
}

export default TimerListItem