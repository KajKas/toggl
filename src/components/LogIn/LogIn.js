import React, { Component, Fragment } from 'react';
import LogForm from '../LogForm/LogForm';
import '../App/App.css';
import TopBar from '../TopBar/TopBar';

class LogIn extends Component {

  render() {
    return (
      <Fragment>
        <main className="main">
          <div className="hero-wrapper">
            <div className="hero">
              <h1 className="heading">Get tracking</h1>
              <h4 className="subheading">Log in to your Toggl account.</h4>
              <LogForm button1={"Log in >"} button2={"Log in with Google >"}/>
            </div>
          </div>
          <footer className="footer">
            <div className="cta">
              <h3>Don't have an account?</h3>
              <button className="cta-button">Sign up fo free ></button>
            </div>
          </footer>
        </main>
      </Fragment>
    )
  }
}

export default LogIn