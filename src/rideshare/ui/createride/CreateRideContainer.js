import { connect } from 'react-redux'
import CreateRide from './CreateRide'
import { createRide } from './CreateRideActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateRideFormSubmit: (expected_payment, capacity, origin_address, destination_address, confirmed_at, depart_at) => {
      dispatch(createRide(expected_payment, capacity, origin_address, destination_address, confirmed_at, depart_at))
    }
  }
}

const CreateRideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRide)

export default CreateRideContainer
