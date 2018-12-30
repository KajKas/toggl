import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './TaskManager.css';
import Timer from '../Timer/Timer';
import Dashboard from '../Dashboard/Dashboard';
import Reports from '../Reports/Reports';
import Insights from '../Insights/Insights';
import SavedReports from '../SavedReports/SavedReports';
import Projects from '../Projects/Projects';
import Clients from '../Clients/Clients';
import Team from '../Team/Team';
import Workspaces from '../Workspaces/Workspaces';
import Tags from '../Tags/Tags';
import Help from '../Help/Help';
import logo from '../../img/logo.svg'


class TaskManager extends Component {
  state = {
  }

  render() {
    return (
      <Router>
            <Fragment>
            <Redirect from="/" to="timer" />
                <div className="side-bar">
                    <header className="task-mamager_header">
                        <ul className="task-mamager_menu">            
                            <li>
                                <Link to="/timer"><img className="task-manager_logo" src={logo} alt={logo}/></Link>
                            </li>
                            <li>
                                <Link to="/timer">Timer</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/reports">Reports</Link>
                            </li>
                            <li>
                                <Link to="/insights">Insights</Link>
                            </li>
                            <li>
                                <Link to="/savedreports">Saved Reports</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/clients">Clients</Link>
                            </li>
                            <li>
                                <Link to="/team">Team</Link>
                            </li>
                            <li>
                                <Link to="/workspaces">Workspaces</Link>
                            </li>
                            <li>
                                <Link to="/tags">Tags</Link>
                            </li>
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                        </ul>                    
                    </header>                
                </div>
                <div className="task-manager_main">
                    <Route path="/timer" component={Timer}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/reports" component={Reports}/>
                    <Route path="/insights" component={Insights}/>
                    <Route path="/savedreports" component={SavedReports}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/clients" component={Clients}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/workspaces" component={Workspaces}/>
                    <Route path="/tags" component={Tags}/>
                    <Route path="/help" component={Help}/>
                </div>
            </Fragment>
        </Router>
    )
  }
}

export default TaskManager