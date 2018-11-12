import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'


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
        <header className="app-header"><div>Quicklee Count</div><div className="mobile-menu" onClick={this._toggleMenu}>{this.state.actionsMenu === 'hidden' ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}</div><div className="full-menu" onClick={this._toggleMenu}>{this.state.actionsMenu === 'hidden' ? 'Menu' : 'Close'}</div></header>
        <nav className={this.state.actionsMenu}>
          <Link exact to="/app" onClick={this._toggleMenu}><i className="fas fa-home" /> Home</Link>
          <Link to="/app/orders" onClick={this._toggleMenu}><i className="fas fa-box" /> Orders</Link>
          <Link to="/app/inventory" onClick={this._toggleMenu}><i className="fas fa-clipboard-list" /> Inventory</Link>
          <Link exact to="/app/reports" onClick={this._toggleMenu}><i className="fas fa-file-alt" /> Reports</Link>
          <Link exact to="/app/settings" onClick={this._toggleMenu}><i className="fas fa-cog" /> Settings</Link>
          <Link exact to="/"><i className="fas fa-sign-out-alt" /> Logout</Link>
        </nav>
      </>
    );
  }
}

export default AppHeader;