import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

class Reports extends Component {
  state = {
    reports: []
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/reports")
      .then(json => {
        this.setState({
          reports: json.data.reverse()

        })

      })
  }
  deleteReport = (reportId) => {
    axios.delete("https://localhost:5001/api/reports/" + reportId)
      .then(json => {
        this.setState({
          reports: this.state.reports.filter(report => report.id !== reportId)
        })
      })
  }

  render() {
    return (
      <>

        <div className="button-div">
          <Link to="/app/details"><button>New Report</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>COGS %</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reports.map((report, index) => {
              if (index % 2 === 0) {
                return (
                  <tr className="odd">
                    <td>
                      <Link to={`/app/report/${report.id}`}>{new Date(report.reportDate).toLocaleDateString()}</Link>
                    </td>
                    <Link to={`/app/report/${report.id}`}>
                      <td>{Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100))}%</td>
                    </Link>
                    <td>
                      <button onClick={() => this.deleteReport(report.id)}>Delete</button>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr className="even">
                    <td>
                      <Link to={`/app/report/${report.id}`}>{new Date(report.reportDate).toLocaleDateString()}</Link>
                    </td>
                    <Link to={`/app/report/${report.id}`}>
                      <td>{Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100))}%</td>
                    </Link>
                    <td>
                      <button onClick={() => this.deleteReport(report.id)}>Delete</button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Reports
  ;