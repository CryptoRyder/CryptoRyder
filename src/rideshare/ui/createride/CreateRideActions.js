import RideshareContract from '../../../../build/contracts/Rideshare.json'
// import { loginUser } from '../loginbutton/LoginButtonActions'
import { browserHistory } from 'react-router'
import store from '../../../store'

const contract = require('truffle-contract')

export function createRide(expected_payment, capacity, origin_address, destination_address, confirmed_at, depart_at) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const rideshare = contract(RideshareContract)
      rideshare.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var rideshareInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        rideshare.deployed().then(function(instance) {
          rideshareInstance = instance

          // console.log('shipping cost');
          // console.log(shipping_cost);
          // console.log(shipping_cost * 10^18);
          // console.log(parseInt(shipping_cost * Math.pow(10,18)))
          console.log(expected_payment);
          console.log(parseInt(expected_payment * Math.pow(10,18)));

          // Attempt to sign up user.
          rideshareInstance.createRide(parseInt(expected_payment * Math.pow(10,18)), capacity, origin_address, destination_address, confirmed_at, depart_at, {from: coinbase})
          .then(function(result) {
            // If no error, login user.
            return browserHistory.push('/dashboard')
          })
          .catch(function(result) {
            // If error...
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
