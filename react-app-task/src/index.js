import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task1 from './prectical/Task1';
import Task2 from './prectical/Task2';
import Task3 from './prectical/Task3';
import Task4 from './prectical/Task4';
import Task5 from './prectical/Task5';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Notfound from './prectical/Notfound';

/*
  1 - React router 
  2 - Link
  3 - Switch for notfound
*/
const routing = (
  <Router>
    <div>
      <h1>React Router</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/task1">Task1</Link></li>
        <li><Link to="/task2">Task2</Link></li>
        <li><Link to="/task3">Task3</Link></li>
        <li><Link to="/task4">Task4</Link></li>
        <li><Link to="/task5">Task5</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
        <Route path="/task3" component={Task3} />
        <Route path="/task4" component={Task4} />
        <Route path="/task5" component={Task5} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
