import React, { Component } from 'react';
import './LogForm.css'

class LogForm extends Component {
  state = {
  }

  render() {
    return (
        <div className="form-container">            
            <form className="form">
                <div>
                    <label>
                        Email address
                    </label>
                    <input/>
                </div>

                <div>
                    <label>
                        Password
                    </label>
                    <input type="password"/>
                </div>

                <a href="#">Forgot password?</a>
                
                <div className="buttons-container">
                    <button className="log-button log-button_normal">{this.props.button1}</button>
                    <div className="divider">
                        <span>Or</span>
                    </div>
                    <button className="log-button log-button_google">{this.props.button2}</button>
                </div>
            </form>
        </div>
    )
  }
}

export default LogForm