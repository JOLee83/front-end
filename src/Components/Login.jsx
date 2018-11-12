import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (<>
      <header className="landing-title">Quick Count</header>
      <div className="login-div">
        <form>
          <input />
          <h4>User Name</h4>
          <input type="password" />
          <h4>Password<div className="spacer" /> <a>Forgot?</a></h4>
        </form>
        <Link to="/home"><button>Login</button></Link>
      </div>
    </>
    );
  }
}

export default Login;