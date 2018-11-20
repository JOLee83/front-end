import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import AppHeader from './AppComponents/AppHeader.jsx'
import AppHome from './AppComponents/AppHome.jsx'
// import Orders from './AppComponents/Orders.jsx'
// import InputOrder from './AppComponents/InputOrder.jsx'
import Inventory from './AppComponents/Inventory.jsx'
import Count from './AppComponents/Count.jsx'
import Settings from './AppComponents/Settings.jsx'
import Reports from './AppComponents/Reports.jsx'
import Details from './AppComponents/Details.jsx'


class Application extends Component {
  render() {
    return (
      <Router>
        <>
          <AppHeader />
          <Switch>
            <Route exact path="/app" component={AppHome} />
            {/* <Route path="/app/orders" component={Orders} />
            <Route path="/app/inputorder" component={InputOrder} /> */}
            <Route path="/app/inventory" component={Inventory} />
            <Route exact path="/app/count" component={Count} />
            <Route path="/app/count/:inventoriesId" component={Count} />
            <Route path="/app/reports" component={Reports} />
            <Route exact path="/app/details" component={Details} />
            <Route path="/app/details/:reportsId" component={Details} />
            <Route path="/app/settings" component={Settings} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Application;