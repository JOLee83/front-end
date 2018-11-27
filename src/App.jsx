import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Welcome from './Components/Welcome.jsx'
import CallBack from './Components/CallBack.jsx'
import Application from './Components/Application.jsx'

import Auth from './Auth/Auth.js';
import history from './history'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log({ nextState })
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/callback" exact render={(props) => {
            handleAuthentication(props);
            return <CallBack {...props} />
          }} />
          <Route path="/app" render={(props) => {
            if (auth.isAuthenticated()) {
              return <Application auth={auth} {...props} />
            }
            if (!auth.isAuthenticated()) {
              history.push('/')
              return <></>
            }
          }
          } />
        </Switch>
      </Router>
    );
  }
}

export default App;
