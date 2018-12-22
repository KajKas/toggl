import React, { Component } from 'react';
import LogForm from './LogForm';
import './App.css'

class LogIn extends Component {
  state = {
  }

  render() {
    return (
        <main className="main">
          <div className="hero">
            <h1 className="heading">Get tracking</h1>
            <h4 className="subheading">Log in to your Toggl account.</h4>
            <LogForm button1={"Log in"} button2={"Log in with Google"}/>
          </div>
        </main>
    )
  }
}

export default LogIn