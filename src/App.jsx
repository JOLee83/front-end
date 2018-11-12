import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Welcome from './Components/Welcome.jsx'
import Application from './Components/Application.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Application} />
        </Switch>
      </Router>
    );
  }
}

export default App;
