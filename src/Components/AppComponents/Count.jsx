import React, { Component } from 'react';
class Count extends Component {
  render() {
    return (

      <div className="count-div">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>Item 1</td>
              <td><input type="number" /></td>
            </tr>
            <tr className="even">
              <td>Item 2</td>
              <td><input type="number" /></td>
            </tr>
          </tbody>
        </table>
        <form>
          <input type="date" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Count;