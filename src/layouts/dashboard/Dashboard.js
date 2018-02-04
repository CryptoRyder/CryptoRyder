import React, { Component } from 'react'
import RideList from './RideList'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <RideList/>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
