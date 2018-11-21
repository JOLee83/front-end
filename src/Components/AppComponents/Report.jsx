import React, { Component } from 'react';
import axios from 'axios'

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
        console.log(this.props)
        console.log(this.state.reports)
      })
  }

  render() {
    return (
      <>
        <table className="home-table">
          <thead>
            <tr>
              <th colSpan="2">Last Inventory</th>
            </tr>
            <tr>
              <th colSpan="2">For "Company Name"</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reports.map((report) => {
              if (String(report.id) === this.props.match.params.id) {
                return (<>
                  <tr className="odd">
                    <td>Date</td>
                    <td>{new Date(report.reportDate).toLocaleDateString()}</td>
                  </tr>
                  <tr className="even">
                    <td>Beginning</td>
                    <td>${(report.inventoriesBegin).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td> + Purchases</td>
                    <td>${(report.purchases).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td>- Ending</td>
                    <td>${(report.inventoriesEnd).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td>= COGS ($)</td>
                    <td>${(parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)).toFixed(2)}</td>
                  </tr>
                  <tr className="even">
                    <td>/ Sales ($)</td>
                    <td>${(report.sales).toFixed(2)}</td>
                  </tr>
                  <tr className="odd">
                    <td>= COGS %</td>
                    <td>{Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100))}%</td>
                  </tr>
                </>
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
      </>
    );
  }
}

export default Report;
