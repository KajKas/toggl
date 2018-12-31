import React, { Component } from 'react';
import './Timer.css';
import TimerListItem from '../TimerListItem/TimerListItem'

class Timer extends Component {
  state = {
    taskFormValue: '',
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

  addTask = (taskTitle) => {
    this.setState({
      tasks: this.state.tasks.concat({
        id: Date.now().toString(32),
        title: taskTitle,
        isDone: false,
        isImportant: false
      })
    })
  }

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(
        task => task.id !== taskId
      )
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.addTask(this.state.taskFormValue)
    this.setState({
      taskFormValue: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
              className="add-task_input" 
              placeholder="What are you working on?" 
              type="text"
              value={this.state.taskFormValue}
              onChange={(event) => this.setState({
              taskFormValue: event.target.value
          })}/>
          </form>
        </div>
        <ul className="App-list">
          {
            this.state.tasks.map(
              task => (
                <TimerListItem
                id={task.id}
                title={task.title}
                deleteTask={this.deleteTask}
                />
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default Timer