import React, { Component } from 'react';
import axios from 'axios'

class Details extends Component {
  state = {
    confirmSubmit: false,
    inventories: [],
    begin: 0,
    end: 0,
    sales: .00001,
    purchases: 0,
    date: new Date().toLocaleDateString()
  }
  componentDidMount() {
    axios.get("https://localhost:5001/api/inventories")
      .then(json => {
        this.setState({
          inventories: json.data
        })
      })
  }
  updateBegin = e => {
    this.setState({ begin: e.target.value })
  }
  updateEnd = e => {
    this.setState({ end: e.target.value })
  }
  updatePurchases = e => {
    this.setState({ purchases: e.target.value })
  }
  updateSales = e => {
    this.setState({ sales: e.target.value })
  }
  updateDate = e => {
    console.log(e.target.value)
    this.setState({ date: new Date(`${e.target.value}T00:00:00`).toLocaleDateString() })
  }
  submitReport = e => {
    axios.post("https://localhost:5001/api/reports", { inventoriesBegin: this.state.begin, inventoriesEnd: this.state.end, sales: this.state.sales, purchases: this.state.purchases, reportDate: this.state.date })
      .then(() => {
        this.props.history.push("/app/reports")
      })
  }
  confirmSubmit = () => {
    this.setState(prevState => ({
      confirmSubmit: !prevState.confirmSubmit
    }))
  }
  render() {
    return (
      <>
        <div class={this.state.confirmSubmit ? "confirm" : "unconfirm"}>
          <div class="confirm-box">
            <p>Are You Sure?</p>
            <div>
              <button onClick={this.submitReport}>Yes</button>
              <button onClick={() => { this.confirmSubmit() }}>No</button>
            </div>
          </div>
        </div>
        <form>
          <select onChange={(e) => this.updateBegin(e)}>
            <option value={0}>Choose Beginning</option>
            {this.state.inventories.map((inventory, index) => {
              return (
                <option key={index} value={inventory.inventoryTotal}>{new Date(inventory.inventoryDate).toLocaleDateString()}</option>
              )
            })}
          </select >
          <h4>Beginning Inventory</h4>
          <select onChange={(e) => this.updateEnd(e)}>
            <option value={0}>Choose Ending</option>
            {this.state.inventories.map((inventory, index) => {
              return (
                <option key={index} value={inventory.inventoryTotal}>{new Date(inventory.inventoryDate).toLocaleDateString()}</option>
              )
            })}
          </select>
          <h4>Ending Inventory</h4>
          <input type="number" onChange={(e) => this.updatePurchases(e)} />
          <h4 >Purchases($)</h4>
          <input type="number" onChange={(e) => this.updateSales(e)} />
          <h4>Sales($)</h4>
          <input onChange={(e) => { this.updateDate(e) }} type="date" />
          <h4>Report Date</h4>
          <div className="button-div">
            <button onClick={() => { this.confirmSubmit() }}>Submit Report</button>
          </div>
        </form>
        <table className="home-table">
          <thead>
            <tr>
              <th colSpan="2">Inventory Report</th>
            </tr>
            <tr>
              <th colSpan="2">For "Company Name"</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>Date</td>
              <td>{this.state.date}</td>
            </tr>
            <tr className="even">
              <td>Beginning$</td>
              <td>${parseFloat(this.state.begin).toFixed(2)}</td>
            </tr>
            <tr className="odd">
              <td>+ Purchases$</td>
              <td>${parseFloat(this.state.purchases).toFixed(2)}</td>
            </tr>
            <tr className="even">
              <td>- Ending$</td>
              <td>${parseFloat(this.state.end).toFixed(2)}</td>
            </tr>
            <tr className="odd">
              <td>= COGS $</td>
              <td>${(parseFloat(this.state.begin) + parseFloat(this.state.purchases) - parseFloat(this.state.end)).toFixed(2)}</td>
            </tr>
            <tr className="even">
              <td> / Sales $</td>
              <td>${parseFloat(this.state.sales).toFixed(2)}</td>
            </tr>
            <tr className="odd">
              <td>= COGS %</td>
              <td>{Math.round(((parseFloat(this.state.begin) + parseFloat(this.state.purchases) - parseFloat(this.state.end)) / parseFloat(this.state.sales) * 100))}%</td>
            </tr>
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

export default Details;