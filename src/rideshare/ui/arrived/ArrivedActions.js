import RideshareContract from '../../../../build/contracts/Rideshare.json'
// import { loginUser } from '../loginbutton/LoginButtonActions'
import { browserHistory } from 'react-router'
import store from '../../../store'

const contract = require('truffle-contract')

export function arrived(ride_number) {
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


          // Attempt to sign up user.
          rideshareInstance.arrived(ride_number, {from: coinbase})
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
