import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'
import LogIn from './LogIn'

class TopBar extends Component {
  state = {
  }

  render() {
    return (
        <Router>
            <div>
                <ul>            
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>

                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>

                </ul>

                <Route path="/login" component={LogIn}/>
                <Route path="/signup" component={SignUp}/>
            </div>
        </Router>
    )
  }
}

export default TopBar