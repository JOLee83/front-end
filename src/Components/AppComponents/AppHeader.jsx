import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class AppHeader extends Component {
  state = {
    actionsMenu: 'hidden'
  }
  _toggleMenu = () => {
    this.setState(() => {
      if (this.state.actionsMenu === 'hidden') {
        return {
          actionsMenu: 'shown'
        }
      } else {
        return {
          actionsMenu: 'hidden'
        }
      }
    })
  }
  render() {
    return (
      <>
        <header className="app-header"><div>Quick Count</div><div className="mobile-menu" onClick={this._toggleMenu}>{this.state.actionsMenu === 'hidden' ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}</div><div className="full-menu" onClick={this._toggleMenu}>{this.state.actionsMenu === 'hidden' ? 'Menu' : 'Close'}</div></header>
        <nav className={this.state.actionsMenu}>
          <Link to="/app" onClick={this._toggleMenu}>Home</Link>
          <Link to="/orders" onClick={this._toggleMenu}>Orders</Link>
          <Link to="/inventory" onClick={this._toggleMenu}>Inventory</Link>
          <Link to="/app" onClick={this._toggleMenu}>Reports</Link>
          <Link to="/app" onClick={this._toggleMenu}>Settings</Link>
          <Link exact to="/login">Logout</Link>
        </nav>
      </>
    );
  }
}

export default AppHeader;