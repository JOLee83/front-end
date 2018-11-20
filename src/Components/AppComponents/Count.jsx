import React, { Component } from 'react';
import axios from 'axios'
class Count extends Component {
  state = {
    newItemName: "",
    newItemPrice: null,
    items: [],
    inventoryDetails: []
  }
  componentDidMount() {

    if (this.props.match.params.inventoriesId) {
      console.log("if")
      axios.get("https://localhost:5001/api/items")
        .then(json => {
          this.setState({
            items: json.data
          })
        })
      axios.get(`https://localhost:5001/api/inventorydetails/${this.props.match.params.inventoriesId}`)
        .then(json => {
          console.log(json.data)
          this.setState({
            inventoryDetails: json.data
          })

        })
      console.log(this.state.inventoryDetails)
    } else {
      console.log("else")

      axios.get("https://localhost:5001/api/items")
        .then(json => {
          this.setState({
            items: json.data
          })
          console.log(this.state.items)
        })
    }
  }
  _newItemName = (e) => {
    this.setState({
      newItemName: e.target.value
    })
    console.log(this.state.newItemName)
  }
  _newItemPrice = (e) => {
    this.setState({
      newItemPrice: e.target.value
    })
    console.log(this.state.newItemPrice)
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
    this.setState({ items })
  }
  render() {
    return (

      <div className="count-div">
        <form>
          <div>
            <input onChange={this._newItemName} />
            <h4>Item Name</h4>
          </div>
          <div>
            <input type="number" step="0.01" onChange={this._newItemPrice} />
            <h4>Price ($)</h4>
          </div>
          <div>
            <button onClick={this.addItem}>Add to List</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Count</th>
              <th>Price($)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <tr key={index} className="odd">
                    <td>
                      <input
                        value={item.itemName}
                        onChange={(e) => this.updateName(e, item.id)}
                      />
                    </td>
                    <td>
                      <input
                        // value={this.state.inventoryDetails.map(detail => {
                        //   if(detail.id === item.id){
                        //     return detail.itemsO
                        //   }
                        // })}
                        type="number" />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.itemPrice}
                        step="any"
                        onChange={(e) => this.updatePrice(e, item.id)}
                      />
                    </td>
                    <td>
                      <button onClick={() => this.updateItem(item.id, item.itemName, item.itemPrice)} > Update</button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr key={index} className="even">
                    <td>
                      <input
                        value={item.itemName}
                        onChange={(e) => this.updateName(e, item.id)}
                      />
                    </td>
                    <td>
                      <input type="number" />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.itemPrice}
                        step="any"
                        onChange={(e) => this.updatePrice(e, item.id)}
                      />
                    </td>
                    <td>
                      <button onClick={() => this.updateItem(item.id, item.itemName, item.itemPrice)}> Update</button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              }

            })}


          </tbody>
        </table>
        <form>
          <figure></figure>
          <h4>Total</h4>
          <input type="date" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Count;