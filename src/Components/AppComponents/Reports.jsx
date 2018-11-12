import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Reports
  extends Component {

  render() {
    return (
      <>

        <div className="button-div">
          <Link to="/app/details"><button>New Report</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Report Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td><Link to="/app/details">01/01/2019</Link>
              </td>
            </tr>
            <tr className="even">
              <td><Link to="/app/details">12/01/2018</Link>
              </td>
            </tr><tr className="odd">
              <td><Link to="/app/detailsS">11/01/2018</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Reports
  ;