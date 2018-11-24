import React, { Component } from 'react';
import axios from 'axios'

class AppHome extends Component {
  state = {
    reports: [],
    users: []
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/reports")
      .then(json => {
        this.setState({
          reports: json.data.reverse()
        })
      })
    axios.get("https://localhost:5001/api/users")
      .then(json => {
        this.setState({
          users: json.data
        })
      })
  }
  render() {
    return (
      <div className="home">
        <header className="breadcrumbs">
          <span className="active"><i className="fas fa-home" /> Home</span>
          <span><i class="fas fa-circle" /></span>
          <span><i class="fas fa-circle" /></span>
        </header>
        <table className="home-table">
          <thead>
            <tr>
              <th colSpan="2">Last Inventory</th>
            </tr>
            <tr>
              {this.state.users.map((user, index) => {
                if (index === 0) {
                  return (
                    <th colSpan="2">For {user.companyName} </th>
                  )
                }
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.reports.map((report, index) => {
              if (index === 0) {
                return (<>
                  <tr className="odd">
                    <td><i class="fas fa-calendar-alt" /> Date</td>
                    <td>{new Date(report.reportDate).toLocaleDateString()}</td>
                  </tr>
                  <tr className="even">
                    <td><i class="fas fa-plus" /> Beginning</td>
                    <td>${(report.inventoriesBegin).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td><i class="fas fa-plus" /> Purchases</td>
                    <td>${(report.purchases).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td><i class="fas fa-minus" /> Ending</td>
                    <td>${(report.inventoriesEnd).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td><i class="fas fa-equals" /> COGS <i class="fas fa-dollar-sign" /></td>
                    <td>${(parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td><i class="fas fa-divide" /> Sales ($)</td>
                    <td>${(report.sales).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td><i class="fas fa-equals" /> COGS <i class="fas fa-percent" /></td>
                    <td>{Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100))}%</td>
                  </tr></>
                )

              }
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default AppHome;