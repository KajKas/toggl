import React, { Component } from 'react';
import LogForm from './LogForm';
import './App.css'

class LogIn extends Component {
  state = {
  }

  render() {
    return (
        <main className="main">
          <div className="form-container">
            <h1>Get tracking</h1>
            <h4>Log in to your Toggl account.</h4>
            <LogForm button1={"Log in"} button2={"Log in with Google"}/>
          </div>
        </main>
    )
  }
}

export default LogIn