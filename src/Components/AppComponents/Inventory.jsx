import React, { Component } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'


class Inventory extends Component {
  state = {
    confirmDelete: false,
    inventories: [],
    deleteId: null
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
  confirmDelete = (inventoryId) => {
    this.setState(prevState => ({
      confirmDelete: !prevState.confirmDelete,
      deleteId: inventoryId
    }))
  }
  deleteInventory = () => {
    axios.delete("https://localhost:5001/api/inventories/" + this.state.deleteId)
      .then(json => {
        this.setState({
          inventories: this.state.inventories.reverse().filter(inventory => inventory.id !== this.state.deleteId)
        })
      }).then(() => { this.confirmDelete() })
  }

  render() {
    return (
      <>
        <div className={this.state.confirmDelete ? "confirm" : "unconfirm"}>
          <div className="confirm-box">
            <p>Delete Count?</p>
            <div>
              <button onClick={this.deleteInventory}>Yes</button>
              <button onClick={() => this.confirmDelete(null)}>No</button>
            </div>
          </div>
        </div>
        <div className="inv-div">
          <header className="breadcrumbs">
            <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
            <span className="active"><i className="fas fa-clipboard-list" /> Inventory</span>
            <span><i className="fas fa-circle" /></span>
          </header>
          <div className="button-div">
            <Link to="/app/count"><button>New Count</button></Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.inventories.reverse().map((inventory, index) => {
                if (index % 2 === 0) {
                  return (
                    <tr key={index} className="odd">
                      <td className="data-one">
                        {new Date(inventory.inventoryDate).toLocaleDateString()}
                      </td>
                      <td className="data-two">
                        ${inventory.inventoryTotal.toFixed(2)}
                      </td>
                      <td className="data-three">
                        <button onClick={() => this.confirmDelete(inventory.id)}>
                          <i className="fas fa-trash-alt" />
                        </button>
                      </td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={index} className="even">
                      <td className="data-one">
                        {new Date(inventory.inventoryDate).toLocaleDateString()}
                      </td>
                      <td className="data-two">
                        ${inventory.inventoryTotal.toFixed(2)}
                      </td>
                      <td className="data-three">
                        <button onClick={() => this.confirmDelete(inventory.id)}>
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

export default Inventory;