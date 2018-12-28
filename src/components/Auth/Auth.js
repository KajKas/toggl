import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LogIn from '../LogIn/LogIn'
import TopBar from '../TopBar/TopBar';


class Auth extends Component {

  render() {
    return (      
        <Router>
          <Fragment>
          <TopBar/>
          
            <Route path="/login" component={LogIn}/>
            <Redirect from="/" to="login" />
          </Fragment>
        </Router>
    )
  }
}

export default Auth