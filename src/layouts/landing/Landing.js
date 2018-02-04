import React, { Component } from 'react'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Welcome to CryptoRyder!</h1>
            <p>Find out how you can contribute to the decentralized transportation future!</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Landing
