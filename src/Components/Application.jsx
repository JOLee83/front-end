import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import AppHeader from './AppComponents/AppHeader.jsx'
import AppHome from './AppComponents/AppHome.jsx'
import Orders from './AppComponents/Orders.jsx'
import InputOrder from './AppComponents/InputOrder.jsx'
import Inventory from './AppComponents/Inventory.jsx'

class Application extends Component {
  state = {}
  render() {
    return (
      <Router>
        <>
          <AppHeader />
          <Switch>
            <Route path="/app" component={AppHome} />
            <Route path="/orders" component={Orders} />
            <Route path="/inputorder" component={InputOrder} />
            <Route path="/inventory" component={Inventory} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Application;