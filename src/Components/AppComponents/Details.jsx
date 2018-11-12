import React, { Component } from 'react';


class Details extends Component {
  state = {}
  render() {
    return (
      <>
        <form>
          <input type="date" />
          <h4>Begin Date</h4>
          <input type="date" />
          <h4>End Date</h4>
          <input type="number" />
          <h4>Sales($)</h4>
          <div className="button-div">
            <button>Generate Report</button>
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
              <td>12/01/2018</td>
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
      </>
    );
  }
}

export default Details;