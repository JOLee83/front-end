import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import AppHeader from './AppComponents/AppHeader.jsx'
import AppHome from './AppComponents/AppHome.jsx'
import Orders from './AppComponents/Orders.jsx'


class Application extends Component {
  state = {}
  render() {
    return (
      <Router>
        <>
          <AppHeader />
          <Switch>
            <Route path="/home" component={AppHome} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Application;