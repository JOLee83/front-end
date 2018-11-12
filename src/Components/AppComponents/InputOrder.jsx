import React, { Component } from 'react';

class InputOrder extends Component {

  render() {
    return (
      <div className="input-order">


        <form>

          <div>
            <input className="num" type="number" />
            <h4>Price($)</h4>
          </div>
          <div>
            <input className="num" type="number" />
            <h4>Count</h4>
          </div>
          <div>
            <input />
            <h4>Item</h4>
          </div>
          <div>
            <button>Add Item</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price($)</th>
              <th>Count</th>

            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>Item 1</td>
              <td>$12.99</td>
              <td>01</td>
              <td><button>Delete</button></td>
            </tr>
            <tr className="even">
              <td>Item 2</td>
              <td>$80.88</td>
              <td>12</td>
              <td><button>Delete</button></td>

            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>02</th>
              <th>$93.87</th>
              <th>13</th>
              <th>Totals</th>
            </tr>
          </tfoot>
        </table>
        <form>
          <div>
            <input />
            <h4>Vendor</h4>
          </div>
          <div>
            <input type="date" />
            <h4>Date</h4>
          </div>
          <div>
            <button>Submit Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputOrder;