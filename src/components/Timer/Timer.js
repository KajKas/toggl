import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  state = {
    tasks: [
      {
        id: '1',
        title: 'Be awesome',
        isDone: true
      },
      {
        id: '2',
        title: 'Learn React',
        isDone: false
      }
    ]
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <input className="add-task_input" placeholder="What are you working on?" onfocus="placeholder=''"/>
          </form>
        </div>
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
      </div>
    )
  }
}

export default Timer