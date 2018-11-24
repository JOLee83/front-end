import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login.jsx'
import Welcome from './Components/Welcome.jsx'
import Application from './Components/Application.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={Application} />
        </Switch>
      </Router>
    );
  }
}

export default App;
