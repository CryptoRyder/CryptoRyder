import React, { Component } from 'react'

class Arrived extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    this.props.onArrivedFormSubmit(this.props.ride_number, this.props.payment);
  }

  render() {
    return(
      <button onClick={this.handleSubmit.bind(this)}>Arrived</button>
    )
  }
}

export default Arrived
