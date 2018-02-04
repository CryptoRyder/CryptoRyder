import React, { Component } from 'react'

class Payment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations.</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Payment
