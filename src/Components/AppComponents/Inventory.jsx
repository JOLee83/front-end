import React, { Component } from 'react';
import axios from 'axios'

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'


class Inventory extends Component {
  state = {
    inventories: []
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/inventories")
      .then(json => {
        this.setState({
          inventories: json.data
        })
        console.log(this.state.inventories)
      })
  }
  render() {
    return (
      <>
        <div className="button-div">
          {/* <input type="date" /> */}
          <Link to="/app/count"><button>New Count</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inventories.map((inventory, index) => {
              if (index % 2 === 0) {
                return (
                  <tr className="odd">
                    <td>
                      <Link to={`/app/count/${inventory.id}`}>{new Date(inventory.inventoryDate).toLocaleDateString()}</Link>
                    </td>
                    <td>
                      <Link to={`/app/count/${inventory.id}`}>{inventory.inventoryTotal}</Link>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr className="even">
                    <td>
                      <Link to={`/app/count/${inventory.id}`}>{new Date(inventory.inventoryDate).toLocaleDateString()}</Link>
                    </td>
                    <td>
                      <Link to={`/app/count/${inventory.id}`}>{inventory.inventoryTotal}</Link>
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

export default Inventory;