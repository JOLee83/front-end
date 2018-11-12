import React, { Component } from 'react';
class AppHome extends Component {

  render() {
    return (
      <div className="home">
        <table className="home-table">
          <thead>
            <tr>
              <th colSpan="2">Last Inventory</th>
            </tr>
            <tr>
              <th colSpan="2">For "Company Name"</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>Date</td>
              <td>12/17/2018</td>
            </tr>
            <tr className="even">
              <td>Sales</td>
              <td>$10,000.00</td>
            </tr>
            <tr className="odd">
              <td>COGS$</td>
              <td>$2,000.00</td>
            </tr>
            <tr className="even">
              <td>COGS%</td>
              <td>20%</td>
            </tr>
            <tr className="odd">
              <td>Ending$</td>
              <td>$1,217.83</td>
            </tr>
            <tr className="even">
              <td>Beginning$</td>
              <td>$915.81</td>
            </tr>
            <tr className="odd">
              <td>Adjustment$</td>
              <td>$302.02</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2"></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default AppHome;