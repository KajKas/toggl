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
import clock from '../../img/clock.svg'
import chart from '../../img/chart.svg'
import report from '../../img/report.svg'
import diagram from '../../img/diagram.svg'
import star from '../../img/star.svg'
import folder from '../../img/folder.svg'
import person from '../../img/person.svg'
import people from '../../img/people.svg'
import suitcase from '../../img/suitcase.svg'
import tag from '../../img/tag.svg'
import question from '../../img/question.svg'


class TaskManager extends Component {
  state = {
  }

  render() {
    return (
      <Router>
            <Fragment>
            <Redirect from="/" to="timer" />
                <div className="side-bar">
                    <header className="task-manager_header">
                        <ul className="task-manager_menu">            
                            <li>
                                <Link to="/timer" className="task-manager_logo">
                                    <img src={logo} alt={logo}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/timer">
                                    <div className="task-manager_menu_img">
                                        <img className="task-manager_menu_clock" src={clock} alt={clock}/>
                                    </div>
                                    Timer
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard">
                                    <div className="task-manager_menu_img">
                                        <img className="task-manager_menu_chart" src={chart} alt={chart}/>
                                    </div>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/reports"><div className="task-manager_menu_img"><img className="task-manager_menu_report" src={report} alt={report}/></div>Reports</Link>
                            </li>
                            <li>
                                <Link to="/insights"><div className="task-manager_menu_img"><img className="task-manager_menu_diagram" src={diagram} alt={diagram}/></div>Insights</Link>
                            </li>
                            <li>
                                <Link to="/savedreports"><div className="task-manager_menu_img"><img className="task-manager_menu_star" src={star} alt={star}/></div>Saved Reports</Link>
                            </li>
                            <li>
                                <Link to="/projects"><div className="task-manager_menu_img"><img className="task-manager_menu_folder" src={folder} alt={folder}/></div>Projects</Link>
                            </li>
                            <li>
                                <Link to="/clients"><div className="task-manager_menu_img"><img className="task-manager_menu_person" src={person} alt={person}/></div>Clients</Link>
                            </li>
                            <li>
                                <Link to="/team"><div className="task-manager_menu_img"><img className="task-manager_menu_people" src={people} alt={people}/></div>Team</Link>
                            </li>
                            <li>
                                <Link to="/workspaces"><div className="task-manager_menu_img"><img className="task-manager_menu_suitcase" src={suitcase} alt={suitcase}/></div>Workspaces</Link>
                            </li>
                            <li>
                                <Link to="/tags"><div className="task-manager_menu_img"><img className="task-manager_menu_tag" src={tag} alt={tag}/></div>Tags</Link>
                            </li>
                            <li>
                                <Link to="/help"><div className="task-manager_menu_img"><img className="task-manager_menu_question" src={question} alt={question}/></div>Help</Link>
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