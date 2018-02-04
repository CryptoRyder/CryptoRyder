import { connect } from 'react-redux'
import CreateShipment from './CreateShipment'
import { createShipment } from './CreateShipmentActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateRideshareFormSubmit: (expected_payment, capacity, origin_address, destination_address, confirmed_at, depart_at) => {
      dispatch(createRide(expected_payment, capacity, origin_address, destination_address, confirmed_at, depart_at))
    }
  }
}

const CreateShipmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateShipment)

export default CreateShipmentContainer
