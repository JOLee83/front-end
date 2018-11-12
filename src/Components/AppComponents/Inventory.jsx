import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'


class Inventory extends Component {

  render() {
    return (
      <>
        <div className="button-div">
          <Link to="/app/count"><button>New Count</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Inventory Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td><Link to="/app/count">12/31/2018</Link>
              </td>
            </tr>
            <tr className="even">
              <td><Link to="/app/count">11/30/2018</Link>
              </td>
            </tr><tr className="odd">
              <td><Link to="/app/count">10/31/2018</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Inventory;