import React, { Component } from 'react'

class JoinRide extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    this.props.onJoinRideFormSubmit(this.props.ride_number, this.props.payment);
  }

  render() {
    return(
      <button onClick={this.handleSubmit.bind(this)}>Join Ride</button>
    )
  }
}

export default JoinRide
