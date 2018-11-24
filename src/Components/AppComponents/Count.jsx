import React, { Component } from 'react';
import axios from 'axios'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Count extends Component {
  state = {
    confirmSubmit: false,
    newItemName: "",
    newItemPrice: null,
    items: [],
    total: 0,
    date: null
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/items")
      .then(json => {
        this.setState({
          items: json.data
        })
      })
  }
  _newItemName = (e) => {
    this.setState({
      newItemName: e.target.value
    })
  }
  _newItemPrice = (e) => {
    this.setState({
      newItemPrice: e.target.value
    })
  }
  addItem = (e) => {
    axios.post("https://localhost:5001/api/items", { itemName: this.state.newItemName, itemPrice: this.state.newItemPrice })
      .then(json => {
        this.setState({
          items: this.state.items.concat(json.data)
        })
      })
  }
  deleteItem = (itemId) => {
    axios.delete("https://localhost:5001/api/items/" + itemId)
      .then(json => {
        this.setState({
          items: this.state.items.filter(item => item.id !== itemId)
        })
      })
  }
  updateItem = (itemId, itemName, itemPrice) => {
    axios.put("https://localhost:5001/api/items/" + itemId, { id: itemId, itemName: itemName, itemPrice: itemPrice })
  }
  updateName = (e, itemId) => {
    const index = this.state.items.findIndex(f => f.id === itemId)
    const item = this.state.items[index]
    const items = [...this.state.items]
    item.itemName = e.target.value
    items[index] = item
    this.setState({ items })
  }
  updatePrice = (e, itemId) => {
    const index = this.state.items.findIndex(f => f.id === itemId)
    const item = this.state.items[index]
    const items = [...this.state.items]
    item.itemPrice = parseFloat(e.target.value, 10)
    items[index] = item
    this.setState({ items }, () => this.updateTotal())
  }

  updateTotal = (e, itemPrice) => {
    const sum = +(itemPrice) * e.target.value
    this.setState(prevState => ({
      total: prevState.total + sum
    }))
  }
  updateDate = e => {
    this.setState({ date: e.target.value })
  }
  submitCount = () => {
    axios.post("https://localhost:5001/api/inventories", { inventoryTotal: this.state.total, inventoryDate: this.state.date })
      .then(() => {
        this.props.history.push("/app/inventory")
      })
  }
  confirmSubmit = () => {
    this.setState(prevState => ({
      confirmSubmit: !prevState.confirmSubmit
    }))
  }
  render() {
    return (
      <div className="count-div">
        <div class={this.state.confirmSubmit ? "confirm" : "unconfirm"}>
          <div class="confirm-box">
            <p>Are You Sure?</p>
            <div>
              <button onClick={this.submitCount}>Yes</button>
              <button onClick={() => this.confirmSubmit()}>No</button>
            </div>
          </div>
        </div>
        <header className="breadcrumbs">
          <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
          <span><Link exact to="/app/inventory"><i className="fas fa-clipboard-list" /> Inventory</Link></span>
          <span className="active"><i class="fas fa-list-ol" /> Count</span>
        </header>
        <form>
          <div className="form-div">
            <h2>New Item</h2>
            <button onClick={this.addItem}>Add to List</button>
          </div>
          <div className="form-div">
            <div>

              <input onChange={this._newItemName} />
              <h4>Item Name</h4>
            </div>
            <div>
              <input type="number" step="0.01" onChange={this._newItemPrice} />
              <h4>Cost ($)</h4>
            </div>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Count</th>
              <th>Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <tr key={index} className="odd">
                    <td className="data-one">
                      <input
                        value={item.itemName}
                        onChange={(e) => this.updateName(e, item.id)}
                      />
                    </td>
                    <td className="data-two">
                      <input
                        onChange={(e) => this.updateTotal(e, item.itemPrice)}
                        type="number" />
                    </td>
                    <td className="data-three">
                      <input
                        type="number"
                        value={item.itemPrice}
                        step="any"
                        onChange={(e) => this.updatePrice(e, item.id)}
                      />
                    </td>
                    <td className="data-four">
                      <button onClick={() => this.updateItem(item.id, item.itemName, item.itemPrice)} >
                        <i class="far fa-arrow-alt-circle-up" />
                      </button>
                    </td>
                    <td className="data-five">
                      <button onClick={() => this.deleteItem(item.id)}>
                        <i class="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr key={index} className="even">
                    <td className="data-one">
                      <input
                        value={item.itemName}
                        onChange={(e) => this.updateName(e, item.id)}
                      />
                    </td>
                    <td className="data-two">
                      <input
                        onChange={(e) => this.updateTotal(e, item.itemPrice)}
                        type="number" />
                    </td>
                    <td className="data-three">
                      <input
                        type="number"
                        value={item.itemPrice}
                        step="any"
                        onChange={(e) => this.updatePrice(e, item.id)}
                      />
                    </td>
                    <td className="data-four">
                      <button onClick={() => this.updateItem(item.id, item.itemName, item.itemPrice)} >
                        <i class="far fa-arrow-alt-circle-up" />
                      </button>
                    </td>
                    <td className="data-five">
                      <button onClick={() => this.deleteItem(item.id)}>
                        <i class="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colspan="2">Total</th>
              <th colspan="3">${this.state.total.toFixed(2)}</th>
            </tr>
            <tr>
              <th colspan="3">
                <input
                  type="date"
                  onChange={(e) => { this.updateDate(e) }} />
              </th>
              <th colspan="2">
                <button onClick={() => this.confirmSubmit()}>Submit</button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div >
    );
  }
}

export default Count;