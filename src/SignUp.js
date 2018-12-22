import React, { Component } from 'react';
import LogForm from './LogForm';
import './App.css'

class SignUp extends Component {
  state = {
  }

  render() {
    return (
        <main className="main">
          <div className="form-container">
            <h1>Let's get started</h1>
            <h4>Kickstart your productivity with Toggl.</h4>
            <LogForm button1={"Sign in"} button2={"Sign in with Google"}/>
          </div>
        </main>
    )
  }
}

export default SignUp