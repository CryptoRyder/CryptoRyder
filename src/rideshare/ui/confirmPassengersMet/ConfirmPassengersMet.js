import React, { Component } from 'react'

class ConfirmPassengersMet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gps_location: '',
      passengers: ''
    }
  }

  onGpsLocationChange(event) {
    this.setState({ gps_location: event.target.value })
  }

  onPassengersChange(event) {
    this.setState({ passengers: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onConfirmPassengersMetFormSubmit(this.props.ride_number, this.state.passengers, this.state.gps_location)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">GPS Location</label>
          <input id="gps_location" type="text" value={this.state.gps_location} onChange={this.onGpsLocationChange.bind(this)} placeholder="GPS Location" />

          <label htmlFor="name">Passengers</label>
          <textarea id="passengers" type="text" value={this.state.passengers} onChange={this.onPassengersChange.bind(this)} placeholder="Passengers" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Confirm Passengers Met</button>
        </fieldset>
      </form>
    )
  }
}

export default ConfirmPassengersMet
