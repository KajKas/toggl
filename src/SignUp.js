import React, { Component } from 'react';
import LogForm from './LogForm';
import './App.css'

class SignUp extends Component {
  state = {
  }

  render() {
    return (
        <main className="main">
          <div className="hero">
            <h1 className="heading">Let's get started</h1>
            <h4 className="subheading">Kickstart your productivity with Toggl.</h4>
            <LogForm button1={"Sign in"} button2={"Sign in with Google"}/>
          </div>
        </main>
    )
  }
}

export default SignUp