import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (

      <>
        <header className="landing-title">Quick Count</header>
        <div className="welcome-div">
          <h1>Welcome to Quick Count</h1>
          <p>Inventory Solutions for Small Businesses. Quick Count is an easy to use web app, so you can track your received orders and inventory the way you want to from your phone, tablet, or computer.</p>
          <Link to="/login"><button>Get Started</button></Link>
        </div>
      </>
    );
  }
}

export default Welcome;