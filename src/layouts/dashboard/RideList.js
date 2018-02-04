import React, { Component } from 'react'
import RideshareContract from '../../../build/contracts/Rideshare.json'
import store from '../../store'

const contract = require('truffle-contract')

class RideList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rideshares: []
    };
  }

  getRides() {
    let web3 = store.getState().web3.web3Instance

    const rideshare = contract(RideshareContract)
    rideshare.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var rideshareInstance

    var _this = this;

    // Get current ethereum wallet.
    web3.eth.getCoinbase((error, coinbase) => {
      // Log errors, if any.
      if (error) {
        console.error(error);
      }

      rideshare.deployed().then(function(instance) {
        rideshareInstance = instance

        rideshareInstance.getRideCount.call()
        .then(function(result) {
          console.log('get shipment count')
          console.log(result)
          let rideshareCount = result["c"][0];

          for (let i = 0; i < rideshareCount; i++) {
            rideshareInstance.getRide.call(i)
            .then(function(result) {
              // If no error, login user.
              console.log('getridesharecount')
              console.log(result)
              var tempArr = _this.state.rideshares;
              let tempRideshares = tempArr.concat([result]);
              _this.setState({rideshares: tempRideshares})
              console.log('test2');
              // debugger
              // return result;
              // return dispatch(loginUser())
            })
            // Attempt to sign up user.
            .catch(function(result) {
              // If error...
            })
          }
        })
      })
    })
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations </strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
            {this.state.rideshares.map((el, i) => {
              
            })}
          </div>
        </div>
      </main>
    )
  }
}

export default RideList
