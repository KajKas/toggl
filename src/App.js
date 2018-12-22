import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'
import LogIn from './LogIn'
import './App.css';
import TopBar from './TopBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopBar/>
        
      </Fragment>
    );
  }
}

export default App;
