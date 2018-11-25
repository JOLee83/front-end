import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Reports extends Component {
  state = {
    confirmDelete: false,
    reports: [],
    deleteId: null
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/reports")
      .then(json => {
        this.setState({
          reports: json.data.reverse()

        })

      })
  }
  deleteReport = () => {
    axios.delete("https://localhost:5001/api/reports/" + this.state.deleteId)
      .then(json => {
        this.setState({
          reports: this.state.reports.filter(report => report.id !== this.state.deleteId)
        })
      }).then(() => {
        this.confirmDelete(null)
      })
  }
  confirmDelete = (reportId) => {
    this.setState(prevState => ({
      confirmDelete: !prevState.confirmDelete,
      deleteId: reportId
    }))
  }

  render() {
    return (
      <>
        <div className={this.state.confirmDelete ? "confirm" : "unconfirm"}>
          <div className="confirm-box">
            <p>Delete Report?</p>
            <div>
              <button onClick={this.deleteReport}>Yes</button>
              <button onClick={() => this.confirmDelete(null)}>No</button>
            </div>
          </div>
        </div>
        <div className="reports-div">
          <header className="breadcrumbs">
            <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
            <span className="active"><i className="fas fa-file-alt" /> Reports</span>
            <span><i className="fas fa-circle" /></span>
          </header>
          <div className="button-div">
            <Link to="/app/newreport"><button>New Report</button></Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>COGS</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.reports.map((report, index) => {
                if (index % 2 === 0) {
                  return (
                    <tr key={index} className="odd">
                      <td>
                        <Link to={`/app/report/${report.id}`}>{new Date(report.reportDate).toLocaleDateString()}</Link>
                      </td>
                      <td>
                        <Link to={`/app/report/${report.id}`}>
                          {String(Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100)))}%
                      </Link>
                      </td>
                      <td>
                        <button onClick={() => this.confirmDelete(report.id)}>
                          <i className="fas fa-trash-alt" />
                        </button>
                      </td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={index} className="even">
                      <td>
                        <Link to={`/app/report/${report.id}`}>{new Date(report.reportDate).toLocaleDateString()}</Link>
                      </td>
                      <td>
                        <Link to={`/app/report/${report.id}`}>
                          {Math.round(((parseFloat(report.inventoriesBegin) + parseFloat(report.purchases) - parseFloat(report.inventoriesEnd)) / parseFloat(report.sales) * 100))}%
                          </Link>
                      </td>
                      <td>
                        <button onClick={() => this.confirmDelete(report.id)}>
                          <i className="fas fa-trash-alt" />
                        </button>
                      </td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Reports
  ;