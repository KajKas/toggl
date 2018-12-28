import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import TaskManager from './../TaskManager/TaskManager';


class Auth extends Component {

  render() {
    return (      
        <Router>
          <Fragment>          
            <Route path="/login" component={LogIn}/>
            <Route path="/taskmanager" component={TaskManager}/>
            <Redirect from="/" to="login" />
          </Fragment>
        </Router>
    )
  }
}

export default Auth