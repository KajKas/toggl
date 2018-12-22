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
                    <input/>
                </div>

                <a href="#">Forgot password?</a>
                
                <div>
                    <button>{this.props.button1}</button>

                    <h4>Or</h4>

                    <button>{this.props.button2}</button>
                </div>
            </form>
        </div>
    )
  }
}

export default LogForm