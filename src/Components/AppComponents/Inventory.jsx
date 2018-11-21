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
  deleteInventory = (inventoryId) => {
    axios.delete("https://localhost:5001/api/inventories/" + inventoryId)
      .then(json => {
        this.setState({
          inventories: this.state.inventories.filter(inventory => inventory.id !== inventoryId)
        })
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
                      {new Date(inventory.inventoryDate).toLocaleDateString()}
                    </td>
                    <td>
                      {inventory.inventoryTotal}
                    </td>
                    <td><button onClick={() => this.deleteInventory(inventory.id)}>Delete</button></td>
                  </tr>
                )
              } else {
                return (
                  <tr className="even">
                    <td>
                      {new Date(inventory.inventoryDate).toLocaleDateString()}
                    </td>
                    <td>
                      {inventory.inventoryTotal}
                    </td>
                    <td><button onClick={() => this.deleteInventory(inventory.id)}> Delete</button></td>

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