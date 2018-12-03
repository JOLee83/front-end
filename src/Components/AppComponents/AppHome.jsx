import React, { Component } from 'react';
import axios from 'axios'
import config from '../../Config';

class AppHome extends Component {
  state = {
    reports: [{
      reportDate: new Date(),
      inventoriesBegin: 0.00,
      inventoriesEnd: 0.00,
      purchases: 0.00,
      sales: 0.00
    }],
    users: []
  }
  componentDidMount() {
    axios.get(`${config.API_URL}/reports`)
      .then(json => {
        this.setState({
          reports: json.data.reverse()
        })
      })
    axios.get(`${config.API_URL}/users`)
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
          <span><i className="fas fa-circle" /></span>
          <span><i className="fas fa-circle" /></span>
        </header>
        <table className="home-table">
          <thead>
            <tr>
              <th colSpan="2">Latest Inventory</th>
            </tr>

            <tr>
              {this.state.users.map((user, index) => {
                if (index === 0) {
                  return (
                    <th key={index} colSpan="2">For {user.companyName} </th>
                  )
                }
              })}
            </tr>
          </thead>
          {this.state.reports.map((report, index) => {
            if (index === 0) {
              return (
                <tbody key={index}>
                  <tr className="odd">
                    <td className="left"><i className="fas fa-calendar-alt" /> Date</td>
                    <td className="right">{new Date(report.reportDate).toLocaleDateString()}</td>
                  </tr>
                  <tr className="even">
                    <td className="left"><i className="fas fa-plus" /> Beginning</td>
                    <td className="right">${(report.inventoriesBegin).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td className="left"><i className="fas fa-plus" /> Purchases</td>
                    <td className="right">${(report.purchases).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td className="left"><i className="fas fa-minus" /> Ending</td>
                    <td className="right">${(report.inventoriesEnd).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td className="left"><i className="fas fa-equals" /> COGS <i className="fas fa-dollar-sign" /></td>
                    <td className="right">${(parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td className="left"><i className="fas fa-divide" /> Sales</td>
                    <td className="right">${(report.sales).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td className="left"><i className="fas fa-equals" /> COGS <i className="fas fa-percent" /></td>
                    <td className="right">{report.sales !== 0 ? Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100)) : 0}%</td>
                  </tr>
                </tbody>
              )
            }
          })}
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