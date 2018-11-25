import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Settings extends Component {
  render() {
    return (
      <div className="settings-div">
        <header className="breadcrumbs">
          <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
          <span className="active"><i className="fas fa-cog" /> Settings</span>
          <span><i class="fas fa-circle" /></span>
        </header>

        <form>
          <input />
          <h4>Company Name</h4>
          <input />
          <h4>User Name</h4>
          <input type="email" />
          <h4>E-mail</h4>
          <div className="button-div">
            <button>Update</button>
          </div>
        </form>

      </div>
    );
  }
}

export default Settings;