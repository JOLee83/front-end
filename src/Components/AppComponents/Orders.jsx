import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Orders extends Component {
  render() {
    return (
      <>
        <div className="button-div">
          <Link to="/inputorder"><button>New Order</button></Link>
        </div>
        <div className="orders">
          <table className="orders-table">
            <thead>
              <tr>
                <th colSpan="3">Orders</th>
              </tr>
              <tr>
                <th>Vendor</th>
                <th>Amount($)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td>Vendor A</td>
                <td>$500.50</td>
                <td>12/17/18</td>

              </tr>
              <tr className="even">
                <td>Venodr B</td>
                <td>$20.33</td>
                <td>12/17/18</td>

              </tr>
              <tr className="odd">
                <td>Vendor C</td>
                <td>$42.00</td>
                <td>12/10/18</td>

              </tr>
              <tr className="even">
                <td>Vendor A</td>
                <td>$225.50</td>
                <td>12/08/18</td>

              </tr>
              <tr className="odd">
                <td>Venodr B</td>
                <td>$19.76</td>
                <td>12/05/18</td>

              </tr>
              <tr className="even">
                <td>Vendor C</td>
                <td>$21.83</td>
                <td>12/03/18</td>

              </tr>
              <tr className="odd">
                <td>Vendor A</td>
                <td>$350.23</td>
                <td>12/01/18</td>

              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3"></th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="button-div">

          <button>See More</button>
        </div>
      </>
    );
  }
}

export default Orders;