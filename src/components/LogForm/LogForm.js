import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './LogForm.css'

class LogForm extends Component {
  state = {
  }

  render() {
    return (
        <div className="form-container">            
            <form className="form">
            
                <div className="form-field">
                    <label>
                        Email address
                    </label>
                    <input type="email"/>
                </div>
                <div className="form-field">
                    <label>
                        Password
                    </label>
                    <input type="password"/>
                </div>
                <a href="null">Forgot password?</a>                
                <div className="buttons-container">
                    <Link to="/taskmanager" className="log-button log-button_normal">{this.props.button1}</Link>
                    <div className="divider">
                        <span>Or</span>
                    </div>
                    <Link to="/taskmanager" className="log-button log-button_google">{this.props.button2}</Link>
                </div>
            </form>
        </div>
    )
  }
}

export default LogForm