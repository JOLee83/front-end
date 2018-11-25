import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class Report extends Component {
  state = {
    reports: []
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/reports")
      .then(json => {
        this.setState({
          reports: json.data
        })
      })
  }

  render() {
    return (
      <div className="report-div">
        <header className="breadcrumbs">
          <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
          <span ><Link to="/app/reports"><i className="fas fa-file-alt" /> Reports</Link></span>
          <span className="active"><i className="fas fa-file-alt" /> Report</span>
        </header>
        <table className="home-table">
          <thead>
            <tr>
              <th colSpan="2">Inventory Report</th>
            </tr>
            <tr>
              <th colSpan="2">For "Company Name"</th>
            </tr>
          </thead>
          {this.state.reports.map((report, index) => {
            if (String(report.id) === this.props.match.params.id) {
              return (
                <tbody key={index}>
                  <tr className="odd">
                    <td><i className="fas fa-calendar-alt" /> Date</td>
                    <td>{new Date(report.reportDate).toLocaleDateString()}</td>
                  </tr>
                  <tr className="even">
                    <td><i className="fas fa-plus" /> Beginning</td>
                    <td>${(report.inventoriesBegin).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td><i className="fas fa-plus" /> Purchases</td>
                    <td>${(report.purchases).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td><i className="fas fa-minus" /> Ending</td>
                    <td>${(report.inventoriesEnd).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td><i className="fas fa-equals" /> COGS <i className="fas fa-dollar-sign" /></td>
                    <td>${(parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td><i className="fas fa-divide" /> Sales</td>
                    <td>${(report.sales).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td><i className="fas fa-equals" /> COGS <i className="fas fa-percent" /></td>
                    <td>{Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100))}%</td>
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

export default Report;
