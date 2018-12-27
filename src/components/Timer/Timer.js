import React, { Component } from 'react';

class Timer extends Component {
  state = {
    tasks: [
      {
        id: '1',
        title: 'Be awesome',
        isDone: true,
        isImportant: false,
      },
      {
        id: '2',
        title: 'Learn React',
        isDone: false,
        isImportant: true
      }
    ]
  }

  render() {
    return (
      <ul className="App-list">
      {
        this.state.tasks.map(
          task => (
            <li>
              {task.title}
            </li>
          )
        )
      }
    </ul>
    )
  }
}

export default Timer