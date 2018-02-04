import React, { Component } from 'react'

class ConfirmDriverMet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gps_location: ''
    }
  }

  onGpsLocationChange(event) {
    this.setState({ gps_location: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onConfirmDriverMetFormSubmit(this.props.ride_number, this.state.gps_location)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">GPS Location</label>
          <input id="gps_location" type="text" value={this.state.gps_location} onChange={this.onGpsLocationChange.bind(this)} placeholder="GPS Location" />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Confirm Driver Met</button>
        </fieldset>
      </form>
    )
  }
}

export default ConfirmDriverMet
