import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Settings extends Component {
  state = {
    users: []
  }
  componentDidMount = () => {
    axios.get("https://localhost:5001/api/users")
      .then(json => {
        this.setState({
          users: json.data
        })
      })
  };
  updateCompanyName = (event, userId, companyName) => {
    axios.put("https://localhost:5001/api/users/" + userId, { id: userId, companyName: companyName })
  }
  updateName = (e, userId) => {
    const index = this.state.users.findIndex(f => f.id === userId)
    const user = this.state.users[index]
    const users = [...this.state.users]
    user.companyName = e.target.value
    users[index] = user
    this.setState({ users })
  }
  render() {
    return (
      <div className="settings-div">
        <header className="breadcrumbs">
          <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
          <span className="active"><i className="fas fa-cog" /> Settings</span>
          <span><i className="fas fa-circle" /></span>
        </header>
            {this.state.users.map((user, index) => {
              if (index === 0) {
                return (
                  <div >

                  <input 
                    value={user.companyName}
                    onChange={(e) => this.updateName(e, user.id)} />
                  <h4>Company Name</h4>
                  <button onClick={(e) => this.updateCompanyName(e, user.id, user.companyName)}>Update</button>
                  </div>
                  )
              }
            })}
\

         
      </div >
    );
  }
}

export default Settings;