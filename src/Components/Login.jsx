import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (<>
      <header className="landing-title">Quicklee Count</header>
      <div className="login-div">
        <form>
          <input />
          <h4>User Name</h4>
          <input type="password" />
          <h4>Password<div className="spacer" /> <a href="#">Forgot?</a></h4>
        </form>
        <Link to="/app"><button>Login</button></Link>
      </div>
    </>
    );
  }
}

export default Login;