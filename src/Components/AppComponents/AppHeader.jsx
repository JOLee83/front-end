import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Auth from '../../Auth/Auth.js';

const auth = new Auth();

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
  _logout = () => {
    auth.logout()
  }
  render() {
    return (
      <div className="header-div">
        <header className="app-header"><div><i className="fas fa-running" /> Quicklee</div><div className="mobile-menu" onClick={this._toggleMenu}>{this.state.actionsMenu === 'hidden' ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}</div><div className="full-menu" onClick={this._toggleMenu}>{this.state.actionsMenu === 'hidden' ? 'Menu' : 'Close'}</div></header>
        <nav className={this.state.actionsMenu}>
          <NavLink exact to="/app" onClick={this._toggleMenu} activeClassName="active-link"><i className="fas fa-home" /> Home</NavLink>
          {/* <NavLink to="/app/orders" onClick={this._toggleMenu}><i className="fas fa-box" /> Orders</NavLink> */}
          <NavLink to="/app/inventory" onClick={this._toggleMenu} activeClassName="active-link"><i className="fas fa-clipboard-list" /> Inventory</NavLink>
          <NavLink to="/app/reports" onClick={this._toggleMenu} activeClassName="active-link"><i className="fas fa-file-alt" /> Reports</NavLink>
          <NavLink to="/app/settings" onClick={this._toggleMenu} activeClassName="active-link"><i className="fas fa-cog" /> Settings</NavLink>
          <button onClick={this._logout}><i className="fas fa-sign-out-alt" /> Sign Out</button>
        </nav>
      </div>
    );
  }
}

export default AppHeader;