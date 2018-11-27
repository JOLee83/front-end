import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import AppHeader from './AppComponents/AppHeader.jsx'
import AppHome from './AppComponents/AppHome.jsx'
// import Orders from './AppComponents/Orders.jsx'
// import InputOrder from './AppComponents/InputOrder.jsx'
import Inventory from './AppComponents/Inventory.jsx'
import Count from './AppComponents/Count.jsx'
import Settings from './AppComponents/Settings.jsx'
import Reports from './AppComponents/Reports.jsx'
import Report from './AppComponents/Report.jsx'
import NewReport from './AppComponents/NewReport.jsx'

import history from '../history';

class Application extends Component {
  state = {
    users: [],
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/users")
      .then(json => {
        this.setState({
          users: json.data
        })
      })
      .then(this.state.users.map((user, index) => {
        if (index === 0) {
          this.setState({
            name: user.companyName
          })
        }
      }))

  }
  render() {
    return (
      <Router history={history}>
        <>
          <AppHeader />
          <Switch>
            <Route exact path="/app" component={AppHome} />
            {/* <Route path="/app/orders" component={Orders} />
            <Route path="/app/inputorder" component={InputOrder} /> */}
            <Route path="/app/inventory" component={Inventory} />
            <Route exact path="/app/count" component={Count} />
            <Route path="/app/reports" component={Reports} />
            <Route path="/app/report/:id" component={Report} />
            <Route path="/app/newreport" component={NewReport} />
            <Route path="/app/settings" component={Settings} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Application;