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
                    <header className="task-mamager_header">
                        <ul className="task-mamager_menu">            
                            <li>
                                <Link to="/timer"><img className="task-manager_logo" src={logo} alt={logo}/></Link>
                            </li>
                            <li>
                                <Link to="/timer"><img className="task-manager_menu_clock" src={clock} alt={clock}/>Timer</Link>
                            </li>
                            <li>
                                <Link to="/dashboard"><img className="task-manager_menu_chart" src={chart} alt={chart}/>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/reports"><img className="task-manager_menu_report" src={report} alt={report}/>Reports</Link>
                            </li>
                            <li>
                                <Link to="/insights"><img className="task-manager_menu_diagram" src={diagram} alt={diagram}/>Insights</Link>
                            </li>
                            <li>
                                <Link to="/savedreports"><img className="task-manager_menu_star" src={star} alt={star}/>Saved Reports</Link>
                            </li>
                            <li>
                                <Link to="/projects"><img className="task-manager_menu_folder" src={folder} alt={folder}/>Projects</Link>
                            </li>
                            <li>
                                <Link to="/clients"><img className="task-manager_menu_person" src={person} alt={person}/>Clients</Link>
                            </li>
                            <li>
                                <Link to="/team"><img className="task-manager_menu_people" src={people} alt={people}/>Team</Link>
                            </li>
                            <li>
                                <Link to="/workspaces"><img className="task-manager_menu_suitcase" src={suitcase} alt={suitcase}/>Workspaces</Link>
                            </li>
                            <li>
                                <Link to="/tags"><img className="task-manager_menu_tag" src={tag} alt={tag}/>Tags</Link>
                            </li>
                            <li>
                                <Link to="/help"><img className="task-manager_menu_question" src={question} alt={question}/>Help</Link>
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