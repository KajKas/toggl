import React, { Component } from 'react';

class LogForm extends Component {
  state = {
  }

  render() {
    return (
        <div>            
            <form>
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