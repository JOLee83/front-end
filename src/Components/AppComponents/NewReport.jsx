import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../../Config';

class NewReport extends Component {
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
    axios.get(`${config.API_URL}/inventories`)
      .then(json => {
        this.setState({
          inventories: json.data.reverse()
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
    axios.post(`${config.API_URL}/reports`, { inventoriesBegin: this.state.begin, inventoriesEnd: this.state.end, sales: this.state.sales, purchases: this.state.purchases, reportDate: this.state.date })
      .then(() => {
        this.props.history.push("/app/reports")
      })
  }
  confirmSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({
      confirmSubmit: !prevState.confirmSubmit
    }))
  }
  render() {
    return (
      <>
        <div className={this.state.confirmSubmit ? "confirm" : "unconfirm"}>
          <div className="confirm-box">
            <p>Submit Report?</p>
            <div>
              <button onClick={this.submitReport}>Yes</button>
              <button onClick={(e) => { this.confirmSubmit(e) }}>No</button>
            </div>
          </div>
        </div>
        <div className="details-div">
          <header className="breadcrumbs">
            <span><Link exact to="/app"><i className="fas fa-home" /> Home</Link></span>
            <span ><Link to="/app/reports"><i className="fas fa-file-alt" /> Reports</Link></span>
            <span className="active"><i className="fas fa-file-alt" /> Report</span>
          </header>
          <form onSubmit={(e) => { this.confirmSubmit(e) }}>
            <div>
              <select onChange={(e) => this.updateBegin(e)}>
                <option value={0}>Choose Beginning</option>
                {this.state.inventories.map((inventory, index) => {
                  return (
                    <option key={index} value={inventory.inventoryTotal}>{new Date(inventory.inventoryDate).toLocaleDateString()}</option>
                  )
                })}
              </select >
              <h4>Beginning Inventory</h4>
            </div>
            <div>
              <select onChange={(e) => this.updateEnd(e)}>
                <option value={0}>Choose Ending</option>
                {this.state.inventories.map((inventory, index) => {
                  return (
                    <option key={index} value={inventory.inventoryTotal}>{new Date(inventory.inventoryDate).toLocaleDateString()}</option>
                  )
                })}
              </select>
              <h4>Ending Inventory</h4>
            </div>
            <div>
              <input type="number" min="0" step=".01" onChange={(e) => this.updatePurchases(e)} />
              <h4 >Purchases($)</h4>
            </div>
            <div>
              <input type="number" min="0" step=".01" onChange={(e) => this.updateSales(e)} />
              <h4>Sales($)</h4>
            </div>
            <div>
              <input onChange={(e) => { this.updateDate(e) }} type="date" />
              <h4>Report Date</h4>
            </div>
            <div className="button-div">
              <button>Submit Report</button>
            </div>
          </form>
          <table className="home-table">
            <thead>
              <tr>
                <th colSpan="2">Inventory Report</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td className="left"><i className="fas fa-calendar-alt" /> Date</td>
                <td className="right">{this.state.date}</td>
              </tr>
              <tr className="even">
                <td className="left"><i className="fas fa-plus" /> Beginning</td>
                <td className="right">${parseFloat(this.state.begin).toFixed(2)}</td>
              </tr>
              <tr className="odd">
                <td className="left"><i className="fas fa-plus" /> Purchases</td>
                <td className="right">${parseFloat(this.state.purchases).toFixed(2)}</td>
              </tr>
              <tr className="even">
                <td className="left"><i className="fas fa-minus" /> Ending</td>
                <td className="right">${parseFloat(this.state.end).toFixed(2)}</td>
              </tr>
              <tr className="odd">
                <td className="left"><i className="fas fa-equals" /> COGS <i className="fas fa-dollar-sign" /></td>
                <td className="right">${(parseFloat(this.state.begin) + parseFloat(this.state.purchases) - parseFloat(this.state.end)).toFixed(2)}</td>
              </tr>
              <tr className="even">
                <td className="left"><i className="fas fa-divide" /> Sales</td>
                <td className="right">${parseFloat(this.state.sales).toFixed(2)}</td>
              </tr>
              <tr className="odd">
                <td className="left"><i className="fas fa-equals" /> COGS <i className="fas fa-percent" /></td>
                <td className="right">{Math.round(((parseFloat(this.state.begin) + parseFloat(this.state.purchases) - parseFloat(this.state.end)) / parseFloat(this.state.sales) * 100))}%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}

export default NewReport;