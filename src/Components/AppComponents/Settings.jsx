import React, { Component } from 'react';
class Settings extends Component {
  render() {
    return (
      <>
        <form>
          <input />
          <h4>Company Name</h4>
          <input />
          <h4>User Name</h4>
          <input type="email" />
          <h4>E-mail</h4>
          <button>Update</button>
        </form>
        <form>
          <input type="password" />
          <h4>Current Password</h4>
          <input type="password" />
          <h4>New Password</h4>
          <input type="password" />
          <h4>Confirm Password</h4>
          <button>Update</button>
        </form>
      </>
    );
  }
}

export default Settings;