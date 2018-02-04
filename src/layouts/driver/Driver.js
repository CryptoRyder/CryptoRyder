import React, { Component } from 'react'
import { Link } from 'react-router'
import CreateRideContainer from '../../rideshare/ui/createride/CreateRideContainer'

class Driver extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Driver</h1>
            <p>Form here</p>
            <CreateRideContainer/>
          </div>
        </div>
      </main>
    )
  }
}

export default Driver
