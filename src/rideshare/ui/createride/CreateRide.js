import React, { Component } from 'react'

class CreateRide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expected_payment: '',
      capacity: 0,
      origin_address: '',
      destination_address: '',
      confirmed_at: 0,
      depart_at: 0
    }
  }

  onExpectedPaymentChange(event) {
    this.setState({ expected_payment: event.target.value })
  }

  onCapacityChange(event) {
    this.setState({ capacity: event.target.value })
  }

  onOriginAddressChange(event) {
    this.setState({ origin_address: event.target.value })
  }

  onDestinationAddressChange(event) {
    this.setState({ destination_address: event.target.value })
  }

  onConfirmedAtChange(event) {
    this.setState({ confirmed_at: event.target.value })
  }

  onDepartAtChange(event) {
    this.setState({ depart_at: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onCreateRideFormSubmit(this.state.expected_payment, this.state.capacity, this.state.origin_address, this.state.destination_address, this.state.confirmed_at, this.state.depart_at)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">Expected Payment</label>
          <input id="expected_payment" type="text" value={this.state.expected_payment} onChange={this.onExpectedPaymentChange.bind(this)} placeholder="Expected Payment" />

          <label htmlFor="name">Capacity</label>
          <input id="capacity" type="text" value={this.state.capacity} onChange={this.onCapacityChange.bind(this)} placeholder="Capacity" />

          <label htmlFor="name">Origin Address</label>
          <input id="origin_address" type="text" value={this.state.origin_address} onChange={this.onOriginAddressChange.bind(this)} placeholder="Origin Address" />

          <label htmlFor="name">Destination Address</label>
          <input id="destination_address" type="text" value={this.state.destination_address} onChange={this.onDestinationAddressChange.bind(this)} placeholder="Destination Address" />

          <label htmlFor="name">Needs to be confirmed by:</label>
          <input id="confirmed_at" type="text" value={this.state.confirmed_at} onChange={this.onConfirmedAtChange.bind(this)} placeholder="Confirmed At" />

          <label htmlFor="name">Depart at:</label>
          <input id="depart_at" type="text" value={this.state.depart_at} onChange={this.onDepartAtChange.bind(this)} placeholder="Depart At" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Create Rideshare</button>
        </fieldset>
      </form>
    )
  }
}

export default CreateRide
