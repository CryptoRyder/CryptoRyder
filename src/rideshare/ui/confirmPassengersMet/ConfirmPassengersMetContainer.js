import { connect } from 'react-redux'
import ConfirmPassengersMet from './ConfirmPassengersMet'
import { confirmPassengersMet } from './ConfirmPassengersMetActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onConfirmPassengersMetFormSubmit: (ride_number, passengers, gps_location) => {
      dispatch(confirmPassengersMet(ride_number, passengers, gps_location))
    }
  }
}

const ConfirmPassengersMetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmPassengersMet)

export default ConfirmPassengersMetContainer
