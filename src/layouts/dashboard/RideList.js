import React, { Component } from 'react'
import RideshareContract from '../../../build/contracts/Rideshare.json'
import store from '../../store'
import JoinRideContainer from '../../rideshare/ui/joinride/JoinRideContainer'

const contract = require('truffle-contract')

class RideList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rideshares: []
    };
    this.getRides = this.getRides.bind(this);
  }

  componentDidMount() {
    this.getRides();
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
          console.log('get rideshare count')
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
              console.log(this.state.rideshares);
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
    let web3 = store.getState().web3.web3Instance

    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            {this.state.rideshares.map((ride, i) => {
              console.log(ride);
              return (
                <p>{ride[0]}, {web3.fromWei(ride[1], "ether" ).toNumber()}, {ride[2]["c"][0]}, {ride[3]}, {ride[4]}, 
                <JoinRideContainer ride_number={i} payment={web3.fromWei(ride[1], "ether" ).toNumber()}/>
                <Link to={`/details/${i}`}>Dashboard</Link>
                </p>
              )
            })}
          </div>
        </div>
      </main>
    )
  }
}

export default RideList
