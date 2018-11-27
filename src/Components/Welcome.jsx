import React, { Component } from 'react';
import Auth from '../Auth/Auth.js';

const auth = new Auth();

class Welcome extends Component {
  _login = () => {
    auth.login()
  }
  render() {
    return (
      <>
        <header className="landing-title"><i className="fas fa-running" /> Quicklee</header>
        <div className="welcome-div">
          <h1>Welcome to Quicklee</h1>
          <p>Inventory Solutions for Small Businesses. Quicklee is an easy to use web app, so you can track your received orders and inventory the way you want to from your phone, tablet, or computer.</p>
          <button onClick={this._login}><i className="fas fa-sign-in-alt" /> Sign In</button>
        </div>
      </>
    );
  }
}

export default Welcome;