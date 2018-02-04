import { connect } from 'react-redux'
import ConfirmDriverMet from './ConfirmDriverMet'
import { confirmDriverMet } from './ConfirmDriverMetActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onConfirmDriverMetFormSubmit: (ride_number, gps_location) => {
      dispatch(confirmDriverMet(ride_number, gps_location))
    }
  }
}

const ConfirmDriverMetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmDriverMet)

export default ConfirmDriverMetContainer
